"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface radioProps {
  color: "default" | "black" | "yellow" | "green";
  label: string;
  isDisabled: boolean;
}

export function RadioGroupDemo(props: radioProps) {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <RadioGroup onClick={() => setIsChecked(true)} disabled={props.isDisabled}>
      <div
        className={`flex cursor-not-allowed items-center space-x-2 ${
          props.isDisabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
        }`}
      >
        <RadioGroupItem
          color={props.color}
          checked={props.isDisabled ? false : isChecked}
          value="default"
          id="r1"
        />
        <Label
          className={`font-montserrat text-ted-black ${
            props.isDisabled
              ? "hover:cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
        >
          {props.label}
        </Label>
      </div>
    </RadioGroup>
  );
}
