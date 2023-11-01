import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
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
      <Textarea
        className="h-[200px] w-[550px]"
        placeholder="lorem ipsum aiuwgef luigf"
        disabled
      ></Textarea>
      <Input placeholder="hello world!" disabled></Input>
      <Input placeholder="hello world!"></Input>
      <Input placeholder="hello world!" error></Input>
    </div>
  );
};

export default page;
