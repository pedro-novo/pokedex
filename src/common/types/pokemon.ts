export type Sprite = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export type Specie = {
  name: string;
  url: string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

export type Element =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

export type Type = {
  name: Element;
  uri: string;
};

export type Pokemon = {
  abilities: string[];
  base_experience: number;
  forms: string[];
  height: number;
  id: number;
  is_default: boolean;
  moves: string[];
  name: string;
  order: number;
  species: { name: string; url: string };
  sprites: Sprite;
  stats: Stat[];
  types: { slot: number; type: Type }[];
  weight: number;
};

export type PaginatedPokemon = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Specie[];
};

export type FlavorTextEntry = {
  flavor_text: string;
  language: { name: string; url: string };
  version: { name: string; url: string };
};

export type PokemonSpecies = {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  evolution_chain: { url: string };
  evolves_from_species: {
    name: string;
    url: string;
  };
  flavor_text_entries: FlavorTextEntry[];
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
};
