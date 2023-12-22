"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import * as z from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  question1: z.string().min(1),
  question2: z.string().min(1),
  question3: z.string().min(1),
  question4: z.string().min(1),
  question5: z.string().min(1),
});

const results = {
  creative: {
    title: "The Creative",
    desc: "The Creative personality type is likely characterized by a strong inclination towards imagination, originality, and artistic expression. Creatives often enjoy exploring new ideas, thinking outside the box, and engaging in various forms of artistic and creative endeavors.",
    bg: "/ted-quiz-creative.png",
    video: "https://www.youtube.com/embed/D2FSRiJdqho?si=efxBbiAl_tlqOr4b",
  },
  social: {
    title: "The Social",
    desc: "The Social personality type may be associated with individuals who are sociable, outgoing, and enjoy social interactions. They might be skilled at building and maintaining relationships, and they may thrive in group settings and social activities.",
    bg: "/ted-quiz-social.png",
    video: "https://www.youtube.com/embed/Kr7lP1z8UCw?si=bUpbBsaO_V2CW4Ec",
  },
  scientist: {
    title: "The Scientist",
    desc: "The Scientist personality type could be described as analytical, logical, and detail-oriented. People with this personality might have a strong interest in understanding and explaining the world through systematic observation and analysis.",
    bg: "/ted-quiz-scientist.png",
    video: "https://www.youtube.com/embed/i-UAhK-vfQw?si=I8mbu68wzILel-Yi",
  },
  director: {
    title: "The Director",
    desc: "This personality type might be characterized as someone who is assertive, goal-oriented, and takes charge in various situations. Directors are often seen as leaders and decision-makers, and they tend to be driven and focused on achieving their objectives.",
    bg: "/ted-quiz-director.png",
    video: "https://www.youtube.com/embed/2YM7rc29uW8?si=Xc9FFngg0vuAmFMI",
  },
};

const questions = [
  {
    id: "question1",
    number: 1,
    question: "You've got a problem to solve. What's your go-to move?",
    choice: [
      {
        id: 1,
        label: "I take charge and make quick decisions",
      },
      {
        id: 2,
        label: "I brainstorm creative solutions",
      },
      {
        id: 3,
        label: "I chat with friends for input",
      },
      {
        id: 4,
        label: "I dive deep and think outside the box",
      },
    ],
  },
  {
    id: "question2",
    number: 2,
    question: "How do you usually spend your free time?",
    choice: [
      {
        id: 1,
        label: "I like planning and organizing stuff",
      },
      {
        id: 2,
        label: "I brainstorm creative solutions",
      },
      {
        id: 3,
        label: "I'm all about socializing and hanging with friends",
      },
      {
        id: 4,
        label: "I love learning and exploring new ideas",
      },
    ],
  },
  {
    id: "question3",
    number: 3,
    question:
      "You're working on a group project. What role do you naturally slide into?",
    choice: [
      {
        id: 1,
        label: "I end up being the leader or delegator",
      },
      {
        id: 2,
        label: "I'm the one with quirky and fresh ideas",
      },
      {
        id: 3,
        label: "I'm the peacemaker and team cheerleader",
      },
      {
        id: 4,
        label: "I tackle complex problems and research",
      },
    ],
  },
  {
    id: "question4",
    number: 4,
    question: "When you face a challenge, how do you approach it?",
    choice: [
      {
        id: 1,
        label: "I go at it head-on with determination",
      },
      {
        id: 2,
        label: "I get creative and think outside the box",
      },
      {
        id: 3,
        label: "I talk to friends and seek advice",
      },
      {
        id: 4,
        label: "I analyze it deeply and strategize",
      },
    ],
  },
  {
    id: "question5",
    number: 5,
    question: "You're making a big decision. What's top of mind?",
    choice: [
      {
        id: 1,
        label: "I want it to be practical and efficient",
      },
      {
        id: 2,
        label: "I want it to express my unique style",
      },
      {
        id: 3,
        label: "I think about how it'll affect my relationships",
      },
      {
        id: 4,
        label: "I focus on intellectual depth and innovation",
      },
    ],
  },
];

