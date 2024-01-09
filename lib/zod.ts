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
  name: z.string().min(1, { message: "Masukkan Nama" }),
  email: z.string().email({ message: "Email tidak valid" }),
  phone: z
    .string()
    .min(10, { message: "Masukkan Nomor HP" })
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      { message: "Nomor HP tidak valid" }
    ),
  age: z.coerce
    .number()
    .int({ message: "Umur tidak valid" })
    .min(1, { message: "Umur tidak valid" }),
  address: z.string().min(1, { message: "Masukkan Alamat" }),
  job: z.string().min(1, { message: "Masukkan Pekerjaan" }),
  instance: z.string().min(1, { message: "Masukkan Instansi" }),
  faculty: z
    .string()
    .refine((value) => value === "" || /^[^/]*\/\d{2}$/.test(value), {
      message: "Masukan tidak sesuai format",
    }),
  social: z.string().min(1, { message: "Masukkan Media Sosial" }),
  allergy: z.string().optional(),
  q1: z.string().optional(),
  q2: z.string().min(1, { message: "Masukkan Jawaban" }),
  profile: z.string().url(),
  q3: z.string().min(1, { message: "Masukkan Jawaban" }),
  q4: z.string().min(1, { message: "Masukkan Jawaban" }),
  scale: z.number().int().min(1).max(5),
  q5: z.string().optional(),
  q6: z.string().optional(),
});
