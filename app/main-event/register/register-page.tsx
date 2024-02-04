"use client";

import FirstPage from "./register-first-page";
import SecondPage from "./register-second-page";
import { CustomImage } from "@/components/ui/file-upload";
import { Form } from "@/components/ui/form";
import { regisSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import Image from "next/image";
import { useEffect, useState, createContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormValues = z.infer<typeof regisSchema>;

export const FileUploadContext = createContext({});

function RegisterPage(props: { session: Session | null }) {
  const form = useForm<FormValues>({
    defaultValues: {
      scale: 3,
    },
    resolver: zodResolver(regisSchema),
    mode: "onBlur",
  });

  // Image State
  const [images, setImages] = useState<CustomImage | null>(null);
  const [indexRetry, setIndexRetry] = useState(-1);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const timeout = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (typeof window !== "undefined")
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    timeout();
  }, [page]);

  useEffect(() => {
    const value = localStorage.getItem("formData");

    if (value) {
      const data = JSON.parse(value);
      form.reset(data);
    }
  }, [form]);

  return (
    <main className="bg-[#1E1E1E] font-anderson text-ted-white">
      <Form {...form}>
        <form className="relative mx-auto my-16 flex w-4/5 flex-col gap-12 overflow-hidden rounded-lg bg-[#1E1E1E] p-8 drop-shadow-[2px_4px_25px_rgba(75,75,75,0.5)] lg:gap-16 lg:p-16">
          <div className="flex flex-col gap-4 xl:min-w-[950px] xl:self-center">
            <h2 className="w-fit bg-gradient-to-r from-[#FDB10E] via-transparent to-transparent text-2xl font-bold italic lg:text-5xl">
              FORMULIR PENDAFTARAN
            </h2>
            <p className="italic lg:text-3xl">
              Silakan isi formulir ini untuk menyelesaikan pendaftaran Anda
            </p>
          </div>

          <FileUploadContext.Provider
            value={{ images, setImages, indexRetry, setIndexRetry }}
          >
            {page === 0 && (
              <FirstPage
                form={form}
                setPage={setPage}
                session={props.session}
              />
            )}

            {page === 1 && <SecondPage form={form} setPage={setPage} />}
          </FileUploadContext.Provider>

          <Image
            src="/decoration/contour.png"
            alt="Contour"
            className="absolute -right-56 -top-44 h-[400px] w-[400px] lg:-right-96 lg:-top-80 lg:h-[750px] lg:w-[750px]"
            width={750}
            height={750}
          />

          <Image
            src="/decoration/contour.png"
            alt="Contour"
            className="absolute -bottom-44 -right-56 h-[400px] w-[400px] lg:-bottom-80 lg:-right-96 lg:h-[750px] lg:w-[750px]"
            width={750}
            height={750}
          />
        </form>
      </Form>
    </main>
  );
}

export default RegisterPage;
