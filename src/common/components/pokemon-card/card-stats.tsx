import { Stat } from "@/common/types/pokemon";
import Image from "next/image";
import React from "react";
import Tooltip from "../tooltip/tooltip";

interface Props {
  stats: Stat[];
}

const CardStats = ({ stats }: Props) => {
  const statsIconRecord: Record<string, string> = {
    hp: "/health.png",
    attack: "/attack.png",
    defense: "/defense.png",
    speed: "/speed.png",
  };

  return (
    <div className="px-2 py-2 flex items-start justify-between gap-1">
      {stats.map((stat) => {
        if (stat.stat.name === "special-attack" || stat.stat.name === "special-defense") {
          return;
        }

        return (
          <Tooltip key={stat.stat.name} text={stat.stat.name}>
            <div className="flex gap-2">
              <Image
                src={statsIconRecord[stat.stat.name]}
                width={16}
                height={16}
                quality={100}
                alt={stat.stat.name}
                style={{ width: 16, height: 16 }}
              />
              <p className="text-[12px] font-semibold text-gray-700">{stat.base_stat}</p>
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default CardStats;
