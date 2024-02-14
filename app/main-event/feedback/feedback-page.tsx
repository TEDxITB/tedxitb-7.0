"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { feedbackSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type FormValues = z.infer<typeof feedbackSchema>;

const options = [
  {
    id: "venue",
    label: "Venue",
  },
  {
    id: "talks",
    label: "Talks",
  },
  {
    id: "performance",
    label: "Performance",
  },
  {
    id: "originators lounge",
    label: "Originators Lounge",
  },
  {
    id: "date selection",
    label: "Date Selection",
  },
] as const;

function FeedbackPage() {
  const router = useRouter();
  const { update } = useSession();

  const form = useForm<FormValues>({
    defaultValues: {
      q1: 7,
      q7: [],
    },
    resolver: zodResolver(feedbackSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    const value = localStorage.getItem("formData");

    if (value) {
      const data = JSON.parse(value);
      form.reset(data);
    }
  }, [form]);

  async function submitHandler(data: FormValues) {
    const idToastLoading = toast.loading("Submitting...", {
      description: "Please wait while we submit your form",
      duration: Infinity,
    });

    const { q1, q2, q3, q4, q5, q6, q7 } = data;

    const formData = new FormData();
    formData.append("q1", q1.toString());
    formData.append("q2", q2);
    formData.append("q3", q3);
    formData.append("q4", q4);
    formData.append("q5", q5);
    formData.append("q6", q6);
    q7.forEach((value) => {
      formData.append("q7", value);
    });

    // To Do: Add the endpoint to submit the feedback
    const res = await fetch("/api/registration", {
      method: "POST",
      body: formData,
    });

    toast.dismiss(idToastLoading);

    if (res.ok) {
      toast.success("Success!", {
        description: "Your form has been submitted",
      });
      localStorage.removeItem("formData");
      update();
      router.refresh();
    } else {
      const data = await res.json();
      toast.error("Error!", {
        description:
          data?.message || "An error occured while submitting your form",
      });
    }
  }

  async function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    const name = e.target.name as keyof FormValues;

    await form.trigger(name);

    if (!form.formState.errors[name]) {
      localStorage.setItem("formData", JSON.stringify(form.getValues()));
    }
  }

  return (
    <main className="bg-[#1E1E1E] font-anderson text-ted-white">
      <Form {...form}>
        <form className="relative mx-auto flex max-w-5xl flex-col gap-12 overflow-hidden rounded-lg bg-[#1E1E1E] p-8 drop-shadow-[2px_4px_25px_rgba(75,75,75,0.5)] lg:my-16 lg:gap-16 lg:p-16">
          <div className="flex flex-col gap-4">
            <h2 className="w-fit bg-gradient-to-r from-[#FDB10E] via-transparent to-transparent text-2xl font-bold italic lg:text-5xl">
              FEEDBACK TEDXITB 7.0
            </h2>
            <p className="italic lg:text-3xl">
              Silakan isi formulir ini untuk memberikan feedback terhadap
              rangkaian kegiatan TEDxITB 7.0
            </p>
          </div>

          <div className="z-50 flex max-w-[950px] flex-col gap-4">
            <FormField
              control={form.control}
              name="q1"
              render={({ field }) => (
                <FormItem className="flex grow flex-col gap-4">
                  <FormLabel
                    className="leading-6 tracking-wide lg:text-lg"
                    htmlFor="q1"
                  >
                    What do you think of TEDxITB 7.0 Talks? (Rate 1-10)
                  </FormLabel>
                  <FormControl onBlur={handleFocus}>
                    <Slider
                      id="q1"
                      defaultValue={[form.getValues("q1") - 1 ?? 2]}
                      min={0}
                      max={9}
                      step={1}
                      onValueChange={(vals) => field.onChange(vals[0] + 1)}
                    />
                  </FormControl>
                  <div className="flex justify-between">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span className="text-ted-white" key={i}>
                        {i + 1}
                      </span>
                    ))}
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="flex max-w-[950px] flex-col gap-1">
            <FormField
              control={form.control}
              name="q2"
              render={({ field }) => (
                <FormItem className="flex grow flex-col gap-1">
                  <FormLabel className="leading-6 tracking-wide text-ted-white lg:text-lg">
                    Please explain your rate for TEDxITB 7.0 Talks, and give any
                    feedback if any!
                  </FormLabel>
                  <FormControl onBlur={handleFocus}>
                    <Textarea
                      {...field}
                      id="q2"
                      className="border-ted-white bg-ted-black bg-opacity-[0.15] ring-offset-ted-black"
                    />
                  </FormControl>
                  <FormMessage>{form.formState.errors.q2?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex max-w-[950px] flex-col gap-1">
            <FormField
              control={form.control}
              name="q3"
              render={({ field }) => (
                <FormItem className="flex grow flex-col gap-1">
                  <FormLabel className="leading-6 tracking-wide text-ted-white lg:text-lg">
                    Choose your favorite talks!
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={form.getValues("q3") as string}
                      onValueChange={(value: string) => {
                        field.onChange(value);
                        handleFocus({ target: { name: "q3" } } as any);
                      }}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="text-ted-white">
                          All new messages
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel className="text-ted-white">
                          Direct messages and mentions
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="text-ted-white">
                          Nothing
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage>{form.formState.errors.q3?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex max-w-[950px] flex-col gap-1">
            <FormField
              control={form.control}
              name="q4"
              render={({ field }) => (
                <FormItem className="flex grow flex-col gap-1">
                  <FormLabel className="leading-6 tracking-wide text-ted-white lg:text-lg">
                    What do you think of TEDxITB 7.0 Originators Lounge? (Rate
                    1-10)
                  </FormLabel>
                  <FormControl onBlur={handleFocus}>
                    <Textarea
                      {...field}
                      id="q4"
                      className="border-ted-white bg-ted-black bg-opacity-[0.15] ring-offset-ted-black"
                    />
                  </FormControl>
                  <FormMessage>{form.formState.errors.q4?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex max-w-[950px] flex-col gap-1">
            <FormField
              control={form.control}
              name="q5"
              render={({ field }) => (
                <FormItem className="flex grow flex-col gap-1">
                  <FormLabel className="leading-6 tracking-wide text-ted-white lg:text-lg">
                    Please explain your rate for TEDxITB 7.0 Originators Lounge,
                    and give any feedback if any!
                  </FormLabel>
                  <FormControl onBlur={handleFocus}>
                    <Textarea
                      {...field}
                      id="q5"
                      className="border-ted-white bg-ted-black bg-opacity-[0.15] ring-offset-ted-black"
                    />
                  </FormControl>
                  <FormMessage>{form.formState.errors.q5?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex max-w-[950px] flex-col gap-1">
            <FormField
              control={form.control}
              name="q6"
              render={({ field }) => (
                <FormItem className="flex grow flex-col gap-1">
                  <FormLabel className="leading-6 tracking-wide text-ted-white lg:text-lg">
                    What do you think of the overall TEDxITB 7.0 “The Impact
                    Originators Hub”?
                  </FormLabel>
                  <FormControl onBlur={handleFocus}>
                    <Textarea
                      {...field}
                      id="q6"
                      className="border-ted-white bg-ted-black bg-opacity-[0.15] ring-offset-ted-black"
                    />
                  </FormControl>
                  <FormMessage>{form.formState.errors.q6?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex max-w-[950px] flex-col gap-1">
            <FormField
              control={form.control}
              name="q7"
              render={() => (
                <FormItem className="flex grow flex-col gap-1">
                  <FormLabel className="leading-6 tracking-wide text-ted-white lg:text-lg">
                    What is/are your favorite aspects of TEDxITB 7.0?
                  </FormLabel>
                  {options.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name="q7"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={option.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="border-ted-red data-[state=checked]:bg-ted-red data-[state=checked]:text-ted-white"
                                checked={field.value?.includes(option.label)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    field.onChange([
                                      ...field.value,
                                      option.label,
                                    ]);
                                  } else {
                                    field.onChange(
                                      field.value?.filter(
                                        (value) => value !== option.label
                                      )
                                    );
                                  }
                                  localStorage.setItem(
                                    "formData",
                                    JSON.stringify(form.getValues())
                                  );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-ted-white">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage>{form.formState.errors.q7?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex max-w-[950px] flex-col gap-4">
            <Button
              className="self-start px-12"
              size={"lg"}
              type="submit"
              onClick={form.handleSubmit(submitHandler)}
              disabled={form.formState.isSubmitting}
            >
              Submit
            </Button>
          </div>

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

export default FeedbackPage;
