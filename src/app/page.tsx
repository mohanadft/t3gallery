import { db } from "~/server/db";
import UploadButtonComponent from "./_components/upload-button";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={image.id + "-" + index}
            className="flex w-48 flex-col items-center"
          >
            <img
              src={image.url}
              alt={image.name}
              className="h-44 w-44 object-cover"
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      <UploadButtonComponent />
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
