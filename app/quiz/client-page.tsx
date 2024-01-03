"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import ResultBlock from "@/app/quiz/result-block";
import QuestionBlock from "@/app/quiz/question-block";

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
  const { toast } = useToast();

  const handleStartQuiz = () => {
    if (name) {
      setStart(true);
    } else {
      toast({
        variant: "error",
        icon: true,
        title: "Error",
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
      toast({
        variant: "error",
        icon: true,
        title: "Error",
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
        <div className="relative flex h-full min-h-[calc(100vh-6rem)] w-full items-center justify-center bg-[url('/ted-quiz-bg.jpeg')] bg-cover bg-left bg-no-repeat sm:bg-center">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[30] bg-black/50 backdrop-blur-sm" />
          <div className="z-[40] flex h-full w-full flex-col items-center justify-center gap-[40px] px-5 text-center sm:w-fit">
            <h2 className="text-center font-garamond text-[32px] italic text-white lg:text-[50px]">
              <span className="font-graziela text-[50px] font-[550] lg:text-[70px]">
                W
              </span>
              hich{" "}
              <span className="font-graziela text-[50px] font-[550] lg:text-[70px]">
                T
              </span>
              EDxITB{" "}
              <span className="font-graziela text-[50px] font-[550] lg:text-[70px]">
                T
              </span>
              alks{" "}
              <span className="font-graziela text-[50px] font-[550] lg:text-[70px]">
                A
              </span>
              re{" "}
              <span className="font-graziela text-[50px] font-[550] lg:text-[70px]">
                Y
              </span>
              ou?
            </h2>
            <Input
              className="w-[80%] border-2 border-white bg-transparent px-2 pb-2 pt-3 font-anderson text-base text-white ring-offset-ted-black md:px-4 md:pb-5 md:pt-6 md:text-xl md:leading-none"
              placeholder="Enter your name here"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Button
              className="px-8 py-3 text-base md:px-11 md:py-6 md:text-xl"
              onClick={handleStartQuiz}
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
