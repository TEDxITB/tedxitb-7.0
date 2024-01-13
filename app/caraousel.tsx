"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const variants = {
  enter: ({ direction }: { direction: number }) => {
    return { scale: 0.5, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({
    position,
    direction,
  }: {
    position: () => "center" | "left" | "right";
    direction: number;
  }) => {
    return {
      scale: position() === "center" ? 1 : 0.85,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }: { direction: number }) => {
    return { scale: 0.5, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

const variants2 = {
  enter: ({ direction }: { direction: number }) => {
    return { scale: 0.5, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({
    position,
    direction,
  }: {
    position: () => "center" | "left" | "right";
    direction: number;
  }) => {
    return {
      scale: position() === "center" ? 1 : 0.85,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: position() === "center" ? 1 : 0,
    };
  },
  exit: ({ direction }: { direction: number }) => {
    return { scale: 0.5, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({
  position,
  direction,
}: {
  position: () => "center" | "left" | "right";
  direction: number;
}) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}

const items = [
  {
    id: 0,
    image: "/caraousel1.png",
    title: "TED Title",
    desc: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: 1,
    image: "/caraousel2.png",
    title: "TED Title2",
    desc: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: 2,
    image: "/caraousel2.png",
    title: "TED Title3",
    desc: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: 3,
    image: "/caraousel2.png",
    title: "TED Title4",
    desc: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];

const Carousel = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = (newDirection: number) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden gap-[30px] md:gap-[40px] lg:gap-[50px]">
      <div className="w-full flex justify-center items-center">
        <h1 className="w-full text-center font-anderson text-white text-[32px] md:text-[40px] font-bold">
          Previous TEDxITB Event
        </h1>
      </div>
      <div className="relative flex h-fit">
        <div className="absolute w-full h-full flex items-center justify-center z-50">
          <div className="relative flex justify-center items-center min-w-[90vw] sm:min-w-[80vw] md:min-w-[600px] aspect-[4/3] px-3 z-[60]">
            <div className="w-full h-full flex justify-between items-center">
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClick(-1)}
                className="rounded-full bg-ted-red p-1"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClick(1)}
                className="rounded-full bg-ted-red p-1"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>
            <div className="absolute w-full bottom-2 flex justify-center items-end">
              <div className="p-2 rounded-full flex justify-center items-center gap-3 bg-slate-600 backdrop-filter backdrop-blur-md bg-opacity-20">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "rounded-full w-2 h-2",
                      indexInArrayScope === item.id
                        ? "bg-white"
                        : "bg-[#9AB5C7]"
                    )}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            return (
              <motion.div
                className="relative rounded-md p-0 min-w-[90vw] sm:min-w-[80vw] md:min-w-[600px] aspect-[4/3] z-30"
                key={item.id}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left";
                    } else if (item === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-conver object-center"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center h-fit overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => (
            <motion.div
              className="flex flex-col justify-center items-center w-full min-w-[90vw] sm:min-w-[80vw] md:min-w-[600px] gap-5 p-3"
              key={item.id}
              layout
              custom={{
                direction,
                position: () => {
                  if (item === visibleItems[0]) {
                    return "left";
                  } else if (item === visibleItems[1]) {
                    return "center";
                  } else {
                    return "right";
                  }
                },
              }}
              variants={variants2}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
            >
              <h3 className="w-full text-center text-white font-bold font-anderson text-[24px]">
                {item.title}
              </h3>
              <p className="w-full text-center text-white font-anderson text-[16px] md:text-[20px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
