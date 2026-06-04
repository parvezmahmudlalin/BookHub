import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch("http://localhost:3000/category.json");
  const categories = await res.json();

  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.slug === "all" ? "?" : `?category=${category.slug}`}
        >
          <span className="px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Category;