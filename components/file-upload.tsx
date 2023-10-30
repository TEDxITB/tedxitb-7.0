"use client";

import {
  ChangeEvent,
  Dispatch,
  Fragment,
  MouseEventHandler,
  SetStateAction,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as z from "zod";
import FileX from "@/public/file-x.svg";
import FileJPG from "@/public/file-jpg.svg";
import FilePNG from "@/public/file-png.svg";
import FileImage from "@/public/file-image.svg";
import Retry from "@/public/retry.svg";
import Trash from "@/public/trash.svg";
import BgFileUpload from "@/public/bg-file-upload.svg";
import BgFileUpload2 from "@/public/bg-file-upload2.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { UseFormSetValue } from "react-hook-form";

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setState?: Dispatch<SetStateAction<Image[]>>;
  setValue?: UseFormSetValue<{
    name: string;
    images: any[];
  }>;
}
interface FileItemsProps {
  images: Image[];
  handleDelete: (image: Image) => void;
  handleRetry: (image: Image) => void;
}

interface FileItemProps {
  image: Image;
  handleDelete: (image: Image) => void;
  handleRetry: (image: Image) => void;
}

export interface Image {
  file: File;
  error?: string;
}

const fileValidation = z
  .any()
  .refine((file) => {
    return file.size <= 10000000;
  }, "Max image size is 10MB")
  .refine((file) => {
    return file.type.startsWith("image/");
  }, "Only image type are supported");


/**
 * Kalau menggunakan react hook form maka yang perlu di kirim ke component ini adalah form.setValue
 * kalu tidak menggunakan react hook form dan hanya mau menggunakan useState biasa maka yang perlu dikirimkan adalah setState nya
 */
const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ setValue, setState, onChange, type = "file", ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<Image[]>([]);
    const [indexRetry, setIndexRetry] = useState(-1);

    useEffect(() => {
      if (setValue) {
        setValue("images", [...images]);
      }
      if (setState) {
        setState([...images]);
      }
    }, [images, setState, setValue]);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (e.dataTransfer.files) {
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          const validate = fileValidation.safeParse(e.dataTransfer.files[i]);
          let error = "";

          if (!validate.success) {
            error = validate.error.issues.map((err) => err.message).join(", ");
          }

          const image: Image = {
            file: e.dataTransfer.files[i],
            error: error,
          };
          setImages((val) => [...val, image]);
        }
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      if (e.target.files) {
        if (indexRetry === -1) {
          for (let i = 0; i < e.target.files.length; i++) {
            const validate = fileValidation.safeParse(e.target.files[i]);
            let error = "";

            if (!validate.success) {
              error = validate.error.issues
                .map((err) => err.message)
                .join(", ");
            }

            const image: Image = {
              file: e.target.files[i],
              error: error,
            };
            const exist = images.find(
              (val) => val.file.name === image.file.name
            );
            if (!exist) setImages((val) => [...val, image]);
          }
        } else if (indexRetry > -1) {
          const validate = fileValidation.safeParse(e.target.files[0]);
          let error = "";

          if (!validate.success) {
            error = validate.error.issues.map((err) => err.message).join(", ");
          }

          const image: Image = {
            file: e.target.files[0],
            error: error,
          };
          const exist = images.find((val) => val.file.name === image.file.name);

          if (!exist)
            setImages((val) => {
              const temp = [...val];
              temp[indexRetry] = image;
              return [...temp];
            });
          setIndexRetry(-1);
          if (inputRef.current) inputRef.current.multiple = true;
        }
      }
    };

    const handleDelete = (image: Image) => {
      setImages((val) => {
        return [...val].filter((img) => image.file.name !== img.file.name);
      });
    };

    const handleRetry = (image: Image) => {
      if (inputRef.current) {
        inputRef.current.multiple = false;
        inputRef.current.click();
        const index = images.findIndex(
          (val) => val.file.name === image.file.name
        );
        setIndexRetry(index);
      }
    };

    return (
      <section className="flex h-fit min-w-full flex-col items-center justify-between gap-6 sm:min-w-[600px] sm:flex-row sm:items-start lg:min-w-[810px]">
        <div
          className="flex h-[152px] min-w-[180px] max-w-[400px] flex-col items-center justify-center gap-3 rounded-[14px] bg-clip-padding p-6 sm:h-[278px] sm:flex-[0.8]"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='%23333' stroke-width='4' stroke-dasharray='12%2c 19' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e")`,
          }}
        >
          <Image src={BgFileUpload} alt="upload" className="hidden sm:flex" />
          <Image src={BgFileUpload2} alt="upload" className="flex sm:hidden" />
          <p className="hidden text-center font-anderson text-sm text-black/60 sm:flex">
            Drag file kamu di sini atau
          </p>
          <p className="flex text-center font-anderson text-xs text-black/60 sm:hidden">
            Upload File kamu
          </p>
          <button
            className="rounded-lg bg-[#FF2B06] px-2 py-[5px] font-montserrat text-[11px] text-white sm:py-[6px] sm:text-base"
            onClick={handleClick}
          >
            Choose File
          </button>
          <input
            multiple
            className="hidden"
            onChange={handleChange}
            ref={inputRef}
            type={type}
            {...props}
          />
        </div>
        <div className="flex h-[278px] w-full flex-col justify-start sm:flex-[1.1]">
          <h2 className="w-full font-anderson text-base text-black sm:text-2xl">
            Uploaded Files
          </h2>
          <Separator className="my-2 h-[1px] bg-black/20" />
          <FileItems
            images={images}
            handleDelete={handleDelete}
            handleRetry={handleRetry}
          />
        </div>
      </section>
    );
  }
);

FileUpload.displayName = "FileUpload";

const FileItems: React.FC<FileItemsProps> = ({
  images,
  handleDelete,
  handleRetry,
}) => {
  return (
    <ScrollArea>
      {images.map((image) => {
        return (
          <Fragment key={image.file.name}>
            <FileItem
              image={image}
              handleDelete={handleDelete}
              handleRetry={handleRetry}
            />
            <Separator className="my-2 h-[1px] bg-black/20" />
          </Fragment>
        );
      })}
    </ScrollArea>
  );
};

const FileItem: React.FC<FileItemProps> = ({
  image,
  handleDelete,
  handleRetry,
}) => {
  let FileIcon = FileImage;
  if (image.error) {
    FileIcon = FileX;
  } else if (
    image.file.type.endsWith("jpg") ||
    image.file.type.endsWith("jpeg")
  ) {
    FileIcon = FileJPG;
  } else if (image.file.type.endsWith("png")) {
    FileIcon = FilePNG;
  }

  return (
    <div className="flex w-full flex-row items-center justify-between gap-6 p-2">
      <div className="flex flex-row items-center justify-start gap-[18px]">
        <Image
          src={FileIcon}
          alt="file image"
          className="h-[18px] w-[18px] sm:h-[24px] sm:w-[24px]"
        />
        <div className="flex flex-col">
          <p className="font-anderson text-sm leading-4 text-[#242634] sm:text-[15px]">
            {image.file.name}
          </p>
          <p
            className={cn(
              "hyphens-auto font-montserrat text-[11px] leading-[14px] sm:text-xs",
              image.error ? "text-[#FF2B06]" : "text-[#1CCA00]"
            )}
          >
            {image.error ? `${image.error}` : "Completed"}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-2">
        {image.error ? (
          <Image
            src={Retry}
            alt="retry"
            className="flex h-[16px] w-[16px] cursor-pointer text-[#FF2B06]"
            onClick={(e) => {
              e.preventDefault();
              handleRetry(image);
            }}
          />
        ) : (
          <></>
        )}
        <div
          className={cn(
            "flex items-center justify-center rounded-md border  px-2 py-1",
            image.error ? "border-[#FF2B06]" : "border-[#CDD3D8]"
          )}
        >
          <p
            className={cn(
              "font-anderson text-[11px] font-bold leading-3",
              image.error ? "text-[#FF2B06]" : "text-[#242634]"
            )}
          >
            {image.error ? "ERROR" : `${Math.round(image.file.size / 1000)}KB`}
          </p>
        </div>
        <Image
          src={Trash}
          alt="trash"
          className={cn(
            "h-[14px] w-[11px] cursor-pointer sm:h-[15px] sm:w-[12px]"
          )}
          onClick={() => handleDelete(image)}
        />
      </div>
    </div>
  );
};

export default FileUpload;
