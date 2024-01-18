"use client";

import QuestionBlock from "@/app/quiz/question-block";
import ResultBlock from "@/app/quiz/result-block";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export const formSchema = z.object({
  question1: z.string().min(1),
  question2: z.string().min(1),
  question3: z.string().min(1),
  question4: z.string().min(1),
  question5: z.string().min(1),
});

const ClientPageTedQuiz = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
    },
  });
  const [name, setName] = useState<string>("");
  const [start, setStart] = useState<boolean>(false);
  const [showRes, setShowRes] = useState<boolean>(false);
  const [number, setNumber] = useState<number>(1);
  const [resType, setResType] = useState<
    "creative" | "scientist" | "director" | "social"
  >("creative");

  const handleStartQuiz = () => {
    if (name) {
      setStart(true);
    } else {
      toast.error("Error", {
        description: "Input your name first",
      });
    }
  };

  const handleNextQuestion = () => {
    if (number < 5) {
      setNumber((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (number > 1) {
      setNumber((prev) => prev - 1);
    } else if (number === 1) {
      setNumber(1);
      setStart(false);
      form.reset();
    }
  };

  const handleSubmit2 = async (e: any) => {
    e.preventDefault();
    const dirtyFields = form.formState.dirtyFields;
    if (
      dirtyFields.question1 &&
      dirtyFields.question2 &&
      dirtyFields.question3 &&
      dirtyFields.question4 &&
      dirtyFields.question5
    ) {
      await form.handleSubmit(handleSubmit)(e);
    } else {
      toast.error("Error", {
        description: "Please answer all question before submitting",
      });
    }
  };
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    const datas = [
      data.question1,
      data.question2,
      data.question3,
      data.question4,
      data.question5,
    ];

    let counts = [
      {
        label: "director",
        count: 0,
      },
      {
        label: "creative",
        count: 0,
      },
      {
        label: "social",
        count: 0,
      },
      {
        label: "scientist",
        count: 0,
      },
    ];

    datas.forEach((d) => {
      const index = Number.parseInt(d) - 1;
      counts[index] = {
        label: counts[index].label,
        count: counts[index].count + 1,
      };
    });

    const result = counts.sort((a, b) => b.count - a.count);
    // console.log(result)
    setResType(result[0].label as any);
    setShowRes(true);
  };
  return (
    <>
      {!start ? (
        <div className="relative flex h-full min-h-[calc(100vh-6rem)] w-full items-center justify-center">
          <Image
            src="/quiz/bg1.jpg"
            alt="Background Image"
            fill
            sizes="100vw"
            className="absolute inset-0 z-0 object-cover object-center opacity-70"
            priority
          />
          <div className="z-[40] flex h-full w-full flex-col items-center justify-center gap-[40px] px-5 text-center sm:w-fit">
            <h1
              data-aos="zoom-in-up"
              className="text-center font-garamond text-4xl font-medium tracking-wider text-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
            >
              <span className="mr-2 font-graziela text-6xl lg:text-8xl">W</span>
              <span>HICH </span>
              <span>TEDxITB </span>
              <span className="mr-2 font-graziela text-6xl lg:text-8xl">T</span>
              <span>ALKS </span>
              <span>ARE </span>
              <span className="mr-2 font-graziela text-6xl lg:text-8xl">Y</span>
              <span>OU?</span>
            </h1>

            <Input
              data-aos="zoom-in-up"
              data-aos-delay="150"
              className="w-[80%] border-2 border-white bg-transparent font-anderson text-base leading-none text-white ring-offset-ted-black md:py-6 md:text-xl md:leading-none"
              placeholder="Enter your name here"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Button
              data-aos="zoom-in-up"
              data-aos-delay="250"
              className="px-8 py-3 text-base md:px-11 md:py-6 md:text-xl"
              onClick={handleStartQuiz}
              aria-label="Click to start-quiz"
            >
              Start Quiz
            </Button>
          </div>
        </div>
      ) : !showRes ? (
        <Form {...form}>
          <form
            className="flex h-full w-full items-center justify-center"
            onSubmit={handleSubmit2}
          >
            <QuestionBlock
              key={number}
              form={form}
              number={number}
              handleBack={handleBack}
              handleNextQuestion={handleNextQuestion}
            />
          </form>
        </Form>
      ) : (
        <ResultBlock resType={resType} />
      )}
    </>
  );
};

export default ClientPageTedQuiz;
