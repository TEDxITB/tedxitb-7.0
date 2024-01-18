"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const SignInForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    // Initiate loading toast
    const loadingToast = toast.loading("Loading...", {
      description: "Please wait",
      duration: Infinity,
    });

    const res = await signIn("email", {
      email: values.email,
      callbackUrl: "/?phState=identify",
      redirect: false,
    });

    // Close loading toast
    toast.dismiss(loadingToast);

    if (!res?.ok) {
      toast.error("Error", {
        description: "Error sign in with email",
      });

      return;
    }

    toast.success("Success", {
      description: "Email sent. Check your inbox!",
    });

    router.push("/auth/verify-request");
    router.refresh();
  };

  return (
    <div className="w-full font-anderson">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2">Email</FormLabel>
                <FormControl>
                  <div>
                    <Input
                      type="email"
                      className="w-full text-black ring-offset-[#1C1C1C]"
                      {...field}
                    />
                    <FormDescription className="mt-2">
                      Enter an email address to which we will send you a
                      verification
                    </FormDescription>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit button */}
          <Button
            className="mt-14 w-full"
            size="lg"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continue with Email
          </Button>
        </form>
      </Form>

      {/* Separator */}
      <div className="relative mt-12 flex flex-row items-center">
        <span className="flex-1 border-t-2 border-white"></span>
        <span className="mx-4">OR</span>
        <span className="flex-1 border-t-2 border-white"></span>
      </div>

      {/* OAuth */}
      {/* Google */}
      <div className="mt-5 flex flex-col">
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          type="button"
          disabled={isSubmitting}
          onClick={() =>
            signIn("google", {
              redirect: true,
              callbackUrl: "/?phState=identify",
            })
          }
        >
          <Image
            alt="Google Logo"
            src="/icon/google.svg"
            width={20}
            height={20}
          />
          <span className="ml-2">Continue with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
