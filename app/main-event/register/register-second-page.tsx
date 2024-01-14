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
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const { update } = useSession();

  function prevPage() {
    setPage((page) => page - 1);
  }

  async function submitHandler(data: FormValues) {
    const idToastLoading = toast.loading("Submitting...", {
      description: "Please wait while we submit your form",
      duration: Infinity,
    });

    const {
      name,
      phone,
      age,
      address,
      job,
      instance,
      faculty,
      linkedin,
      instagram,
      allergy,
      q1,
      q2,
      profile,
      q3,
      q4,
      scale,
      q5,
      q6,
    } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("age", String(age));
    formData.append("address", address);
    formData.append("job", job);
    formData.append("instance", instance);
    faculty && formData.append("faculty", faculty);
    linkedin && formData.append("linkedin", linkedin);
    instagram && formData.append("instagram", instagram);
    allergy && formData.append("allergy", allergy);
    q1 && formData.append("q1", q1);
    formData.append("q2", q2);
    formData.append("profile", profile);
    formData.append("q3", q3);
    formData.append("q4", q4);
    formData.append("scale", String(scale));
    q5 && formData.append("q5", q5);
    q6 && formData.append("q6", q6);

    const res = await fetch("/api/registration", {
      method: "POST",
      body: formData,
    });

    toast.dismiss(idToastLoading);

    if (res.ok) {
      toast.success("Success!", {
        description: "Your form has been submitted",
      });
      update();
      router.refresh();
    } else {
      toast.error("Error!", {
        description: "An error occured while submitting your form",
      });
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
                Apa yang Anda ingin dapatkan dan pelajari dari acara ini?
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
          variant={"secondary"}
          size={"lg"}
          className="px-10"
          type="button"
          onClick={prevPage}
        >
          Back
        </Button>
        <Button
          type="submit"
          size={"lg"}
          className="px-10"
          onClick={form.handleSubmit(submitHandler)}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default SecondPage;
