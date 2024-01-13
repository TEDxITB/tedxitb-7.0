import { formSchema } from "@/app/quiz/client-page";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

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
        label: "I enjoy creative hobbies and imagination",
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
    <div className="relative flex h-full min-h-[calc(100vh-6rem)] w-full items-center justify-center">
      <Image
        src="/ted-quiz-bg-2.png"
        alt="bg-2"
        fill
        className="absolute object-cover object-center z-[-10]"
      />
      <div className="flex h-fit w-full flex-col items-center justify-center gap-7 rounded-sm p-5 text-white sm:w-[65%] sm:gap-4 sm:bg-black/70 sm:p-7">
        <h3 className="font-anderson text-[17px] md:text-[24px]">
          Question {question.number} of 5
        </h3>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-4">
          <div className="flex w-full flex-col items-center justify-center text-center">
            <h2 className="font-anderson text-[20px] font-black md:text-[35px]">
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
                        <FormItem
                          key={`${c.id}-${c.label}`}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem
                              color="white"
                              value={c.id.toString()}
                            />
                          </FormControl>
                          <FormLabel className="font-anderson text-[17px] md:text-[24px]">
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

export default QuestionBlock;
