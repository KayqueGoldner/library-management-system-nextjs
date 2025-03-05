import { BookCard } from "@/components/book-card";

interface BookListProps {
  title: string;
  books: Book[];
  containerClassName?: string;
}

export const BookList = ({
  title,
  books,
  containerClassName,
}: BookListProps) => {
  if (books.length < 2) return;

  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};
