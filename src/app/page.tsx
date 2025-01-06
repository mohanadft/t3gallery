import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main className="p-4">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="flex w-48 flex-col">
          <Image src={image.url} alt={image.name} />
          <div>{image.name}</div>
        </div>
      ))}
    </main>
  );
}
