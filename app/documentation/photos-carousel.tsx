"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageCMS } from "@/types/cms";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function PhotosCarousel({ images }: { images: ImageCMS[] }) {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3);
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
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    setPage(api.selectedScrollSnap());

    api.on("select", () => {
      setPage(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
    setPage((page) => (page + totalPage - 1) % totalPage);
  }, [api, totalPage]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
    setPage((page) => (page + 1) % totalPage);
  }, [api, totalPage]);

  function changePage(dest: number): void {
    api?.scrollTo(dest);
    setPage(dest);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 1000000);
    return () => clearInterval(interval);
  }, [page, totalPage, scrollNext]);

  return (
    <>
      <Carousel
        className="w-full z-2"
        carouselRef={carouselRef}
        api={api}
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
      >
        <CarouselContent className="w-full md:aspect-[5/2]">
          {Array.from({ length: totalPage }).map((_, index) => (
            <CarouselItem className="w-full" key={index}>
              <div
                key={index}
                className="grid md:grid-cols-3 md:grid-rows-2 max-md:grid-rows-3 max-md:grid-cols-1 gap-x-6 gap-y-10 px-10"
              >
                {images
                  .slice(
                    index * itemsPerPage,
                    index * itemsPerPage + itemsPerPage
                  )
                  .map((img, _index) => {
                    return <ClickablePhoto key={_index} image={img} />;
                  })}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Pagination */}
        <div className="flex relative items-center justify-center h-8 gap-1 max-md:mt-8 mr-4">
          <CarouselPrevious
            className={`border-0 hover:border relative hover:bg-black hover:text-ted-red translate-x-0 -left-0 bg-white text-black rounded-sm h-full ${
              page == 0 ? "invisible" : ""
            }`}
          />
          <CarouselPagination
            page={page}
            changePage={changePage}
            totalPage={totalPage}
          />
          <CarouselNext
            className={`border-0 hover:border relative hover:bg-black hover:text-ted-red translate-x-0 -right-0 bg-white text-black rounded-sm h-full ${
              page == totalPage - 1 ? "invisible" : ""
            }`}
          />
        </div>
      </Carousel>
    </>
  );
}

function CarouselPagination({
  page,
  totalPage,
  changePage,
}: {
  page: number;
  totalPage: number;
  changePage: (dest: number) => void;
}) {
  return (
    <>
      {Array.from({ length: totalPage }).map((_, index) => {
        return (
          <Button
            key={index}
            className={`w-8 text-xs px-0 py-0 h-8 ${
              index != page
                ? "bg-white text-black hover:bg-black hover:text-ted-red hover:border hover:border-ted-red"
                : ""
            }`}
            onClick={() => {
              if (index != page) changePage(index);
            }}
          >
            {index + 1}
          </Button>
        );
      })}
    </>
  );
}

function ClickablePhoto({ image }: { image: ImageCMS }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-1 w-full aspect-video shadow-md flex items-center justify-center">
          <Card className="w-full h-full relative">
            <CardContent className="flex items-center justify-center p-0 w-full h-full">
              <Image
                className="rounded object-cover object-center h-full w-full"
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
      <DialogContent className="p-0 max-w-screen" customCloseButton>
        <div className=" w-full shadow-md">
          <Card className="w-full h-full relative">
            <CardContent className="flex items-center justify-center">
              <Image
                className="rounded"
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
