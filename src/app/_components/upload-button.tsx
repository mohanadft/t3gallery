"use client";

import { UploadButton } from "~/utils/uploadthing";
import uploadImage from "../actions/upload-image";

export default function UploadButtonComponent() {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={uploadImage}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
