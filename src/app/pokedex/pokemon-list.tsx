import React, { Suspense } from "react";
import PokemonCard from "./pokemon-card";
import { Specie } from "@/common/types/pokemon";
import PokemonCardLoading from "./pokemon-card-loading";

interface Props {
  pokemons: Specie[];
}

export default function PokemonList({ pokemons }: Props) {
  return (
    <div className="mt-6 pt-[40px] h-[80vh] mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-scroll">
      {pokemons.map((pokemon) => (
        <Suspense key={pokemon.name} fallback={<PokemonCardLoading />}>
          <PokemonCard url={pokemon.url} />
        </Suspense>
      ))}
    </div>
  );
}
