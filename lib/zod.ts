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

export const registrationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phonenumber: z.string().refine((value) => /^\d+$/.test(value), {
    message: "Please enter only numeric digits for the phone number.",
  }),
  age: z.number().positive(),
  job: z.string(),
  affiliation: z.string(),
  major: z.string().optional(),
  socialmedia: z.string(),
  allergy: z.string().optional(),
  specialneeds: z.string(),
  selfdescription: z.string(),
  photo_url: z.string(),
  motivation: z.string(),
  hopes: z.string(),
  participationscale: z.number().min(1).max(5),
  communityparticipation: z.string().optional(),
  potentialstory: z.string().optional(),
});
