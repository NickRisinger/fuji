'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Pagination({
  currentPage,
  perPage,
  pageCount,
  totalCount,
}: {
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = () => {
    let startPage: number, endPage: number;
    if (pageCount <= 4) {
      startPage = 1;
      endPage = pageCount;
    } else {
      // total pages is more than maxPagesShown...
      // calculating start and end pages
      const maxPagesShownBeforeCurrentPage = Math.floor(4 / 2);
      const maxPagesShownAfterCurrentPage = Math.ceil(4 / 2) - 1;
      if (currentPage <= maxPagesShownBeforeCurrentPage) {
        // current page is at the start of the pagination
        startPage = 1;
        endPage = 4;
      } else if (currentPage + maxPagesShownAfterCurrentPage >= pageCount) {
        // current page is at the end of the pagination
        startPage = pageCount - 4 + 1;
        endPage = pageCount;
      } else {
        // current page is somewhere in the middle of the pagination
        startPage = currentPage - maxPagesShownBeforeCurrentPage;
        endPage = currentPage + maxPagesShownAfterCurrentPage;
      }
    }

    return Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i,
    );
  };

  return (
    <div className="flex items-center justify-between bg-white p-3">
      <div className="flex items-center gap-x-4">
        {pages().map((item, index) => (
          <Link href={createPageURL(item)} key={index} className="">
            {item}
          </Link>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium text-[#282B2E]">
          Всего записей: {totalCount}
        </span>
      </div>
    </div>
  );
}
