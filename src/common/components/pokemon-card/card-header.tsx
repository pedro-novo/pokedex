import React from "react";
import Tooltip from "../tooltip/tooltip";
import Image from "next/image";
import { typeRecord } from "@/common/constants/constants";
import { Element } from "@/common/types/pokemon";

interface Props {
  name: string;
  type: Element;
  hp: number;
}

const CardHeader = ({ name, type, hp }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h6 className="text-gray-800 text-sm font-bold first-letter:uppercase">{name}</h6>
      <div className="flex items-center justify-center gap-2">
        <h6 className="text-red-800 text-xs font-bold uppercase">{hp} HP</h6>
        <div className="text-[10px]">
          <Tooltip text={type}>
            <Image src={typeRecord[type]} width={18} height={18} quality={100} alt={type} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
