"use client";

import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export default function UploadButtonComponent() {
  const router = useRouter();
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={() => {
        router.refresh();
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
