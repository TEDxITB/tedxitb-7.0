import Modals from "@/components/ui/modals";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center bg-ted-white min-h-screen w-full">
        {/* <Modals variant="type-1" modalTitle="Modal Title" modalDescription="Lorem ipsum dolot sit amet" modalSubDescription="Dummy sub description"></Modals> */}
        <Modals variant="type-2" modalTitle="Modal Title" modalDescription="Lorem ipsum dolot sit amet" modalSubDescription="Dummy sub description"></Modals>
        {/* <Modals variant="type-3" modalTitle="Modal Title" modalDescription="Lorem ipsum dolot sit amet" modalSubDescription="Dummy sub description"></Modals> */}
        {/* <Modals variant="type-4" modalTitle="Modal Title" modalDescription="Lorem ipsum dolot sit amet" modalSubDescription="Dummy sub description"></Modals> */}
    </div>
  );
};

export default page;
