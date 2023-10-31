import { Textarea } from "@/components/ui/textarea";
import { Input } from "postcss";
import React from "react";

const page = () => {
  return (
    <div className="flex h-[100dvh] w-full flex-row gap-8 bg-white">
      <Textarea
        className="h-[200px] w-[550px]"
        placeholder="Lorem Ipsum Something"
      ></Textarea>
      <Textarea
        className="h-[200px] w-[550px]"
        error
        placeholder="lorem ipsum aiuwgef luigf"
      ></Textarea>
    </div>
  );
};

export default page;
