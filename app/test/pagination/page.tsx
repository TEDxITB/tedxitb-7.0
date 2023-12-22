"use client";

import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";

export default function PaginationTest() {
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);

  useEffect(() => {
    console.log(page);
  }, [page]);
  return (
    <main className="flex h-fit w-screen items-center justify-center bg-white">
      <div className="flex w-[800px] flex-col items-center justify-center">
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={15}
          variant="primary"
          control="icon"
        />
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={15}
          variant="rounded"
          control="text"
        />
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={15}
          variant="rounded"
          control="icon"
        />
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={15}
          variant="primary"
          control="text"
        />
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={15}
          variant="compact"
          control="icon"
        />
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={15}
          variant="compact"
          control="text"
        />
        <div className="h-[100px]" />
        <Pagination
          currentPage={page2}
          setPage={setPage2}
          totalPages={6}
          variant="primary"
          control="icon"
        />
        <Pagination
          currentPage={page2}
          setPage={setPage2}
          totalPages={6}
          variant="rounded"
          control="text"
        />
        <Pagination
          currentPage={page2}
          setPage={setPage2}
          totalPages={6}
          variant="rounded"
          control="icon"
        />
        <Pagination
          currentPage={page2}
          setPage={setPage2}
          totalPages={6}
          variant="primary"
          control="text"
        />
        <Pagination
          currentPage={page2}
          setPage={setPage2}
          totalPages={6}
          variant="compact"
          control="icon"
        />
        <Pagination
          currentPage={page2}
          setPage={setPage2}
          totalPages={6}
          variant="compact"
          control="text"
        />
      </div>
    </main>
  );
}