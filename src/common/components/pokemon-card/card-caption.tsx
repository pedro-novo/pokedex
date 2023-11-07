import { Element } from "@/common/types/pokemon";
import React from "react";

interface Props {
  type: Element;
  height: number;
  weight: number;
}

const CardCaption = ({ type, height, weight }: Props) => {
  return (
    <div className="relative mt-3 h-3 mx-1 bg-yellow-300">
      <p className="text-gray-800 text-center font-bold italic text-[9px] first-letter:uppercase">
        {type} Pokémon. Height: {height}. Weight: {weight} lbs.
      </p>
      <div className="absolute top-[50%] -translate-y-[50%] right-0 w-0 h-0 border-t-[6px] border-b-[6px] border-b-transparent border-t-transparent border-r-[8px] border-r-blue-400"></div>
    </div>
  );
};

export default CardCaption;
