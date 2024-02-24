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

export const regisSchema = z.object({
  name: z.string({ required_error: "Masukkan Nama" }).min(1),
  phone: z
    .string({ required_error: "Masukkan Nomor HP" })
    .min(10, { message: "Masukkan Nomor HP" })
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      { message: "Nomor HP tidak valid" }
    ),
  age: z.coerce
    .number({
      required_error: "Masukkan Umur",
      invalid_type_error: "Umur tidak valid",
    })
    .int({ message: "Umur tidak valid" })
    .min(1, { message: "Umur tidak valid" }),
  address: z.string({ required_error: "Masukkan Alamat" }).min(1),
  job: z.string({ required_error: "Masukkan Pekerjaan" }).min(1),
  instance: z.string({ required_error: "Masukkan Instansi" }).min(1),
  faculty: z
    .string()
    .refine((value) => value === "" || /^[^/]*\/\d{2}$/.test(value), {
      message: "Masukan tidak sesuai format",
    })
    .optional(),
  linkedin: z.string().optional(),
  instagram: z.string().optional(),
  allergy: z.string().optional(),
  q1: z.string().optional(),
  q2: z.string({ required_error: "Masukkan Jawaban" }).min(1),
  profile: z
    .string()
    .url()
    .refine((url) => url.startsWith("https://res.cloudinary.com/")),
  q3: z.string({ required_error: "Masukkan Jawaban" }).min(1),
  q4: z.string({ required_error: "Masukkan Jawaban" }).min(1),
  scale: z.number().int().min(1).max(5),
  q5: z.string().optional(),
  q6: z.string().optional(),
});

export const confirmationSchema = z.object({
  attendance: z.boolean(),
});

export const voteSchema = z.string();

export const feedbackSchema = z.object({
  q1: z.number().int().min(0).max(10),
  q2: z.string({ required_error: "Masukkan Jawaban" }).min(1),
  q3: z.string({ required_error: "Pilih Jawaban" }).min(1),
  q4: z.string({ required_error: "Masukkan Jawaban" }).min(1),
  q5: z.string({ required_error: "Masukkan Jawaban" }).min(1),
  q6: z.string({ required_error: "Masukkan Jawaban" }).min(1),
  q7: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Pilih minimal satu",
  }),
});
