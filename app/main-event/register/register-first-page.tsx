import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/file-upload";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { regisSchema } from "@/lib/zod";
import _ from "lodash";
import { Session } from "next-auth";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type FormValues = z.infer<typeof regisSchema>;

function FirstPage({
  form,
  setPage,
  session,
}: {
  form: UseFormReturn<FormValues>;
  setPage: Dispatch<SetStateAction<number>>;
  session: Session | null;
}) {
  async function nextPage() {
    const fieldPage1 = [
      "name",
      "phone",
      "age",
      "address",
      "job",
      "instance",
      "faculty",
      "allergy",
      "q1",
      "q2",
      "profile",
    ] as const;

    await form.trigger(fieldPage1);

    if (form.formState.errors) {
      const errorFieldsKeys = Object.keys(
        form.formState.errors
      ) as (keyof FormValues)[];

      const intersection = _.intersection(errorFieldsKeys, fieldPage1);

      if (intersection.length > 0) {
        const firstError = intersection[0];
        form.setFocus(firstError);
      } else {
        setPage((page) => page + 1);
      }
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />

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
              disabled
              value={session?.email}
              className="disabled:bg-ted-black disabled:bg-opacity-[0.15] border-ted-white"
            />
          </FormControl>
        </FormItem>

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
                    className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
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
                    className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
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
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel
                htmlFor="faculty"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                Jurusan/Tahun <span className="text-[#FDB10E]">(Opsional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  id="faculty"
                  {...field}
                  placeholder="Teknik Sipil/22"
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
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
          name="linkedin"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel
                htmlFor="linkedin"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                LinkedIn <span className="text-[#FDB10E]">(Opsional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  id="linkedin"
                  {...field}
                  placeholder="Nama lengkap"
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.linkedin?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="instagram"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 grow">
              <FormLabel
                htmlFor="instagram"
                className="lg:text-lg leading-6 tracking-wide text-ted-white"
              >
                Instagram <span className="text-[#FDB10E]">(Opsional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  id="instagram"
                  {...field}
                  placeholder="@username"
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.instagram?.message}
              </FormMessage>
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] placeholder-ted-white placeholder-opacity-25 border-ted-white"
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] border-ted-white"
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] border-ted-white"
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
          bisnis (Ukuran 3x4, warna latar bebas, pose bebas)
        </Label>
        <div className="flex flex-col gap-2">
          <p>Contoh</p>
          <div className="flex gap-8 overflow-x-scroll pb-4">
            <Image
              src="/example-1.jpg"
              alt="Example"
              width={100}
              height={100}
            />
            <Image
              src="/example-2.jpg"
              alt="Example"
              width={100}
              height={100}
            />
            <Image
              src="/example-3.jpg"
              alt="Example"
              width={100}
              height={100}
            />
            <Image
              src="/example-4.jpg"
              alt="Example"
              width={100}
              height={100}
            />
          </div>
        </div>
        <FileUpload setValue={form.setValue} id="profile" />
      </div>

      <Button
        className="self-start px-12"
        size={"lg"}
        type="button"
        onClick={() => nextPage()}
      >
        Next
      </Button>
    </>
  );
}

export default FirstPage;
