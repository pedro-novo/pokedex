import { Pokemon, PokemonSpecies } from "@/common/types/pokemon";
import classNames from "classnames";
import Image from "next/image";
import CardHeader from "./card-header";
import CardImage from "./card-image";
import CardCaption from "./card-caption";
import CardDescription from "./card-description";
import CardDivider from "./card-divider";
import CardStats from "./card-stats";

async function getPokemonByName(url: string): Promise<Pokemon> {
  const res = await fetch(url);

  return res.json();
}

async function getPokemonSpecies(url: string): Promise<PokemonSpecies> {
  const res = await fetch(url);

  return res.json();
}

interface Props {
  url: string;
}

export default async function PokemonCard({ url }: Props) {
  const pokemon = await getPokemonByName(url);
  const pokemonSpecies = await getPokemonSpecies(pokemon.species.url);

  const colorRecord: Record<string, string> = {
    red: "bg-red-300",
    green: "bg-green-300",
    gray: "bg-orange-300",
    brown: "bg-gray-200",
    white: "bg-gray-200",
    black: "bg-gray-200",
    yellow: "bg-yellow-200",
    blue: "bg-cyan-300",
    purple: "bg-purple-300",
    pink: "bg-rose-200",
  };

  const englishDescription = pokemonSpecies.flavor_text_entries.find((text) => text.language.name === "en");

  return (
    <div
      className={classNames(
        "w-56 h-80 py-2 px-2 rounded border-8 border-yellow-300 translate-y-0 delay-50 transition-all hover:-translate-y-5 hover:scale-110",
        colorRecord[pokemonSpecies.color.name || "gray"]
      )}
    >
      <CardHeader name={pokemon.name} hp={pokemon.stats[0].base_stat} type={pokemon.types[0].type.name} />

      <CardImage name={pokemon.name} image={pokemon.sprites.front_default} />

      <CardCaption type={pokemon.types[0].type.name} weight={pokemon.weight} height={pokemon.height} />

      <CardDescription name={pokemon.name} description={englishDescription?.flavor_text} />

      <CardDivider />

      <CardStats stats={pokemon.stats} />

      <CardDivider />

      {/* <div className="mt-2 flex items-start justify-center flex-col gap-1">
        <div className="flex gap-2">
          <Image src="/happy-pokemon.png" width={18} height={18} quality={100} alt="base hapiness" />
          <p className="text-[12px] font-semibold">{pokemonSpecies.base_happiness || 0}</p>
        </div>
        <div className="flex gap-2">
          <Image src="/pokeball.png" width={18} height={18} quality={100} alt="base hapiness" className="w-4 h-4" />
          <p className="text-[12px] font-semibold">{pokemonSpecies.capture_rate || 0}%</p>
        </div>
      </div> */}

      <div>{/* HABILITIES */}</div>
    </div>
  );
}
