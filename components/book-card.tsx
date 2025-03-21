import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { BookCover } from "@/components/book-cover";
import { Button } from "@/components/ui/button";

export const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook = false,
}: Book) => {
  return (
    <li className={cn(isLoanedBook && "w-full xs:w-52")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoanedBook && "flex w-full flex-col items-center")}
      >
        <BookCover coverColor={coverColor} coverImage={coverUrl} />

        <div className={cn("mt-4", !isLoanedBook && "max-w-28 xs:max-w-40")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>

        {isLoanedBook && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <Image
                src="/icons/calendar.svg"
                alt="calendar"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-light-100">11 days left to return</p>
            </div>

            <Button className="book-btn">Download receipt</Button>
          </div>
        )}
      </Link>
    </li>
  );
};
