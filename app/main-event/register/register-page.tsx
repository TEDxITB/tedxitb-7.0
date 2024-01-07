"use client";

import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/file-upload";
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
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { regisSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";

type FormValues = z.infer<typeof regisSchema>;

function RegisterPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(regisSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: 0,
      address: "",
      job: "",
      instance: "",
      faculty: "",
      social: "",
      allergy: "",
      q1: "",
      q2: "",
      profile: "",
      q3: "",
      q4: "",
      scale: 3,
      q5: "",
      q6: "",
    },
    mode: "onBlur",
  });

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
        <form className="bg-[#1E1E1E] w-4/5 flex flex-col gap-12 lg:gap-16 mx-auto p-8 lg:p-16 rounded-lg shadow-lg shadow-[#4B4B4B] my-16">
          <div className={`${page === 2 ? "block" : "hidden"}`}>
            <Button
              onClick={() => setPage((page) => page - 1)}
              aria-label="Left Button"
              type="button"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-5xl bg-gradient-to-r from-[#FDB10E] to-transparent w-fit via-transparent font-bold italic">
              FORMULIR PENDAFTARAN
            </h2>
            <p className="lg:text-3xl italic">
              Silakan isi formulir ini untuk menyelesaikan pendaftaran Anda
            </p>
          </div>

          {page === 0 && <FirstPage form={form} setPage={setPage} />}

          {page === 1 && <SecondPage form={form} setPage={setPage} />}

          {page === 2 && <ThirdPage />}
        </form>
      </Form>
    </section>
  );
}

export default RegisterPage;

