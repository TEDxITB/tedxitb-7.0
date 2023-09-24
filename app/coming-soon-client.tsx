"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TagCloud } from "react-tagcloud";

const data = [
  {
    value: "Elegant",
    count: 23,
    color: "#FF2B06",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Classy",
    count: 29,
    color: "#FFFFFF",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Share",
    count: 19,
    color: "#FF2B06",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Curiosity",
    count: 18,
    color: "#FF2B06",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Transformation",
    count: 24,
    color: "#FFFFFF",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Learn",
    count: 24,
    color: "#FFFFFF",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Unique",
    count: 24,
    color: "#FFFFFF",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Insightful",
    count: 38,
    color: "#FF2B06",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Inspiring",
    count: 42,
    color: "#FFFFFF",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Ideas",
    count: 31,
    color: "#FF2B06",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Collaboration",
    count: 22,
    color: "#FF2B06",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Technology",
    count: 34,
    color: "#FFFFFF",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Education",
    count: 32,
    color: "#FFFFFF",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Art",
    count: 16,
    color: "#FF2B06",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Life",
    count: 25,
    color: "#FFFFFF",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
  {
    value: "Talks",
    count: 17,
    color: "#FF2B06",
    props: {
      style: {
        margin: "1rem",
      },
      className:
        "hover:cursor-default transition ease-in-out duration-300 hover:scale-125",
    },
  },
];

function ComingSoon() {
  const [word, setWord] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="mb-6 flex max-w-xs flex-col gap-2 text-center sm:max-w-sm md:max-w-lg lg:mb-24 lg:max-w-3xl xl:max-w-5xl">
      <div className="self-center md:flex md:flex-row md:gap-1">
        <p className="text-[13px] font-thin md:text-base lg:text-xl">
          In One Word,
        </p>
        <h3 className="mb-2 lg:text-xl">
          What Do You Think Of <span className="text-ted-red">TEDx</span>ITB?
        </h3>
      </div>

      <AnimatePresence>
        {!isSubmitted && (
          <motion.div
            layout
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12 flex self-center">
              <form
                className="mx-auto rounded-2xl border-2 p-2"
                onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
              >
                <input
                  className="w-56 bg-transparent pl-2 outline-none sm:w-72 md:w-96 lg:w-[600px] xl:w-[768px]"
                  type="text"
                  placeholder="Type a word.."
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setWord(e.target.value)
                  }
                />
                <button
                  disabled={word.length === 0}
                  className={`rounded-xl bg-ted-white px-2 py-1 font-bold text-ted-red ${
                    word.length === 0 ? "opacity-70" : ""
                  }`}
                  onClick={() => setIsSubmitted(true)}
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <TagCloud
              className="mx-auto mb-24 max-w-4xl"
              shuffle={false}
              minSize={16}
              maxSize={innerWidth <= 640 ? 24 : 38}
              tags={data}
            />

            <div className="flex flex-col gap-3 self-center text-justify">
              <h1 className="mx-auto w-fit bg-gradient-to-r from-ted-red to-ted-white bg-clip-text text-center font-bold text-ted-white text-transparent md:mx-0 md:text-start lg:text-4xl">
                What is TEDxITB?
              </h1>
              <p className="font-anderson text-sm lg:text-lg">
                TEDx is an international community that organizes TED-style
                events anywhere and everywhere, celebrating locally-driven ideas
                and elevating them to a global stage. TEDx events are produced
                independently of TED conferences, each event curates speakers on
                their own, but based on TED&apos;s format and rules.
              </p>
              <p className="font-anderson text-sm lg:text-lg">
                TEDxITB is one of the members of the worldwide TEDx big
                community. It holds the event independently with the local ideas
                based on the format and rules by TED.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ComingSoon;
