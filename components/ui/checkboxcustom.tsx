"use client";

import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

interface checkboxProps {
  isDisabled: boolean;
  label: string;
}

export function CheckboxWithText(props: checkboxProps) {
  const [isChecked, setIsChecked] = React.useState(false);
  const isDisabled = props.isDisabled;

  return (
    <div
      onClick={() => {
        setIsChecked(!isChecked);
      }}
      className={`flex items-center space-x-2 ${
        isDisabled
          ? "text-[#A5A1A1] hover:cursor-not-allowed"
          : "text-ted-black hover:cursor-pointer"
      }`}
    >
      <Checkbox
        id="terms1"
        disabled={isDisabled}
        checked={isDisabled ? false : isChecked}
      />
      <label className={`font-montserrat text-sm leading-none ${isDisabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer"}`}>
        {props.label}
      </label>
    </div>
  );
}
