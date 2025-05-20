import React from "react";
import { Button } from "@/components/ui/button"; // Adjust to your own Button import

function Pagination({ currentPage, totalPages, onPageChange }) {
  // We'll build an array of pages (including '...' as needed).
  const pagesToShow = [];

  // If totalPages <= 5, just show all pages
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
  } else {
    // More than 5 pages => we truncate with ...
    // If currentPage is near the beginning
    if (currentPage <= 3) {
      pagesToShow.push(1, 2, 3, 4, "...", totalPages);
    }
    // If currentPage is near the end
    else if (currentPage >= totalPages - 2) {
      pagesToShow.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    }
    // Otherwise, show a few pages around currentPage
    else {
      pagesToShow.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Previous Button */}
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {/* Page Number Buttons */}
      {pagesToShow.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <Button
            key={page}
            variant={page === currentPage ? "default" : "outline"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        )
      )}

      {/* Next Button */}
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
