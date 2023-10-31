"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/dropdown";

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
      <Select>
        <SelectTrigger className="w-[300px]" label="Label">
          <SelectValue placeholder="Select Option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Option</SelectItem>
          <SelectItem value="dark">Option</SelectItem>
          <SelectItem value="system">Option</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