const TedQuizPage = () => {
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
      {
        label: "director",
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
    <div className="flex h-fit w-fit items-center justify-center">
      {!start ? (
        <div className="relative flex h-screen w-screen items-center justify-center bg-[url('/background1.png')] bg-cover bg-center bg-no-repeat sm:bg-[url('/ted-quiz-bg.jpeg')]">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[50] bg-black/50 backdrop-blur-sm" />
          <div className="z-[100] flex h-full w-full flex-col items-center justify-center gap-[40px] px-5 text-center sm:w-fit">
            <h2 className="text-center font-garamond text-[32px] italic text-white lg:text-[50px]">
              <span className="font-graziela text-[50px] font-[550] lg:text-[70px]">
                W
              </span>
              hich{" "}
              <span className="font-graziela text-[50px] font-[550] lg:text-[70px]">
                P
              </span>
              ersonality{" "}
              <span className="font-graziela text-[50px] font-[550] lg:text-[70px]">
                T
              </span>
              ype{" "}
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
              className="w-[80%] border-[2px] border-white bg-transparent px-2 py-3 text-[17px] text-white md:px-4 md:py-6 md:text-[24px]"
              placeholder="Enter your name here"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Button
              className="px-8 py-3 text-[17px] md:px-11 md:py-6 md:text-[24px]"
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
    </div>
  );
};

const ResultBlock = ({
  resType,
}: {
  resType: "creative" | "scientist" | "director" | "social";
}) => {
  const res = results[resType];

  const Title = () => {
    if (resType === "creative") {
      return (
        <h2 className="font-garamond text-[30px] italic md:text-[41px]">
          <label className="font-graziela text-[48px] not-italic md:text-[75px]">
            T
          </label>
          he{" "}
          <label className="font-graziela text-[48px] not-italic md:text-[75px]">
            C
          </label>
          reative
        </h2>
      );
    } else if (resType === "scientist") {
      return (
        <h2 className="font-garamond text-[41px] italic">
          <label className="font-graziela text-[48px] not-italic md:text-[75px]">
            T
          </label>
          he{" "}
          <label className="font-graziela text-[48px] not-italic md:text-[75px]">
            S
          </label>
          cientist
        </h2>
      );
    } else if (resType === "director") {
      return (
        <h2 className="font-garamond text-[41px] italic">
          <label className="font-graziela text-[48px] not-italic md:text-[75px]">
            T
          </label>
          he{" "}
          <label className="font-graziela text-[48px] not-italic md:text-[75px]">
            D
          </label>
          irector
        </h2>
      );
    } else if (resType === "social") {
      return (
        <h2 className="font-garamond text-[41px] italic">
          <label className="font-graziela text-[48px] not-italic md:text-[75px]">
            T
          </label>
          he{" "}
          <label className="font-graziela text-[48px] not-italic md:text-[75px]">
            S
          </label>
          ocial
        </h2>
      );
    }
  };
  return (
    <div
      className="relative flex h-fit w-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-20 pt-36"
      style={{
        backgroundImage: `url(${res.bg})`,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[10] bg-[url('/ted-quiz-bg-2.png')] bg-cover bg-center bg-no-repeat md:hidden" />
      <div className="z-[20] flex h-fit w-full flex-col items-center justify-center gap-3 rounded-sm bg-none p-7 text-white md:w-[65%] md:bg-black/70">
        <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
          <p className="font-anderson text-[12px] md:text-[22px]">
            your result:{" "}
          </p>
          <Title />
          <p className="font-anderson text-[12px] md:text-[16px]">{res.desc}</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-3 text-center">
          <div className="relative h-0 w-full pb-[56.25%] lg:h-[315px] lg:w-[560px] lg:pb-0">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={res.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            ></iframe>
          </div>
          <p className="font-anderson text-[10px] md:text-[16px]">
            Find out more by watching this video!
          </p>
        </div>
      </div>
    </div>
  );
};

const QuestionBlock = ({
  form,
  number,
  handleBack,
  handleNextQuestion,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>, any, undefined>;
  number: number;
  handleBack: () => void;
  handleNextQuestion: () => void;
}) => {
  const question = questions[number - 1];

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url('/ted-quiz-bg-2.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-7 rounded-sm p-5 text-white sm:w-[65%] sm:gap-4 sm:bg-black/70 sm:p-7">
        <h3 className="font-inter text-[17px] md:text-[24px]">
          Question {question.number} of 5
        </h3>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
          <div className="flex w-full flex-col items-center justify-center text-center">
            <h2 className="font-anderson text-[20px] md:text-[35px]">
              {question.question}
            </h2>
            <p className="font-anderson text-[14px] md:text-[16px]">
              Answer, please choose 1
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-center">
            <FormField
              control={form.control}
              name={question.id as any}
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {question.choice.map((c) => (
                        <FormItem key={`${c.id}-${c.label}`} className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              color="white"
                              value={c.id.toString()}
                            />
                          </FormControl>
                          <FormLabel className="font-inter text-[17px] md:text-[24px]">
                            {c.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex w-[80%] flex-row items-center justify-between gap-3 sm:w-full sm:justify-end">
          <Button
            className="flex items-center justify-between gap-2 border-white px-8 sm:px-4"
            variant="outline"
            onClick={handleBack}
            type="button"
          >
            <ChevronLeft className="hidden h-4 w-4 sm:flex" />
            Back
          </Button>
          {number !== 5 ? (
            <>
              <Button
                className="hidden items-center justify-between gap-2 sm:flex"
                onClick={handleNextQuestion}
                type="button"
              >
                Next Question
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                className="flex items-center justify-between gap-2 px-8 sm:hidden"
                onClick={handleNextQuestion}
                type="button"
              >
                Next
              </Button>
            </>
          ) : (
            <Button
              className="flex items-center justify-between gap-2 px-8 sm:px-4"
              type="submit"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TedQuizPage;
