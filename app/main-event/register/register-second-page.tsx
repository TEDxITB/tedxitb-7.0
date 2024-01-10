import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { regisSchema } from "@/lib/zod";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type FormValues = z.infer<typeof regisSchema>;

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

  async function submitHandler() {
    await form.trigger(["q3", "q4", "scale", "q5", "q6"]);

    if (form.formState.errors) {
      const errorFieldsKeys = Object.keys(
        form.formState.errors
      ) as (keyof FormValues)[];
      if (errorFieldsKeys.length > 0) {
        const firstError = errorFieldsKeys[0];
        form.setFocus(firstError);
      }
    }

    if (form.formState.isValid) {
      form.handleSubmit(async (data) => {
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
        toast("Submitting...", {
          description: "Please wait while we submit your form",
        });
        await sleep(3000);
        toast("Success!", {
          description: "Your form has been submitted",
        });
        console.log(data);
      })();
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] border-ted-white"
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] border-ted-white"
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
                  className="bg-ted-black ring-offset-ted-black bg-opacity-[0.15] border-ted-white"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="sm:self-start grid grid-cols-2 gap-4 sm:gap-8">
        <Button
          variant={"outline"}
          size={"lg"}
          className="text-ted-red px-10"
          type="button"
          onClick={() => prevPage()}
        >
          Back
        </Button>
        <Button
          type="button"
          size={"lg"}
          className="px-10"
          onClick={() => submitHandler()}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default SecondPage;
