'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children,}) => {
  const pathName = usePathname();
  console.log(pathName);

  const isActive = href === pathName;
  return (
    <div >
      <Link href={href} className={`${isActive ? "border-b-2 border-b-purple-400" : ""}`}>{children}</Link>
    </div>
  );
};

export default NavLink;