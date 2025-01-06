import { ClientUploadedFileData } from "uploadthing/types";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export default async function uploadImage(
  res: ClientUploadedFileData<{
    uploadedBy: string;
  }>[],
) {
  // Do something with the response
  if (res && res.length > 0 && res[0]) {
    const { name, url } = res[0];
    await db
      .insert(images)
      .values({ name: Math.random().toString(36).slice(2, 5) + name, url });
    alert("Upload Completed");
  }
}
