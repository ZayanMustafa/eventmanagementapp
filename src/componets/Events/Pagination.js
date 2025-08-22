'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animation';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Pagination({ currentPage, totalPages, hasNextPage, hasPrevPage }) {
  // Generate page numbers with ellipsis for many pages
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first page
      pages.push(1);
      
      // Calculate start and end of visible page range
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        endPage = 4;
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      // Always include last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <motion.div {...fadeIn} className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      <Link
        href={hasPrevPage ? `/events?page=${currentPage - 1}` : '#'}
        className={`flex items-center px-3 py-2 rounded-lg ${
          hasPrevPage
            ? 'bg-surface text-primary hover:bg-gray-800 hover:text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        onClick={(e) => !hasPrevPage && e.preventDefault()}
      >
        <FiChevronLeft className="mr-1" />
        Previous
      </Link>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={`/events?page=${page}`}
            className={`px-4 py-2 rounded-lg ${
              currentPage === page
                ? 'bg-primary text-white font-semibold'
                : 'bg-surface text-primary hover:bg-gray-800 hover:text-white'
            }`}
          >
            {page}
          </Link>
        )
      ))}

      {/* Next Button */}
      <Link
        href={hasNextPage ? `/events?page=${currentPage + 1}` : '#'}
        className={`flex items-center px-3 py-2 rounded-lg ${
          hasNextPage
            ? 'bg-surface text-primary hover:bg-gray-800 hover:text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        onClick={(e) => !hasNextPage && e.preventDefault()}
      >
        Next
        <FiChevronRight className="ml-1" />
      </Link>
    </motion.div>
  );
}