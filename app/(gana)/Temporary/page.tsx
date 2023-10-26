import { Input } from "@/components/ui/input";

import React from "react";

const Temp = () => {
  return (
    <div className="flex flex-col gap-8">
      <Input
        label="Label"
        required
        helpermessage="Helper Message"
        successmessage="Success Message"
        errormessage="Error Message"
        placeholder="Placeholder"
      />
      <Input
        label="Label"
        required
        helpermessage="Helper Message"
        successmessage="Success Message"
        errormessage="Error Message"
        placeholder="Placeholder"
        disabled
      />
    </div>
  );
};

export default Temp;
