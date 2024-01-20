"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Pagination from "@/components/ui/pagination";
import { ImageCMS } from "@/types/cms";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import { X } from "lucide-react";
import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

export default function PhotosCarousel({ images }: { images: ImageCMS[] }) {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isPhotoOpen, setIsPhotoOpen] = useState<boolean>(false);

  // Change items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPage = Math.ceil(images.length / itemsPerPage);

  const [carouselRef, api] = useEmblaCarousel({
    loop: true,
    axis: "x",
    watchDrag: false,
  });

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
    if (page === 1) {
      setPage(totalPage);
    } else {
      setPage(page - 1);
    }
  }, [api, page, totalPage]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
    if (page === totalPage) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }, [api, page, totalPage]);

  // Carousel component integration
  useEffect(() => {
    // Library index start from 0, meanwhile carousel page start from 1
    api?.scrollTo(page - 1);
  }, [page, api]);

  // Auto play effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPhotoOpen) scrollNext();
    }, 7500);

    return () => clearInterval(interval);
  }, [page, totalPage, scrollNext, isPhotoOpen]);

  return (
    <>
      <Carousel
        api={api}
        carouselRef={carouselRef}
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
      >
        <CarouselContent className="h-fit w-fit">
          {Array.from({ length: totalPage }).map((_, index) => (
            <CarouselItem className="w-full" key={index}>
              <div
                key={index}
                className="grid grid-cols-1 grid-rows-3 gap-4 px-5 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:gap-8 lg:px-16"
              >
                {images
                  .slice(
                    index * itemsPerPage,
                    index * itemsPerPage + itemsPerPage
                  )
                  .map((img, _index) => {
                    return (
                      <ClickablePhoto
                        key={_index}
                        image={img}
                        setIsPhotoOpen={setIsPhotoOpen}
                      />
                    );
                  })}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Pagination */}
        <div className="relative mt-8 flex h-8 items-center justify-center gap-2 lg:mt-12">
          <Pagination
            loop={true}
            currentPage={page}
            setPage={setPage}
            totalPages={totalPage}
            control="icon"
          />
        </div>
      </Carousel>
    </>
  );
}

function ClickablePhoto({
  image,
  setIsPhotoOpen,
}: {
  image: ImageCMS;
  setIsPhotoOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog onOpenChange={() => setIsPhotoOpen((state) => !state)}>
      <DialogTrigger>
        <Image
          className="aspect-video h-full w-full rounded-lg object-cover object-center shadow-md"
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </DialogTrigger>

      {/* Added customCLoseButton so that the dialog component doesn't affect any other page that also using the dialog component */}
      <DialogContent className="w-full p-0 sm:max-w-[70vw]" customCloseButton>
        <Image
          className="aspect-video w-full rounded object-cover object-center shadow-md"
          src={image.url}
          alt={image.alt}
          height={image.height}
          width={image.width}
        />
        <DialogPrimitive.Close className="absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className={`h-6 w-6 rounded-full bg-stone-500 stroke-white`} />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogContent>
    </Dialog>
  );
}
