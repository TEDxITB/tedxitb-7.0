import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-row gap-8">
      <Input placeholder="hello world!" disabled></Input>
      <Input placeholder="hello world!"></Input>
      <Input placeholder="hello world!" error></Input>
    </div>
  );
};

export default page;
