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
    image: "/home/carousel-ted1.jpg",
    title: 'TEDxITB 1.0: "Beyond the Grasp"',
    desc: "In its first ever appearance, TEDxITB aims to break the boundaries standing in between our norms and what is beyond our grasp.",
  },
  {
    id: 1,
    image: "/home/carousel-ted2.jpg",
    title: 'TEDxITB 2.0: "The Other Way Around"',
    desc: "Seeing things from a different perspective that could lead us to act beyond our impulses, to rethink, and relearn.",
  },
  {
    id: 2,
    image: "/home/carousel-ted3.jpg",
    title: 'TEDxITB 3.0: "Unravelling the Unknown"',
    desc: "In the increasingly interconnected world of today, we nav- igate our lives through the effects of an overwhelming number of the things happening in the background.",
  },
  {
    id: 3,
    image: "/home/carousel-ted4.png",
    title: 'TEDxITB 4.0: "Metamorphosis Through Fortuity"',
    desc: "The power of life metamorphosis guides us to another level of development in recognizing and maximizing each opportunity to bring changes for the world.",
  },
  {
    id: 4,
    image: "/home/carousel-ted5.jpg",
    title: 'TEDxITB 5.0: "Daydreamers"',
    desc: "Taking a journey into a world where the limit is your own imagination. We highlight that each idea starts with a simple dream, a simple idea, and a simple want.",
  },
  {
    id: 5,
    image: "/home/carousel-ted6.jpg",
    title: 'TEDxITB 6.0: "Action: The Fundamental Breakthrough"',
    desc: "Encourage the audience to start taking action. To take their first step towards their dreams, to stop daydreaming and start actualizing them.",
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
    <div className="flex w-full flex-col items-center justify-center gap-8  md:gap-10 lg:gap-12">
      <h1 className="text-center font-anderson text-3xl font-bold text-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-5xl">
        Previous TEDxITB Event
      </h1>
      <div className="relative flex h-fit">
        <div className="absolute z-50 flex h-full w-full items-center justify-center">
          <div className="relative z-[60] flex aspect-[4/3] min-w-[90vw] items-center justify-center px-3 sm:min-w-[80vw] md:min-w-[600px]">
            <div className="flex h-full w-full items-center justify-between">
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClick(-1)}
                className="rounded-full bg-ted-red p-1"
              >
                <span className="hidden">foo</span>
                <ChevronLeft className="h-6 w-6 text-white" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => handleClick(1)}
                className="rounded-full bg-ted-red p-1"
              >
                <span className="hidden">foo</span>
                <ChevronRight className="h-6 w-6 text-white" />
              </motion.button>
            </div>
            <div className="absolute bottom-2 flex w-full items-end justify-center">
              <div className="flex items-center justify-center gap-3 rounded-full bg-slate-600 bg-opacity-20 p-2 backdrop-blur-md backdrop-filter">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "h-2 w-2 rounded-full",
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
                className="relative z-30 aspect-[4/3] min-w-[90vw] rounded-md p-0 sm:min-w-[80vw] md:min-w-[600px]"
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
                  className="rounded-lg object-cover object-center"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex h-fit items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => (
            <motion.div
              className="flex w-full min-w-[90vw] flex-col items-center justify-center gap-5 p-3 sm:min-w-[80vw] md:min-w-[600px]"
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
              <h5 className="w-full text-center font-anderson text-[24px] font-bold text-white">
                {item.title}
              </h5>
              <p className="w-full text-center font-anderson text-[16px] text-white md:text-[20px]">
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
