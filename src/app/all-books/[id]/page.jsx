import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://book-hub-ashy-one.vercel.app/data.json");
  const books = await res.json();
  const book = books.find((b) => b.id === parseInt(id));

  return (
    <div className="max-w-6xl mx-auto  px-4 py-10 ">
      <div className="grid md:grid-cols-2 gap-10 items-start bg-white rounded-2xl shadow-lg p-6">
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-5">
          <div>
            <span className="bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
              {book.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold">{book.title}</h1>

          <p className="text-lg text-gray-600">By {book.author}</p>

          <div className="border-t border-b py-5">
            <h3 className="font-semibold text-lg mb-2">Description</h3>

            <p className="text-gray-700 leading-7">{book.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Availability</h3>

            <p className="text-green-600 font-medium">
              {book.available_quantity} copies left
            </p>
          </div>

          <Button color="primary" size="lg" className="w-full md:w-auto px-10">
            Borrow This Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
