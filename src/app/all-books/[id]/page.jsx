"use client";

import React, { useEffect, useState, use } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import { toast } from "react-toastify";

const BookDetailsPage = ({ params }) => {
  const { id } = use(params); // ✅ use() দিয়ে unwrap করতে হবে

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(
          "https://book-hub-ashy-one.vercel.app/data.json"
        );
        const books = await res.json();
        const found = books.find((b) => b.id === parseInt(id));
        setBook(found);
      } catch (error) {
        toast.error("Failed to load book");
      }
    };

    fetchBook();
  }, [id]);

  const handleBorrow = async () => {
    if (book.available_quantity === 0) {
      toast.error("This book is unavailable!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `https://book-hub-ashy-one.vercel.app/api/books/${book.id}/borrow`,
        {
          method: "PATCH",
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Book borrowed successfully!");
        setBook((prev) => ({
          ...prev,
          available_quantity: prev.available_quantity - 1,
        }));
      } else {
        toast.error(data.message || "Borrow failed!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (!book) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading book...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start bg-white rounded-2xl shadow-lg p-6">

        {/* Image */}
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-5">
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            {book.category}
          </span>

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

          <Button
            color="primary"
            size="lg"
            className="w-full md:w-auto px-10"
            onPress={handleBorrow}
            isDisabled={book.available_quantity === 0 || loading}
          >
            {book.available_quantity === 0
              ? "Unavailable"
              : loading
              ? "Processing..."
              : "Borrow This Book"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;