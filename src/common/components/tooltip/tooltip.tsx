import React from "react";

interface Props {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: Props) => {
  return (
    <div className="group flex relative">
      {children}
      <span
        className="bg-gray-800 px-2 py-2 text-[8px] text-center font-bold tracking-wide uppercase first-letter:uppercase text-gray-100 rounded-md absolute bottom-5 left-0 
    opacity-0 transition-opacity group-hover:opacity-100"
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
