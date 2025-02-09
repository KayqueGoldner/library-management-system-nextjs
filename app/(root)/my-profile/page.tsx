import { signOut } from "@/auth";
import { BookList } from "@/components/book-list";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";

const MyProfilePage = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      <BookList title="Borrowed Books" books={sampleBooks} />
    </>
  );
};

export default MyProfilePage;
