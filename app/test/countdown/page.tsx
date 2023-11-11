import React from "react";
import Countdown from "@/components/ui/countdown";

const page = () => {
  return (
    <div className="flex justify-center bg-ted-white">
      <Countdown date={new Date("December 31, 2023 11:59:59")} />
    </div>
  );
};

export default page;
