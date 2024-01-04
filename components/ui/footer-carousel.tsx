"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageCMS } from "@/types/cms";
import Image from "next/image";
import Link from "next/link";

export const ScrollImage = ({ images }: { images: ImageCMS[] }) => {
  const [page, setPage] = useState(0);
  const totalPage = Math.ceil(images.length / 4);
  const shownImages = images.slice(page * 4, page * 4 + 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(() => (page + 1) % totalPage);
    }, 5000);
    return () => clearInterval(interval);
  }, [page, totalPage]);

  return (
    <>
      <AnimatePresence custom={page}>
        <div className="grid grid-cols-2 gap-3 lg:gap-5 2xl:grid-cols-4">
          {shownImages.map((image, index) => (
            <motion.div
              key={`${page}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link href="/documentation">
                <Image
                  className="h-24 w-24 rounded-lg object-cover object-center"
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
};
