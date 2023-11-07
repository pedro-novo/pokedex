import { typeRecord } from "@/common/constants/constants";
import { Pokemon, PokemonSpecies } from "@/common/types/pokemon";
import classNames from "classnames";
import Image from "next/image";

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

  const statsIconRecord: Record<string, string> = {
    hp: "/health.png",
    attack: "/attack.png",
    defense: "/defence.png",
    speed: "/speed.png",
  };

  const englishDescription = pokemonSpecies.flavor_text_entries.find((text) => text.language.name === "en");

  return (
    <div
      className={classNames(
        "w-64 h-96 py-2 px-2 rounded border-8 border-yellow-300 translate-y-0 delay-50 transition-all hover:-translate-y-5 hover:scale-110",
        colorRecord[pokemonSpecies.color.name || "gray"]
      )}
    >
      <div className="flex items-center justify-between">
        <h6 className="text-gray-800 text-sm font-bold first-letter:uppercase">{pokemon.name}</h6>
        <div className="flex items-center justify-center gap-2">
          <h6 className="text-red-800 text-xs font-bold uppercase">{pokemon.stats[0].base_stat} HP</h6>
          <div className="text-[10px]">
            <Image
              src={typeRecord[pokemon.types[0].type.name]}
              width={18}
              height={18}
              quality={100}
              alt={pokemon.types[0].type.name}
            />
          </div>
        </div>
      </div>
      <div className="mt-1 w-full h-32 bg-green-200 border-[6px] border-yellow-300 shadow">
        <div className="flex items-center justify-center">
          {pokemon.sprites.front_default ? (
            <Image src={pokemon.sprites.front_default} width={120} height={120} quality={100} alt={pokemon.name} />
          ) : null}
        </div>
      </div>
      <div className="mt-3 h-3 mx-1 bg-yellow-300">
        <p className="text-gray-800 text-center font-bold italic text-[9px] first-letter:uppercase">
          {pokemon.types[0].type.name} Pokémon. Height: {pokemon.height}. Weight: {pokemon.weight} lbs.
        </p>
      </div>
      <div className="mt-2 mx-2">
        <p className="text-grey-800 text-[10px] text-left font-medium">
          {englishDescription?.flavor_text || `We don't know much about ${pokemon.name}`}
        </p>
      </div>
      <div className="mt-2 border border-gray-800"></div>
      <div className="px-2 py-2 flex items-start justify-between gap-1">
        {pokemon.stats.map((stat) => {
          if (stat.stat.name === "special-attack" || stat.stat.name === "special-defense") {
            return;
          }

          return (
            <div key={stat.stat.name} className="flex gap-2">
              <Image
                src={statsIconRecord[stat.stat.name]}
                width={16}
                height={16}
                quality={100}
                alt={stat.stat.name}
                style={{ width: 16, height: 16 }}
              />
              <p className="text-[12px] font-semibold">{stat.base_stat}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-1 border border-gray-800"></div>
      <div className="mt-2 flex items-start justify-center flex-col gap-1">
        <div className="flex gap-2">
          <Image src="/happy-pokemon.png" width={18} height={18} quality={100} alt="base hapiness" />
          <p className="text-[12px] font-semibold">{pokemonSpecies.base_happiness || 0}</p>
        </div>
        <div className="flex gap-2">
          <Image src="/pokeball.png" width={18} height={18} quality={100} alt="base hapiness" className="w-4 h-4" />
          <p className="text-[12px] font-semibold">{pokemonSpecies.capture_rate || 0}%</p>
        </div>
      </div>

      <div>{/* HABILITIES */}</div>
    </div>
  );
}
