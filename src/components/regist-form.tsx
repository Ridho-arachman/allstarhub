"use client";

import { z } from "zod";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AxiosError } from "axios";
import useSWRMutation from "swr/mutation";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/fetcher/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegister } from "@/validation/formregister";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();

  const { trigger, isMutating } = useSWRMutation(
    "/api/auth/register",
    registerUser,
  );

  const form = useForm<z.infer<typeof formRegister>>({
    resolver: zodResolver(formRegister),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // Fungsi untuk menangani submit
  async function onSubmit(formData: z.infer<typeof formRegister>) {
    try {
      const res = await trigger(formData);
      toast({
        title: "Berhasil",
        description: res.message,
        variant: "default",
        duration: 5000,
      });
      form.reset();
      router.push("/login");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast({
          title: "Gagal",
          description: err.response?.data?.error,
          variant: "destructive",
          duration: 5000,
        });
      }
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Register</CardTitle>
          <CardDescription>Buat akun Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isMutating}>
                Register
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Sudah punya akun?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
        Dengan melanjutkan, Anda setuju dengan Terms of Service dan Privacy
        Policy kami.
      </div>
    </div>
  );
}
