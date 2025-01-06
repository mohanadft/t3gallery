import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div
            key={image.id + "-" + index}
            className="flex w-48 flex-col items-center"
          >
            <Image
              src={image.url}
              alt={image.name}
              className="h-44 w-44 object-cover"
              width={200}
              height={200}
            />

            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <main className="p-4">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
