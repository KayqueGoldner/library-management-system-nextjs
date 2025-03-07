import ImageKit from "imagekit";
import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import dummyBooks from "@/dummybooks.json";
import { books } from "@/database/schema";

config({
  path: ".env.local",
});

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

const uploadToImageKit = async (
  url: string,
  fileName: string,
  folder: string,
) => {
  try {
    const response = await imagekit.upload({
      file: url,
      fileName,
      folder,
    });

    return response.filePath;
  } catch (error) {
    console.log("error uploading image: ", error);
  }
};

const seed = async () => {
  console.log("seeding data...");

  try {
    for (const book of dummyBooks) {
      const coverUrl = await uploadToImageKit(
        book.coverUrl,
        `${book.title}.jpg`,
        "/books/covers",
      );
      const videoUrl = await uploadToImageKit(
        book.videoUrl,
        `${book.title}.mp4`,
        "/books/videos",
      );

      await db.insert(books).values({
        ...book,
        coverUrl: coverUrl!,
        videoUrl: videoUrl!,
      });
    }

    console.log("Data seed successfully");
  } catch (error) {
    console.log("error seeding data: ", error);
  }
};

seed();
