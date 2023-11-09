"use client";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";

export default function ToastsTest() {
  const { toast } = useToast();

  return (
    <main className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
      <Button
        onClick={() => {
          toast({
            variant: "error",
            title: "Error",
            description: "Lorem ipsum dolor sit amet",
          });
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: "error",
            icon: true,
            title: "Error",
            description: "Lorem ipsum dolor sit amet",
          });
        }}
      >
        Error with Icon
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: "success",
            title: "Success",
            description: "Lorem ipsum dolor sit amet",
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: "success",
            icon: true,
            title: "Success",
            description: "Lorem ipsum dolor sit amet",
          });
        }}
      >
        Success with Icon
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: "profile",
            title: "Profile",
            description: "Lorem ipsum dolor sit amet",
          });
        }}
      >
        Profile
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: "profile",
            icon: true,
            title: "Profile",
            description: "Lorem ipsum dolor sit amet",
          });
        }}
      >
        Profile with Icon
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: "warning",
            title: "Warning",
            description: "Lorem ipsum dolor sit amet",
          });
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: "warning",
            icon: true,
            title: "Warning",
            description: "Lorem ipsum dolor sit amet",
          });
        }}
      >
        Warning with Icon
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: "loading",
            title: "Loading",
            description: "Please Wait a Moment...",
          });
        }}
      >
        Loading
      </Button>
      <Button
        onClick={() => {
          toast({
            variant: "loading",
            icon: true,
            title: "Loading",
            description: "Please Wait a Moment...",
          });
        }}
      >
        Loading with Icon
      </Button>
    </main>
  );
}
