import Modals from "@/components/ui/modals";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-ted-white">
      {/* <Modals variant="type-1" modalTitle="Modal Title" modalDescription="Lorem ipsum dolot sit amet" modalSubDescription="Dummy sub description"></Modals> */}
      <Modals
        variant="type-2"
        modalTitle="Modal Title"
        modalDescription="Lorem ipsum dolot sit amet"
        modalSubDescription="Dummy sub description"
      ></Modals>
      {/* <Modals variant="type-3" modalTitle="Modal Title" modalDescription="Lorem ipsum dolot sit amet" modalSubDescription="Dummy sub description"></Modals> */}
      {/* <Modals variant="type-4" modalTitle="Modal Title" modalDescription="Lorem ipsum dolot sit amet" modalSubDescription="Dummy sub description"></Modals> */}
    </div>
  );
};

export default page;
