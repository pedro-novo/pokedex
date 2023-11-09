import classNames from "classnames";
import React from "react";

interface Props {
  button: string | number;
  disabled: boolean;
  onClick: (button: string | number) => void;
}

const PageNumberButton = ({ button, disabled, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick(button)}
      disabled={disabled}
      className={classNames(
        "h-6 w-6 flex items-center justify-center rounded text-white text-xs",
        disabled ? "bg-[#93b1e1]" : "bg-[#3363ae]"
      )}
    >
      {button}
    </button>
  );
};

export default PageNumberButton;