function FirstPage({
  form,
  setPage,
}: {
  form: UseFormReturn<FormValues>;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  function nextPage() {
    const {
      faculty: _f,
      allergy: _a,
      q1: _q1,
      q3: _q2,
      q4: _q3,
      q5: _q4,
      q6: _q5,
      scale: _s,
      ...firstPageData
    } = form.getValues();

    const { faculty, allergy, q1, q3, q4, q5, q6, scale, ...dirtyFields } =
      form.formState.dirtyFields;
    const errorFields = form.formState.errors;

    const dirtyFieldsKeys = Object.keys(dirtyFields) as (keyof FormValues)[];
    const errorFieldsKeys = Object.keys(errorFields) as (keyof FormValues)[];

    if (dirtyFieldsKeys.length === 10 && errorFieldsKeys.length == 0) {
      setPage((page) => page + 1);
    } else if (errorFieldsKeys.length > 0) {
      const firstError = errorFieldsKeys[0];
      form.setFocus(firstError);
    } else {
      const firstEmpty = Object.entries(firstPageData).find(
        ([_, value]) => value === "" || value === 0
      )?.[0] as keyof FormValues;

      form.setFocus(firstEmpty);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 max-w-[950px]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                htmlFor="name"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                Nama Lengkap
              </FormLabel>
              <FormControl>
                <Input
                  id="name"
                  {...field}
                  placeholder="Masukkan nama lengkapmu di sini"
                  className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                htmlFor="email"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  id="email"
                  {...field}
                  placeholder="youremail@gmail.com"
                  className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4 lg:flex-row max-w-[950px] lg:gap-8">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 grow">
                <FormLabel
                  htmlFor="phone"
                  className="lg:text-lg leading-6 tracking-wide text-ted-white"
                >
                  Nomor HP
                </FormLabel>
                <FormControl>
                  <Input
                    id="phone"
                    {...field}
                    placeholder="+6281234567890"
                    className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.phone?.message}
                </FormMessage>
                <FormDescription>Contoh: +6281234567890</FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 grow">
                <FormLabel
                  htmlFor="age"
                  className="lg:text-lg leading-6 tracking-wide text-ted-white"
                >
                  Umur
                </FormLabel>
                <FormControl>
                  <Input
                    id="age"
                    {...field}
                    placeholder="19"
                    className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                  />
                </FormControl>
                <FormMessage>{form.formState.errors.age?.message}</FormMessage>
                <FormDescription>Contoh: 19</FormDescription>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel
                htmlFor="address"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                Alamat di Bandung
              </FormLabel>
              <FormControl>
                <Input
                  id="address"
                  {...field}
                  placeholder="Jl. Ganesha No. 10"
                  className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.address?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel
                htmlFor="job"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                Pekerjaan
              </FormLabel>
              <FormControl>
                <Input
                  id="job"
                  {...field}
                  placeholder="Mahasiswa"
                  className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.job?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="instance"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel
                htmlFor="instance"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                Perusahaan/Universitas
              </FormLabel>
              <FormControl>
                <Input
                  id="instance"
                  {...field}
                  placeholder="Institut Teknologi Bandung"
                  className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.instance?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="faculty"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow text-ted-white">
              <FormLabel
                htmlFor="faculty"
                className="lg:text-lg leading-6 tracking-wide"
              >
                Jurusan/Tahun <span className="text-[#FDB10E]">(Opsional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  id="faculty"
                  {...field}
                  placeholder="Teknik Sipil/22"
                  className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.faculty?.message}
              </FormMessage>
              <FormDescription>Contoh: Teknik Sipil/22</FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel
                htmlFor="social"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                Media Sosial (Instagram/LinkedIn)
              </FormLabel>
              <FormControl>
                <Input
                  id="social"
                  {...field}
                  placeholder="@username"
                  className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.social?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="allergy"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel
                htmlFor="allergy"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                Pembatasan/Alergi Diet Apa Pun{" "}
                <span className="text-[#FDB10E]">(Opsional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  id="allergy"
                  {...field}
                  placeholder="Alergi Kacang"
                  className="bg-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="max-w-[950px] flex flex-col gap-1">
        <FormField
          control={form.control}
          name="q1"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel className="lg:text-lg leading-6 tracking-wide">
                Apakah Anda memerlukan bantuan atau akomodasi berkebutuhan
                khusus untuk berpartisipasi penuh dalam acara tersebut? Jika ya,
                beri tahu kami apa yang Anda butuhkan?
                <span className="text-[#FDB10E]"> (Opsional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-ted-black bg-opacity-[0.15] border-ted-white"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="max-w-[950px] flex flex-col gap-1">
        <FormField
          control={form.control}
          name="q2"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel className="lg:text-lg leading-6 tracking-wide text-ted-white">
                TEDxITB adalah platform dimana semua individu dapat berbagi ide
                dan berdinamika bersama, kami mengundang Anda untuk berbagi
                wawasan dan pengalaman Anda, terlepas dari latar belakang atau
                disiplin ilmunya. Ceritakan lebih banyak tentang diri Anda
                kepada kami!
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-ted-black bg-opacity-[0.15] border-ted-white"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.q2?.message}</FormMessage>
            </FormItem>
          )}
        />
      </div>

      <div className="max-w-[950px] flex flex-col gap-4">
        <Label
          className="lg:text-lg leading-6 tracking-wide text-ted-white"
          htmlFor="profile"
        >
          Gambar kamu! Ekspresikan diri Anda dengan bebas dalam pakaian kasual
          bisnis
        </Label>
        <FileUpload id="profile" />
      </div>

      <Button className="self-start" type="button" onClick={() => nextPage()}>
        Next Page
      </Button>
    </>
  );
}

function SecondPage({
  form,
  setPage,
}: {
  form: UseFormReturn<FormValues>;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  function prevPage() {
    setPage((page) => page - 1);
  }

  function nextPage() {
    const {
      name,
      email,
      phone,
      age,
      address,
      job,
      instance,
      faculty,
      social,
      allergy,
      q1,
      q2,
      profile,
      q5,
      q6,
      ...secondPageData
    } = form.getValues();

    const errorFields = form.formState.errors;
    const errorFieldsKeys = Object.keys(errorFields) as (keyof FormValues)[];

    if (form.formState.isValid) {
      setPage((page) => page + 1);
    } else if (errorFieldsKeys.length > 0) {
      const firstError = errorFieldsKeys[0];
      form.setFocus(firstError);
    } else {
      const firstEmpty = Object.entries(secondPageData).find(
        ([_, value]) => value === ""
      )?.[0] as keyof FormValues;

      form.setFocus(firstEmpty);
    }
  }

  return (
    <>
      <div className="max-w-[950px] flex flex-col gap-1">
        <FormField
          control={form.control}
          name="q3"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel className="lg:text-lg leading-6 tracking-wide text-ted-white">
                Apa yang membuat Anda tertarik dengan TEDxITB, dan mengapa Anda
                ingin menghadiri acara TEDxITB?
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-ted-black bg-opacity-[0.15] border-ted-white"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.q3?.message}</FormMessage>
            </FormItem>
          )}
        />
      </div>

      <div className="max-w-[950px] flex flex-col gap-1">
        <FormField
          control={form.control}
          name="q4"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel className="lg:text-lg leading-6 tracking-wide text-ted-white">
                Apa yang ingin Anda peroleh dan pelajari dari acara ini?
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-ted-black bg-opacity-[0.15] border-ted-white"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.q4?.message}</FormMessage>
            </FormItem>
          )}
        />
      </div>

      <div className="max-w-[950px] flex flex-col gap-4">
        <FormField
          control={form.control}
          name="scale"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4 grow">
              <FormLabel
                className="lg:text-lg leading-6 tracking-wide"
                htmlFor="scale"
              >
                Pada skala 1-5, seberapa partisipatif Anda dalam dialog mengenai
                topik terkait inovasi, teknologi, atau isu sosial?
              </FormLabel>
              <FormControl>
                <Slider
                  id="scale"
                  defaultValue={[2]}
                  min={0}
                  max={4}
                  step={1}
                  onValueChange={(vals) => field.onChange(vals[0] + 1)}
                />
              </FormControl>
              <div className="flex justify-between">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span className="text-ted-white" key={i}>
                    {i + 1}
                  </span>
                ))}
              </div>
            </FormItem>
          )}
        />
      </div>

      <div className="max-w-[950px] flex flex-col gap-1">
        <FormField
          control={form.control}
          name="q5"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel className="lg:text-lg leading-6 tracking-wide">
                Apakah Anda terlibat dalam komunitas atau kegiatan serupa yang
                sejalan dengan tema TEDxITB? Tolong beritahu kami lebih banyak
                tentang hal itu!
                <span className="text-[#FDB10E]"> (Opsional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-ted-black bg-opacity-[0.15] border-ted-white"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="max-w-[950px] flex flex-col gap-1">
        <FormField
          control={form.control}
          name="q6"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel className="lg:text-lg leading-6 tracking-wide">
                Bagikan ide atau konsep, jika ada, yang Anda yakini berpotensi
                memberikan dampak positif bagi masyarakat.
                <span className="text-[#FDB10E]"> (Opsional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-ted-black bg-opacity-[0.15] border-ted-white"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="sm:self-start grid grid-cols-2 gap-4 sm:gap-8">
        <Button type="button" onClick={() => prevPage()}>
          Previous Page
        </Button>
        <Button type="button" onClick={() => nextPage()}>
          Next Page
        </Button>
      </div>
    </>
  );
}

function ThirdPage() {
  return (
    <>
      <Button className="self-center lg:text-xl lg:px-16 lg:py-6">
        Kirim Formulir
      </Button>
    </>
  );
}
