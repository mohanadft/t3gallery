import { db } from "~/server/db";
import UploadButtonComponent from "./_components/upload-button";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="p-4">
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
    </main>
  );
}
