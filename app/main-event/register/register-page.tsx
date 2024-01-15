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

  return (
    <section className="text-ted-white font-anderson bg-[#1E1E1E]">
      <Form {...form}>
        <form className="relative overflow-hidden bg-[#1E1E1E] w-4/5 flex flex-col gap-12 lg:gap-16 mx-auto p-8 lg:p-16 rounded-lg drop-shadow-[2px_4px_25px_rgba(75,75,75,0.5)] my-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-5xl bg-gradient-to-r from-[#FDB10E] to-transparent w-fit via-transparent font-bold italic">
              FORMULIR PENDAFTARAN
            </h2>
            <p className="lg:text-3xl italic">
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
            src="/Contour.png"
            alt="Contour"
            className="absolute -right-56 -top-44 lg:-right-96 lg:-top-80 w-[400px] h-[400px] lg:w-[750px] lg:h-[750px]"
            width={750}
            height={750}
          />

          <Image
            src="/Contour.png"
            alt="Contour"
            className="absolute -right-56 -bottom-44 lg:-right-96 lg:-bottom-80 w-[400px] h-[400px] lg:w-[750px] lg:h-[750px]"
            width={750}
            height={750}
          />
        </form>
      </Form>
    </section>
  );
}

export default RegisterPage;
