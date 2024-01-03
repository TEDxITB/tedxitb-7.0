import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
});

const allowedImagesTypes = ["image/jpeg", "image/png", "image/jpg"];
const maxImageSize = 5242880; // 5 MB
export const imageSchema = z
  .custom<File>()
  .refine((file) => {
    return file.size <= maxImageSize;
  }, "File size should be less than 5 MB")
  .refine((file) => {
    return allowedImagesTypes.includes(file.type);
  }, "Only these types are allowed .jpg, .jpeg, and .png");
