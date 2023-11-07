import React from "react";
import PokemonList from "./pokemon-list";
import Pagination from "@/common/components/navbar/pagination/pagination";
import { BASE_URL } from "@/common/constants/constants";
import { PaginatedPokemon } from "@/common/types/pokemon";

async function getPokemon(offset: number, limit: number): Promise<PaginatedPokemon> {
  const res = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);

  return res.json();
}

export default async function Pokedex({ searchParams }: { searchParams: { page: string; size: string } }) {
  const page = Number(searchParams.page);
  const size = Number(searchParams.size);
  const offset = (page - 1) * size;

  const { results, count } = await getPokemon(offset, size);

  return (
    <section>
      <div className="mt-10 px-4 sm:px-8 lg:px-12">
        <h1 className="text-white text-4xl uppercase text-center font-bold">Pokedex</h1>
        <PokemonList pokemons={results} />
        <Pagination page={page} size={size} count={count} />
      </div>
    </section>
  );
}
