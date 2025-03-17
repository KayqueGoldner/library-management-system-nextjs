import { BookList } from "@/components/book-list";
import { sampleBooks } from "@/constants";

const MyProfilePage = () => {
  return (
    <>
      <BookList title="Borrowed Books" books={sampleBooks} />
    </>
  );
};

export default MyProfilePage;
