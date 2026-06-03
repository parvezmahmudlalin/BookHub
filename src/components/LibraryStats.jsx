const LibraryStats = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const books = await res.json();

  const totalBooks = books.length;

  const totalCopies = books.reduce(
    (sum, book) => sum + book.available_quantity,
    0
  );

  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <section className="my-20">
      <div className="rounded-3xl border border-blue-100 dark:border-slate-800 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 p-8 md:p-12 shadow-lg">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
              BookHub Community
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              A Growing Home for Readers and Lifelong Learners
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Discover inspiring stories, cutting-edge technology books, and
              fascinating science collections. BookHub is designed to help
              readers explore, learn, and grow through a carefully curated
              digital library experience.
            </p>

            <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-400">
              "Every book opens a new door to knowledge and imagination."
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4">
            {/* Books */}
            <div className="rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-white p-6 shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-4xl font-bold">{totalBooks}+</h3>
              <p className="mt-2 text-blue-100">Books Collection</p>
            </div>

            {/* Categories */}
            <div className="rounded-2xl bg-linear-to-br from-purple-500 to-fuchsia-600 text-white p-6 shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-4xl font-bold">{categories.length}</h3>
              <p className="mt-2 text-purple-100">Book Categories</p>
            </div>

            {/* Copies */}
            <div className="rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 text-white p-6 shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-4xl font-bold">{totalCopies}+</h3>
              <p className="mt-2 text-emerald-100">Available Copies</p>
            </div>

            {/* Access */}
            <div className="rounded-2xl bg-linear-to-br from-rose-500 to-pink-600 text-white p-6 shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="mt-2 text-rose-100">Access Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryStats;