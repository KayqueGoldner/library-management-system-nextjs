import { BookList } from "@/components/book-list";
import { BookOverview } from "@/components/book-overview";

export default function Home() {
  return (
    <>
      <BookOverview />
      <BookList />
    </>
  );
}
