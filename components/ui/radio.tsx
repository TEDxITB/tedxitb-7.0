"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface radioProps {
    color : string;
    label : string;
}

export function RadioGroupDemo(props : radioProps) {
  return (
    <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem color={props.color} value="default" id="r1" />
        <p className="font-montserrat text-ted-black">{props.label}</p>
      </div>
    </RadioGroup>
  );
}
