"use client";

import { Card, CardContent } from "@/components/ui/cards";
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
        <CarouselContent className="w-fit h-fit">
          {Array.from({ length: totalPage }).map((_, index) => (
            <CarouselItem className="w-full" key={index}>
              <div
                key={index}
                className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-8 px-5 lg:px-16"
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
        <div className="flex relative items-center justify-center h-8 gap-2 mt-8 lg:mt-12">
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
        <div className="p-1 w-full aspect-video shadow-md flex items-center justify-center">
          <Card className="w-full h-full relative">
            <CardContent className="flex items-center justify-center p-0 w-full h-full">
              <Image
                className="rounded-lg object-cover object-center h-full w-full lg:max-w-[70vh] lg:max-h-[70vh]"
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>

      {/* Added customCLoseButton so that the dialog component doesn't affect any other page that also using the dialog component */}
      <DialogContent
        className="p-0 max-w-screen max-lg:min-w-full min-w-[40%] aspect-auto"
        customCloseButton
      >
        <div className=" w-full shadow-md">
          <Card className="w-full h-full relative">
            <CardContent className="flex items-center justify-center">
              <Image
                className="rounded object-cover object-center w-full"
                src={image.url}
                alt={image.alt}
                height={image.height}
                width={image.width}
              />
            </CardContent>
          </Card>
        </div>
        <DialogPrimitive.Close className="absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className={`h-6 w-6 bg-stone-500 stroke-white rounded-full`} />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogContent>
    </Dialog>
  );
}
