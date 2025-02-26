import Link from "next/link";

import { BookForm } from "@/components/admin/forms/book-form";
import { Button } from "@/components/ui/button";

const NewBookPage = () => {
  return (
    <>
      <Button className="back-btn" asChild>
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
};

export default NewBookPage;
