import React, { Suspense } from "react";
import PokemonCard from "@/common/components/pokemon-card/pokemon-card";
import { Specie } from "@/common/types/pokemon";
import PokemonCardLoading from "@/common/components/pokemon-card/pokemon-card-loading";

interface Props {
  pokemons: Specie[];
}

export default function PokemonList({ pokemons }: Props) {
  return (
    <div className="mt-12 mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {pokemons.map((pokemon) => (
        <Suspense key={pokemon.name} fallback={<PokemonCardLoading />}>
          <PokemonCard url={pokemon.url} />
        </Suspense>
      ))}
    </div>
  );
}
