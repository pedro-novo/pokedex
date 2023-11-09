import { Element } from "@/common/types/pokemon";
import React from "react";
import Tooltip from "../tooltip/tooltip";

interface Props {
  type: Element;
  height: number;
  weight: number;
}

const CardCaption = ({ type, height, weight }: Props) => {
  const caption = `${type} Pokémon. Height: ${height}. Weight: ${weight} lbs.`;

  return (
    <div className="relative mt-3 h-3 mx-1 bg-yellow-300">
      <Tooltip text={caption}>
        <p className="px-2 text-gray-800 text-center font-bold italic text-[9px] first-letter:uppercase whitespace-nowrap text-ellipsis overflow-hidden">
          {caption}
        </p>
      </Tooltip>
    </div>
  );
};

export default CardCaption;
