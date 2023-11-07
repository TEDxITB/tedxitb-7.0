"use client";

import FileUpload, { Image } from "@/components/file-upload";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "required"),
  //contoh validasi zod
  images: z
    .any()
    .refine(({ error }) => !error, "File wrong")
    .array()
    .min(1, "required"),
});

const Tes = () => {
  const [imgs, setImgs] = useState<Image[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      images: [],
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("data", data);
  };

  form.setError;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-white p-4">
      {/* contoh pakai react hook form */}
      <Form {...form}>
        <form
          className="flex w-full flex-col items-center justify-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <input className="w-full" placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>images</FormLabel>
                <FormControl>
                  <FileUpload setValue={form.setValue} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button className="border border-black" type="submit">
            Submit
          </button>
        </form>
      </Form>
      {/* contoh pakai use state */}
      <FileUpload setState={setImgs} />
    </div>
  );
};

export default Tes;
