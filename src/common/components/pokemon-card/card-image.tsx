import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  image?: string;
}

const CardImage = ({ name, image }: Props) => {
  return (
    <div className="mt-1 w-full h-28 bg-green-200 border-[5px] border-yellow-300 shadow">
      <div className="flex items-center justify-center">
        {image ? <Image src={image} width={120} height={120} quality={100} alt={name} /> : null}
      </div>
    </div>
  );
};

export default CardImage;
