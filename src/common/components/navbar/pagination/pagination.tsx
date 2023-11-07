"use client";
import React from "react";
import { useRouter } from "next/navigation";
import RightArrow from "@/common/svg/right-arrow";
import LeftArrow from "@/common/svg/left-arrow";

interface Props {
  page: number;
  size: number;
  count: number;
}

const Pagination = ({ page, size, count }: Props) => {
  const router = useRouter();
  const numberOfPages = Math.ceil(count / size);

  const onPrevClick = () => {
    if (page <= 1) {
      return;
    }
    router.push(`/pokedex?page=${page - 1}&size=${size}`);
  };

  const onNextClick = () => {
    if (page >= numberOfPages) {
      return;
    }
    router.push(`/pokedex?page=${page + 1}&size=${size}`);
  };

  const pageButtons = [];
  const maxVisiblePages = 3;

  const start = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  const end = Math.min(numberOfPages, start + maxVisiblePages - 1);

  if (start > 1) {
    pageButtons.push(1);
    if (start > 2) {
      pageButtons.push("...");
    }
  }

  for (let i = start; i <= end; i++) {
    pageButtons.push(i);
  }

  if (end < numberOfPages) {
    if (end < numberOfPages - 1) {
      pageButtons.push("...");
    }
    pageButtons.push(numberOfPages);
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <div>
        <p className="text-white text-xs">
          Showing <span className="font-bold">{page * size + 1}</span> of <span className="font-bold">{count}</span>{" "}
          Pokémons
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button onClick={onPrevClick} disabled={page <= 1} className="p-2 bg-orange-500 rounded-sm">
          <LeftArrow />
        </button>
        {pageButtons.map((button, idx) => (
          <React.Fragment key={idx}>
            {button === "..." ? (
              <span className="text-white" key={idx}>
                ...
              </span>
            ) : (
              <button
                onClick={() => {
                  if (button !== page) {
                    router.push(`/pokedex?page=${button}&size=${size}`);
                  }
                }}
                className={`h-6 w-6 flex items-center justify-center rounded bg-orange-500 text-white text-xs ${
                  button === page ? "bg-blue-500" : ""
                }`}
                key={idx}
              >
                {button}
              </button>
            )}
          </React.Fragment>
        ))}
        <button disabled={page >= numberOfPages} onClick={onNextClick} className="p-2 bg-orange-500 rounded-sm">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
