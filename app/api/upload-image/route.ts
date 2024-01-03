import { authOptions } from "@/lib/auth-options";
import { imageSchema } from "@/lib/zod";
import { createHash } from "crypto";
import { getServerSession } from "next-auth";
import { type NextRequest, NextResponse } from "next/server";

/* Endpoint for uploading image for main event registration */
export const POST = async (req: NextRequest) => {
  // Validate user session
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized", message: "No Access" },
      { status: 401 }
    );
  }

  // Get file from form data
  const reqFormData = await req.formData();
  const file = reqFormData.get("file") as Blob;

  // Validate file
  const zodParseResult = imageSchema.safeParse(file);
  if (!zodParseResult.success) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message:
          "File must be less than 5 MB and have format either one of png, jpg, or jpeg.",
      },
      { status: 400 }
    );
  }

  const folderName = "7.0/registration/";
  const fileName = `${session.id}`;

  const cloudinaryEndPoint = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
  const timestamp = Math.floor(Date.now() / 1000);

  const hash = createHash("sha1");
  const str = `folder=${folderName}&public_id=${fileName}&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`;
  hash.update(str);
  const signature = hash.digest("hex");

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", process.env.CLOUDINARY_API_KEY as string);
  formData.append("signature", signature);
  formData.append("folder", folderName);
  formData.append("public_id", fileName);
  formData.append("timestamp", timestamp + "");

  const res = await fetch(cloudinaryEndPoint, {
    method: "POST",
    body: formData,
  });

  // Fail upload
  if (!res.ok) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to upload image",
      },
      { status: 500 }
    );
  }

  // Success upload
  const resJSON = await res.json();
  const imageUrl = resJSON.secure_url as string;

  return NextResponse.json(
    { message: "Success upload image.", imageUrl },
    { status: 200 }
  );
};
