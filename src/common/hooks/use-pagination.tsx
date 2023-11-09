import { useRouter } from "next/navigation";

interface Props {
  page: number;
  size: number;
  count: number;
}

export const usePagination = ({ page, size, count }: Props) => {
  const router = useRouter();
  const numberOfPages = Math.ceil(count / size);
  const pageButtons = [];
  const maxVisiblePages = 3;

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

  const onPageNumberClick = (button: string | number) => {
    if (button === page) {
      return;
    }
    router.push(`/pokedex?page=${button}&size=${size}`);
  };

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

  return {
    numberOfPages,
    pageButtons,
    onPrevClick,
    onNextClick,
    onPageNumberClick,
  };
};
