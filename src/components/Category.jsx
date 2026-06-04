import Link from 'next/link';
import React from 'react';
import { Button } from "@heroui/react";
const Category = async () => {
    const res = await fetch("http://localhost:3000/category.json");
    const categories = await res.json();

    return (
        <div>
            {
                categories.map((category) => (
                    <Link key={category.id} href={`/category?name=${category.name.toLowerCase()}`}>
                       " "

                        <Button variant="outline" size="sm">
            {category.name}
          </Button>
                    </Link>
                ))
            }
        </div>
    );
};

export default Category;