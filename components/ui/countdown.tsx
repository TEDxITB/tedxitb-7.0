"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Countdown({ date }: { date: Date }) {
  const [deltaTime, setDeltaTime] = useState(date.getTime() - Date.now());

  const days = Math.floor(deltaTime / (1000 * 86400));
  const hours = Math.floor((deltaTime % (1000 * 86400)) / (1000 * 3600));
  const minutes = Math.floor((deltaTime % (1000 * 3600)) / (1000 * 60));
  const seconds = Math.floor((deltaTime % (1000 * 60)) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeltaTime(date.getTime() - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className="grid grid-cols-[137px_40px_137px] grid-rows-2 gap-y-8 font-anderson font-extrabold text-ted-white md:grid-cols-[137px_40px_137px_40px_137px_40px_137px] md:grid-rows-none">
      <div className="col-span-1 flex h-[137px] w-[137px] items-center justify-center bg-ted-black rounded-xl drop-shadow-[2px_4px_18px_rgba(255,255,255,0.5)]">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex">
            <div>
              <AnimatePresence>
                <motion.p
                  className="text-6xl font-black shadow-[#E8FE4D] text-shadow-lg"
                  key={Math.floor(days / 10)}
                  exit={{
                    y: 50,
                    opacity: 0,
                    position: "absolute",
                  }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  {Math.floor(days / 10)}
                </motion.p>
              </AnimatePresence>
            </div>
            <div>
              <AnimatePresence>
                <motion.p
                  className="text-6xl font-black shadow-[#E8FE4D] text-shadow-lg"
                  key={days % 10}
                  exit={{
                    y: 50,
                    opacity: 0,
                    position: "absolute",
                  }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  {days % 10}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-2xl font-black tracking-wider text-[#E8FE4D] shadow-[#FFFBB9] text-shadow-lg">
            Days
          </p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center font-mono text-5xl font-extrabold text-ted-black">
        
      </div>
      <div className="col-span-1 flex h-[137px] w-[137px] items-center justify-center bg-ted-black rounded-xl drop-shadow-[2px_4px_18px_rgba(255,255,255,0.5)]">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex">
            <div>
              <AnimatePresence>
                <motion.p
                  className="text-6xl font-black shadow-[#E8FE4D] text-shadow-lg"
                  key={Math.floor(hours / 10)}
                  exit={{
                    y: 50,
                    opacity: 0,
                    position: "absolute",
                  }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  {Math.floor(hours / 10)}
                </motion.p>
              </AnimatePresence>
            </div>
            <div>
              <AnimatePresence>
                <motion.p
                  className="text-6xl font-black shadow-[#E8FE4D] text-shadow-lg"
                  key={hours % 10}
                  exit={{
                    y: 50,
                    opacity: 0,
                    position: "absolute",
                  }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  {hours % 10}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-2xl font-black tracking-wider text-[#E8FE4D] shadow-[#FFFBB9] text-shadow-lg">
            Hours
          </p>
        </div>
      </div>
      <div className="col-span-1 hidden items-center justify-center font-mono text-5xl font-extrabold text-ted-black md:flex">
        
      </div>
      <div className="col-span-1 flex h-[137px] w-[137px] items-center justify-center bg-ted-black rounded-xl drop-shadow-[2px_4px_18px_rgba(255,255,255,0.5)]">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex">
            <div>
              <AnimatePresence>
                <motion.p
                  className="text-6xl font-black shadow-[#E8FE4D] text-shadow-lg"
                  key={Math.floor(minutes / 10)}
                  exit={{
                    y: 50,
                    opacity: 0,
                    position: "absolute",
                  }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  {Math.floor(minutes / 10)}
                </motion.p>
              </AnimatePresence>
            </div>
            <div>
              <AnimatePresence>
                <motion.p
                  className="text-6xl font-black shadow-[#E8FE4D] text-shadow-lg"
                  key={minutes % 10}
                  exit={{
                    y: 50,
                    opacity: 0,
                    position: "absolute",
                  }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  {minutes % 10}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-2xl font-black tracking-wider text-[#E8FE4D] shadow-[#FFFBB9] text-shadow-lg">
            Minutes
          </p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center font-mono text-5xl font-extrabold text-ted-black">
        
      </div>
      <div className="col-span-1 flex h-[137px] w-[137px] items-center justify-center bg-ted-black rounded-xl drop-shadow-[2px_4px_18px_rgba(255,255,255,0.5)]">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex">
            <div>
              <AnimatePresence>
                <motion.p
                  className="text-6xl font-black shadow-[#E8FE4D] text-shadow-lg"
                  key={Math.floor(seconds / 10)}
                  exit={{
                    y: 50,
                    opacity: 0,
                    position: "absolute",
                  }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  {Math.floor(seconds / 10)}
                </motion.p>
              </AnimatePresence>
            </div>
            <div>
              <AnimatePresence>
                <motion.p
                  className="text-6xl font-black shadow-[#E8FE4D] text-shadow-lg"
                  key={seconds % 10}
                  exit={{
                    y: 50,
                    opacity: 0,
                    position: "absolute",
                  }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  {seconds % 10}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-2xl font-black tracking-wider text-[#E8FE4D] shadow-[#FFFBB9] text-shadow-lg">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
