import React from "react";

interface Props {
  name: string;
  description?: string;
}

const CardDescription = ({ name, description }: Props) => {
  return (
    <div className="h-12 mt-2 mx-2 overflow-hidden">
      <p className="text-grey-800 text-[10px] text-left font-medium">
        {description || `We don't know much about ${name}`}
      </p>
    </div>
  );
};

export default CardDescription;
