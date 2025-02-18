import { signIn } from "@/auth";
import { SignInProps } from "@/types/signin";
import { Button } from "@/components/ui/button";

export function SignIn({ children, provider, classname }: SignInProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button type="submit" variant="default" className={classname}>
        {children}
      </Button>
    </form>
  );
}
