import { cn } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import _ from "lodash";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/dropdown";

const paginationVariants = cva(
  "flex h-[30px] w-[30px] md:h-[40px] md:w-[40px] sm:h-[35px] sm:w-[35px] items-center justify-center border border-black/10 font-anderson text-xs sm:text-base md:text-[20px]",
  {
    variants: {
      variant: {
        primary: "rounded-[5px]",
        rounded: "rounded-full",
        compact: "",
      },
      control: {
        icon: "",
        text: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      control: "icon",
    },
  }
);

interface PaginationProps extends VariantProps<typeof paginationVariants> {
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

interface PaginationItemProps extends VariantProps<typeof paginationVariants> {
  page?: number | string;
  type: PaginationItemType;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

interface PaginationDropdownProps {
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

interface PaginationItemsProps extends VariantProps<typeof paginationVariants> {
  currentPage: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

enum PaginationItemType {
  NEXT,
  PREV,
  DOTSLEFT,
  DOTSRIGHT,
  DEFAULT,
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  page,
  type,
  currentPage,
  setPage,
  totalPages,
  variant,
  control,
}) => {
  const handleOnNext = () => {
    if (currentPage < totalPages) setPage((prev) => prev + 1);
  };

  const handleOnPrev = () => {
    if (currentPage > 1) setPage((prev) => prev - 1);
  };

  const handelOnNumClick = (num: number) => {
    setPage(num);
  };

  const mid = Math.ceil(totalPages / 2);
  const handleOnDotsRightClick = () => {
    if (currentPage >= mid) {
      setPage(totalPages);
    } else if (currentPage < mid) {
      setPage(mid);
    }
  };

  const handleOnDotsLeftClick = () => {
    if (currentPage <= mid) {
      setPage(1);
    } else if (currentPage > mid) {
      setPage(mid);
    }
  };

  if (type === PaginationItemType.DEFAULT) {
    return (
      <button
        onClick={() => handelOnNumClick(page as number)}
        className={cn(
          paginationVariants({
            variant: variant,
            className:
              currentPage === page
                ? "bg-ted-red text-white hover:bg-ted-red/90"
                : "bg-white text-black hover:bg-gray-100",
          })
        )}
      >
        {page}
      </button>
    );
  }

  if (type === PaginationItemType.DOTSRIGHT) {
    return (
      <button
        onClick={handleOnDotsRightClick}
        className={cn(
          paginationVariants({
            variant: variant,
            className: "group bg-white text-black hover:bg-gray-100",
          })
        )}
      >
        <ChevronsRight className="hidden h-5 w-5 font-black group-hover:block" />
        <p className="block group-hover:hidden">...</p>
      </button>
    );
  }

  if (type === PaginationItemType.DOTSLEFT) {
    return (
      <button
        onClick={handleOnDotsLeftClick}
        className={cn(
          paginationVariants({
            variant: variant,
            className: "group bg-white text-black hover:bg-gray-100",
          })
        )}
      >
        <ChevronsLeft className="hidden h-5 w-5 font-black group-hover:block" />
        <p className="block group-hover:hidden">...</p>
      </button>
    );
  }

  if (type === PaginationItemType.PREV) {
    if (control === "icon") {
      return (
        <button
          onClick={handleOnPrev}
          className={cn(
            paginationVariants({
              variant: variant,
              className: "bg-white text-black hover:bg-gray-100",
            })
          )}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
      );
    }
    if (control === "text") {
      return (
        <button
          onClick={handleOnPrev}
          className={cn(
            paginationVariants({
              variant: variant,
              className:
                "mr-1 border-none bg-white px-2 font-[500] text-black hover:text-black/80 md:mr-2",
            })
          )}
        >
          Prev
        </button>
      );
    }
  }

  if (type === PaginationItemType.NEXT) {
    if (control === "icon") {
      return (
        <button
          onClick={handleOnNext}
          className={cn(
            paginationVariants({
              variant: variant,
              className: "bg-white text-black hover:bg-gray-100",
            })
          )}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      );
    }
    if (control === "text") {
      return (
        <button
          onClick={handleOnNext}
          className={cn(
            paginationVariants({
              variant: variant,
              className:
                "ml-1 border-none bg-white px-2 font-[500] text-black hover:text-black/80 md:ml-2",
            })
          )}
        >
          Next
        </button>
      );
    }
  }
};

const PaginationDropdown: React.FC<PaginationDropdownProps> = ({
  currentPage,
  totalPages,
  setPage,
}) => {
  const numArr = _.range(1, totalPages + 1);
  const handleClick = (value: string) => {
    setPage(parseInt(value));
  };
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Select
        onValueChange={handleClick}
        defaultValue={currentPage.toString()}
        value={currentPage.toString()}
      >
        <SelectTrigger
          className="h-[30px] w-[60px] font-anderson text-xs ring-0 hover:bg-gray-100 focus:ring-0 focus:ring-transparent focus:ring-offset-0 data-[state=open]:ring-0 sm:h-[35px] sm:w-[70px] sm:text-base md:h-[40px] md:w-[80px] md:text-[20px]"
          label="Label"
        >
          <SelectValue placeholder={currentPage} />
        </SelectTrigger>
        <SelectContent className="min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
          {numArr.map((num) => (
            <SelectItem
              value={`${num}`}
              key={num}
              className="flex flex-row items-center justify-between pl-12"
            >
              {num}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="font-anderson text-xs sm:text-base md:text-[20px]">
        {`of ${totalPages}`}
      </p>
    </div>
  );
};

const PaginationItems: React.FC<PaginationItemsProps> = ({
  currentPage,
  totalPages,
  setPage,
  variant,
  control,
}) => {
  let numArr;

  const totalPageNoInArray = 7 + 1;
  if (totalPageNoInArray >= totalPages) {
    numArr = _.range(1, totalPages + 1);
  } else {
    const leftSiblingsIndex = Math.max(currentPage - 1, 1);
    const rightSiblingsIndex = Math.min(currentPage + 1, totalPages);

    const showLeftDots = leftSiblingsIndex > 2;
    const showRightDots = rightSiblingsIndex < totalPages - 2;

    if (!showLeftDots && showRightDots) {
      const leftItemsCount = 3 + 2 * 1;
      const leftRange = _.range(1, leftItemsCount + 1);
      numArr = [...leftRange, "... ", totalPages];
    } else if (showLeftDots && !showRightDots) {
      const rightItemsCount = 3 + 2 * 1;
      const rightRange = _.range(
        totalPages - rightItemsCount + 1,
        totalPages + 1
      );
      numArr = [1, " ...", ...rightRange];
    } else {
      const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
      numArr = [1, " ...", ...middleRange, "... ", totalPages];
    }
  }

  return (
    <>
      {numArr.map((num, index) => {
        if (num === "... ") {
          return (
            <PaginationItem
              currentPage={currentPage}
              key={index}
              type={PaginationItemType.DOTSRIGHT}
              setPage={setPage}
              totalPages={totalPages}
              variant={variant}
              control={control}
            />
          );
        } else if (num === " ...") {
          return (
            <PaginationItem
              currentPage={currentPage}
              key={index}
              type={PaginationItemType.DOTSLEFT}
              setPage={setPage}
              totalPages={totalPages}
              variant={variant}
              control={control}
            />
          );
        } else {
          return (
            <PaginationItem
              currentPage={currentPage}
              key={index}
              type={PaginationItemType.DEFAULT}
              page={num}
              setPage={setPage}
              totalPages={totalPages}
              variant={variant}
              control={control}
            />
          );
        }
      })}
    </>
  );
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setPage,
  totalPages,
  variant,
  control,
}) => {
  return (
    <div className="flex h-fit w-fit items-center justify-center gap-1 bg-white px-2 py-2 sm:gap-2 md:gap-[10px]">
      <PaginationItem
        currentPage={currentPage}
        type={PaginationItemType.PREV}
        setPage={setPage}
        totalPages={totalPages}
        variant={variant}
        control={control}
      />
      {variant === "compact" ? (
        <PaginationDropdown
          currentPage={currentPage}
          setPage={setPage}
          totalPages={totalPages}
        />
      ) : (
        <PaginationItems
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setPage}
          variant={variant}
          control={control}
        />
      )}

      <PaginationItem
        currentPage={currentPage}
        type={PaginationItemType.NEXT}
        setPage={setPage}
        totalPages={totalPages}
        variant={variant}
        control={control}
      />
    </div>
  );
};

export default Pagination;
