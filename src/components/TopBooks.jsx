import BookCard from "./BookCard";

const TopBooks = async () => {
  const res = await fetch("https://book-hub-ashy-one.vercel.app/data.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  const books = await res.json();

  // Top 8 books
  const topBooks = books.slice(0, 8);

  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
        Featured Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {topBooks.map((book) => (
          
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};