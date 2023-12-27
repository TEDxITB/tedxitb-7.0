"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import * as z from "zod";
import { signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

const SignInForm = () => {
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    toast({
      variant: "loading",
      title: "Loading",
      description: "Please wait...",
      duration: Infinity,
    });

    const res = await signIn("email", {
      email: values.email,
      callbackUrl: "/?phState=identify",
      redirect: false,
    });

    if (!res?.ok) {
      toast({
        variant: "error",
        title: "Error",
        description: "Error sign in with email",
        duration: 5000,
      });
      return;
    }

    toast({
      variant: "success",
      title: "Success",
      description: "Email sent. Check your inbox!",
      duration: 5000,
    });
    router.push("/auth/verify-request");
    router.refresh();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2 font-anderson">Email</FormLabel>
                <FormControl>
                  <div>
                    <Input
                      type="email"
                      className="w-72 text-black md:w-[480px]"
                      {...field}
                    />
                    <FormDescription className="mt-2 font-inter text-white">
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
            className="mt-14 w-72 font-inter md:w-[480px]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            SIGN IN
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
          variant="outline"
          size="sm"
          className="mb-2 bg-transparent hover:bg-ted-red/90"
          type="button"
          disabled={isSubmitting}
          onClick={() =>
            signIn("google", {
              redirect: true,
              callbackUrl: "/?phState=identify",
            })
          }
        >
          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              className="p-2 md:p-1"
              alt="google"
              src="/devicon_google.svg"
              width={32}
              height={32}
            />
            <p className="font-inter">Sign In with Google</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
