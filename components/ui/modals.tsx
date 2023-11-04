import React from "react";
import Image from "next/image";

interface ModalsProps {
    variant: 'type-1' | 'type-2' | 'type-3' | 'type-4';
    modalTitle : string;
    modalDescription : string;
    modalSubDescription : string;
}

const backgroundImages = {
  "type-1": "/modalBackgroundType1.png",
  "type-2": "/modalBackgroundType2.png",
  "type-3": "/modalBackgroundType3.png",
  "type-4": "/modalBackgroundType4.png",
};

const titleColorType = {
    'type-1': 'ted-red',
    'type-2': 'ted-white',
    'type-3': 'ted-white',
    'type-4': 'ted-white',
};

const descriptionColorType = {
    'type-1': 'ted-black',
    'type-2': 'ted-white',
    'type-3': 'ted-white',
    'type-4': 'ted-white',
};

const Modals: React.FC<ModalsProps> = ({ variant, modalTitle, modalDescription, modalSubDescription }) => {
    const titleColor = titleColorType[variant];
    const descriptionColor = descriptionColorType[variant];

    return (
      <div
        className={`h-[375px] w-[600px] border border-ted-black border-opacity-25 rounded-[15px]`}
      >
        <Image
          src={`${backgroundImages[variant]}`}
          alt={"backgroundImage"}
          className={`min-w-full ${
            variant == "type-1" ? "rounded-t-[15px]" : "rounded-[15px]"
          }`}
          width={400}
          height={400}
        ></Image>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4">
          <h2
            className={`text-${titleColor} font-anderson text-[48px] font-[700] leading-[59px]`}
          >
            {modalTitle}
          </h2>
          <p
            className={`text-${descriptionColor} font-anderson text-[24px] font-[400] leading-[30px]`}
          >
            {modalDescription}
          </p>
          <p
            className={`font-anderson text-[16px] font-[400] leading-[20px] text-[#CACACA]`}
          >
            {modalSubDescription}
          </p>
        </div>
      </div>
    );
};


export default Modals;