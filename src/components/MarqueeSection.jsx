const MarqueeSection = async () => {
  const res = await fetch("https://book-hub-ashy-one.vercel.app/data.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const books = await res.json();
  const latestBooks = books.slice(0, 6);

  const bookNames = latestBooks.map((book) => book.title).join(" | ");

  return (
    <div className="bg-gray-200 dark:bg-gray-900 py-3 overflow-hidden my-6 rounded-lg flex items-center">
      <div className="px-4  whitespace-nowrap font-bold text-pink-500 text-lg font-extrabold">
        New Arrivals:
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee px-4 text-lg text-gray-700 dark:text-gray-300 font-bold">
          {bookNames} |
          <span className="text-blue-600">Special Discount on Memberships</span>
          |
          <span className="text-pink-950">
            Join BookHub & Start Reading Today
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
