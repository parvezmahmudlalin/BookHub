import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  const {
    id,
    title,
    author,
    category,
    available_quantity,
    image_url,
  } = book;

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          ✍️ {author}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xs text-gray-500">Available</p>
            <p
              className={`font-semibold ${
                available_quantity > 5
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {available_quantity} Copies
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Status</p>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                available_quantity > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {available_quantity > 0
                ? "In Stock"
                : "Out of Stock"}
            </span>
          </div>
        </div>

        <Link href={`/books/${id}`}>
          <button className="w-full mt-5 py-3 rounded-xl font-semibold bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-xl">
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;