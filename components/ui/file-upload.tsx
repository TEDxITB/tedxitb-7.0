"use client";

import { FileUploadContext } from "@/app/main-event/register/register-page";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { regisSchema } from "@/lib/zod";
import FileImage from "@/public/components/file-image.svg";
import FileJPG from "@/public/components/file-jpg.svg";
import FilePNG from "@/public/components/file-png.svg";
import FileX from "@/public/components/file-x.svg";
import { RotateCw, Trash2 } from "lucide-react";
import Image from "next/image";
import CustomImage from "next/image";
import {
  ChangeEvent,
  Dispatch,
  Fragment,
  MouseEventHandler,
  SetStateAction,
  forwardRef,
  useRef,
  useContext,
  useEffect,
} from "react";
import { UseFormReturn, UseFormSetValue } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

type FormValues = z.infer<typeof regisSchema>;

interface FileUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
  setValue: UseFormSetValue<FormValues>;
  form: UseFormReturn<FormValues>;
}
interface FileItemsProps {
  images: CustomImage | null;
  handleDelete: (image: CustomImage) => void;
  handleRetry: (image: CustomImage) => void;
}

interface FileItemProps {
  image: CustomImage;
  handleDelete: (image: CustomImage) => void;
  handleRetry: (image: CustomImage) => void;
}

export interface CustomImage {
  file: File;
  error?: string;
}

interface FileUploadContext {
  images: CustomImage | null;
  setImages: Dispatch<SetStateAction<CustomImage | null>>;
  indexRetry: number;
  setIndexRetry: Dispatch<SetStateAction<number>>;
}

const fileValidation = z
  .any()
  .refine((file) => {
    return file.size <= 3000000;
  }, "Max image size is 3MB")
  .refine((file) => {
    return file.type.startsWith("image/");
  }, "Only image type are supported");

/**
 * Kalau menggunakan react hook form maka yang perlu di kirim ke component ini adalah form.setValue
 * kalu tidak menggunakan react hook form dan hanya mau menggunakan useState biasa maka yang perlu dikirimkan adalah setState nya
 */
