import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="w-full px-8 py-4 flex items-center justify-between border-b border-b-orange-800 bg-orange-900">
        <Link href="/">
          <h1 className="text-4xl font-bold uppercase text-white">Pokedex</h1>
        </Link>
        <div className="flex items-center justify-center gap-4 text-white text-xs font-semibold tracking-wider uppercase">
          <Link href="/pokedex?page=1&size=20">Pokedex</Link>
          <Link href="/team">Team</Link>
          <Link href="/about">About me</Link>
        </div>
      </div>
    </nav>
  );
}
