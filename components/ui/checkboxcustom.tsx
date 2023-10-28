"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface checkboxProps {
  isDisabled: boolean;
  label: string;
}

export function CheckboxWithText(props: checkboxProps) {
  const isDisabled = props.isDisabled;

  return (
    <div
      className={`flex items-center space-x-2 ${
        isDisabled
          ? "text-[#A5A1A1] hover:cursor-not-allowed"
          : "text-ted-black"
      }`}
    >
      <Checkbox id="terms1" disabled={isDisabled} />
      <div className="grid gap-1.5 leading-none">
        <p className="font-montserrat text-sm leading-none">{props.label}</p>
      </div>
    </div>
  );
}
