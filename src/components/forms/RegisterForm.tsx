"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegisterForm } from "@/hooks/auth/useRegisterForm";

import axios from "axios";
import { useToast } from "@/hooks/use-toast";

export function RegisterForm() {
  const { toast } = useToast();
  const form = useRegisterForm();
  // const { data, error, isLoading, mutate } = useSWR(
  //   `/api/auth/register`,
  //   fetcher,
  // );

  const onSubmit = async (dataForm: {
    email: string;
    password: string;
    username: string;
  }) => {
    try {
      await axios.post("/api/auth/register", {
        email: dataForm.email,
        password: dataForm.password,
        username: dataForm.username,
      });

      // Jika sukses (misal 200 atau 201)
      toast({
        title: "Success",
        description: "User registered successfully!",
        variant: "default",
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          toast({
            title: "Error",
            description: error.response.data.body,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: `Error ${error.response.status}: ${error.response.data.message || "Something went wrong!"}`,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Error",
          description: "An unexpected error occurred!",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Masukkan username"
                  required
                />
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
                  {...field}
                  type="email"
                  placeholder="Masukkan email"
                  required
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
              <FormLabel>Password</FormLabel>
              <FormDescription>
                Password harus mengandung huruf besar, huruf kecil, angka, dan
                simbol
              </FormDescription>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Masukkan password"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </Form>
  );
}