const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ setValue, onChange, type = "file", form, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { images, setImages, indexRetry, setIndexRetry } = useContext(
      FileUploadContext
    ) as FileUploadContext;

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

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      if (e.dataTransfer.files) {
        const validate = fileValidation.safeParse(e.dataTransfer.files[0]);
        let error = "";

        setIndexRetry(0);

        if (!validate.success) {
          error = validate.error.issues.map((err) => err.message).join(", ");
          const image: CustomImage = {
            file: e.dataTransfer.files[0],
            error: error,
          };
          setImages(image);
          return;
        }

        const idToastLoading = toast.loading("Loading...", {
          description: "Please wait while we upload your file",
          duration: Infinity,
        });

        const formData = new FormData();
        formData.append("file", e.dataTransfer.files[0]);
        const res = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        });

        toast.dismiss(idToastLoading);
        if (!res.ok) {
          const data = await res.json();
          toast.error("Error!", {
            description: data?.message || "Something went wrong",
          });

          const image: CustomImage = {
            file: e.dataTransfer.files[0],
            error: "Upload failed",
          };
          setImages(image);
          return;
        }

        toast.success("Success!", {
          description: "Your file has been uploaded",
        });

        const image: CustomImage = {
          file: e.dataTransfer.files[0],
        };

        setImages(image);

        const data = await res.json();
        setValue("profile", data.imageUrl);

        localStorage.setItem("formData", JSON.stringify(form.getValues()));
        localStorage.setItem("profile", image.file.name);

        setIndexRetry(-1);
      }
    };

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      if (e.target.files) {
        if (indexRetry === -1) {
          const validate = fileValidation.safeParse(e.target.files[0]);
          let error = "";

          setIndexRetry(0);

          if (!validate.success) {
            error = validate.error.issues.map((err) => err.message).join(", ");
            const image: CustomImage = {
              file: e.target.files[0],
              error: error,
            };
            setImages(image);
            return;
          }

          const idToastLoading = toast.loading("Loading...", {
            description: "Please wait while we upload your file",
            duration: Infinity,
          });

          const formData = new FormData();
          formData.append("file", e.target.files[0]);
          const res = await fetch("/api/upload-image", {
            method: "POST",
            body: formData,
          });

          toast.dismiss(idToastLoading);

          if (!res.ok) {
            toast.error("Error!", {
              description: "Something went wrong",
            });

            const image: CustomImage = {
              file: e.target.files[0],
              error: "Upload failed",
            };
            setImages(image);
            return;
          }

          toast.success("Success!", {
            description: "Your file has been uploaded",
          });

          const image: CustomImage = {
            file: e.target.files[0],
          };

          setImages(image);

          const data = await res.json();
          setValue("profile", data.imageUrl);

          localStorage.setItem("formData", JSON.stringify(form.getValues()));
          localStorage.setItem("profile", image.file.name);

          setIndexRetry(-1);
        } else if (indexRetry > -1) {
          const validate = fileValidation.safeParse(e.target.files[0]);
          let error = "";

          if (!validate.success) {
            error = validate.error.issues.map((err) => err.message).join(", ");
            const image: CustomImage = {
              file: e.target.files[0],
              error: error,
            };
            setImages(image);
            return;
          }

          const idToastLoading = toast.loading("Loading...", {
            description: "Please wait while we upload your file",
            duration: Infinity,
          });

          const formData = new FormData();
          formData.append("file", e.target.files[0]);
          const res = await fetch("/api/upload-image", {
            method: "POST",
            body: formData,
          });

          toast.dismiss(idToastLoading);

          if (!res.ok) {
            toast.error("Error!", {
              description: "Something went wrong",
            });

            const image: CustomImage = {
              file: e.target.files[0],
              error: "Upload failed",
            };
            setImages(image);
            return;
          }

          toast.success("Success!", {
            description: "Your file has been uploaded",
          });

          const image: CustomImage = {
            file: e.target.files[0],
          };

          setImages(image);

          const data = await res.json();
          setValue("profile", data.imageUrl);

          localStorage.setItem("formData", JSON.stringify(form.getValues()));
          localStorage.setItem("profile", image.file.name);

          setIndexRetry(-1);
        }
      }
    };

    const handleDelete = (image: CustomImage) => {
      setImages(null);
      setValue("profile", "");

      localStorage.setItem("formData", JSON.stringify(form.getValues()));
      localStorage.removeItem("profile");

      setIndexRetry(-1);
    };

    const handleRetry = (image: CustomImage) => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    useEffect(() => {
      const value = localStorage.getItem("profile");

      if (value) {
        const image: CustomImage = {
          file: new File([new Blob()], value),
        };
        setImages(image);
      }
    }, [setImages]);

    return (
      <section className="flex h-fit min-w-full flex-col items-center justify-between gap-6 md:min-w-[500px] md:flex-row md:items-start lg:min-w-[710px]">
        <div
          className="flex h-[152px] w-full min-w-[180px] max-w-[400px] flex-col items-center justify-center gap-3 rounded-[14px] bg-clip-padding p-6 sm:h-[278px] sm:flex-[0.8] md:w-auto"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='white' stroke-width='4' stroke-dasharray='12%2c 19' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e")`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="137"
            height="102"
            viewBox="0 0 140 107"
            fill="none"
            className="hidden sm:flex"
          >
            <path
              d="M133.307 2.03101H6.69238C3.77873 2.03101 1.41675 4.03355 1.41675 6.50382V78.0689C1.41675 80.5391 3.77873 82.5417 6.69238 82.5417H133.307C136.221 82.5417 138.583 80.5391 138.583 78.0689V6.50382C138.583 4.03355 136.221 2.03101 133.307 2.03101Z"
              stroke="white"
              strokeWidth="2.74333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M59.4487 82.5415L48.8974 104.906M80.5512 82.5415L91.1025 104.906M38.3462 104.906H101.654M96.3781 42.2862H43.6218M70 19.9221V64.6503"
              stroke="white"
              strokeWidth="2.74333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className="flex sm:hidden"
          >
            <path
              d="M27.6255 4.42432H11.9897C9.83983 4.42432 8.10036 6.18334 8.10036 8.33325L8.08081 39.6047C8.08081 41.7546 9.82029 43.5137 11.9702 43.5137H35.4434C37.5933 43.5137 39.3523 41.7546 39.3523 39.6047V16.1511L27.6255 4.42432ZM35.4434 39.6047H11.9897V8.33325H25.671V18.1056H35.4434V39.6047ZM15.8987 29.8519L18.6545 32.6077L21.7621 29.5197V37.6503H25.671V29.5197L28.7786 32.6273L31.5344 29.8519L23.7361 22.0145L15.8987 29.8519Z"
              fill="white"
            />
          </svg>
          <p className="hidden text-center font-anderson text-sm text-ted-white sm:flex">
            Drag file kamu di sini atau
          </p>
          <p className="flex text-center font-anderson text-xs text-ted-white sm:hidden">
            Upload File kamu
          </p>
          <Button
            type="button"
            variant="primary"
            size="default"
            className="py-[5px] text-[11px] sm:py-[6px] sm:text-base"
            onClick={handleClick}
          >
            Choose File
          </Button>
          <input
            className="hidden"
            onChange={handleChange}
            ref={inputRef}
            type={type}
            {...props}
          />
        </div>
        <div className="flex min-h-[100px] w-full flex-col justify-start sm:flex-[1.1]">
          <h2 className="w-full font-anderson text-base text-ted-white sm:text-2xl">
            Uploaded File
          </h2>
          <Separator className="my-2 h-[1px] bg-white" />
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
  if (!images) return <></>;

  return (
    <ScrollArea>
      <Fragment key={images.file.name}>
        <FileItem
          image={images}
          handleDelete={handleDelete}
          handleRetry={handleRetry}
        />
        <Separator className="my-2 h-[1px] bg-black/20" />
      </Fragment>
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
      <div className="flex flex-row items-center justify-start gap-[18px] text-ted-white">
        <Image
          src={FileIcon}
          alt="file image"
          className="h-[18px] w-[18px] stroke-ted-white sm:h-[24px] sm:w-[24px]"
        />
        <div className="flex flex-col">
          <p className="font-anderson text-sm leading-4 text-ted-white sm:text-[15px]">
            {image.file.name}
          </p>
          <p
            className={cn(
              "hyphens-auto font-montserrat text-[11px] leading-[14px] sm:text-xs",
              image.error ? "text-ted-red" : "text-[#1CCA00]"
            )}
          >
            {image.error ? `${image.error}` : "Completed"}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-2 text-ted-white">
        {image.error ? (
          <Button
            type="button"
            className="h-[20px] w-[20px] p-0"
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              handleRetry(image);
            }}
            aria-label="Retrying"
          >
            <RotateCw className="h-[15px] w-[15px] text-ted-red sm:h-[16px] sm:w-[16px]" />
          </Button>
        ) : (
          <></>
        )}
        <div
          className={cn(
            "flex items-center justify-center rounded-md border  px-2 py-1",
            image.error ? "border-ted-red" : "border-[#CDD3D8]"
          )}
        >
          <p
            className={cn(
              "font-anderson text-[11px] font-bold leading-3",
              image.error ? "text-ted-red" : "text-ted-white"
            )}
          >
            {image.error ? "ERROR" : `${Math.round(image.file.size / 1000)}KB`}
          </p>
        </div>
        <Button
          type="button"
          className="h-[20px] w-[20px] p-0"
          variant="ghost"
          onClick={() => handleDelete(image)}
          aria-label="Click to delete image"
        >
          <Trash2 className="h-[15px] w-[15px] sm:h-[16px] sm:w-[16px]" />
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
