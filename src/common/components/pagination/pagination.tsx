"use client";
import React from "react";
import { useRouter } from "next/navigation";
import RightArrow from "@/common/svg/right-arrow";
import LeftArrow from "@/common/svg/left-arrow";
import classNames from "classnames";
import Ellipsis from "./ellipsis";
import { usePagination } from "@/common/hooks/use-pagination";
import PageNumberButton from "./page-number-button";

interface Props {
  page: number;
  size: number;
  count: number;
}

const Pagination = ({ page, size, count }: Props) => {
  const { numberOfPages, pageButtons, onNextClick, onPageNumberClick, onPrevClick } = usePagination({
    page,
    size,
    count,
  });

  return (
    <div className="mt-6 mx-auto max-w-7xl flex items-center justify-between gap-2">
      <div>
        <p className="text-gray-700 text-xs">
          Showing <span className="font-bold">{page * size}</span> of <span className="font-bold">{count}</span>{" "}
          Pokémons
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={onPrevClick}
          disabled={page <= 1}
          className={classNames("p-2 rounded-sm", page <= 1 ? "bg-[#93b1e1]" : "bg-[#3363ae]")}
        >
          <LeftArrow />
        </button>
        {pageButtons.map((button, idx) => (
          <React.Fragment key={idx}>
            {button === "..." ? (
              <Ellipsis key={idx} />
            ) : (
              <PageNumberButton
                key={idx}
                disabled={page === button}
                button={button}
                onClick={() => onPageNumberClick(button)}
              />
            )}
          </React.Fragment>
        ))}
        <button
          disabled={page >= numberOfPages}
          onClick={onNextClick}
          className={classNames("p-2 rounded-sm", page >= numberOfPages ? "bg-[#93b1e1]" : "bg-[#3363ae]")}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
