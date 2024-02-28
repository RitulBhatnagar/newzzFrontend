import React from 'react';
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
// } from "@/components/ui/pagination";
import { Pagination } from '@nextui-org/react';

interface PaginationProps {
  totalPages: number; 
  handlePageChange : (pageNumber : number) => void
}

const PaginationComp: React.FC<PaginationProps> = ({ totalPages, handlePageChange }) => {
  // Create an array with the total number of pages
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    // <Pagination className='font-bold text-4xl'>
    //   <PaginationContent>
    //     {pagesArray.map((page, index) => (
    //       <PaginationItem key={index}>
    //         <PaginationLink onClick={() => handlePageChange(page)}>{page}</PaginationLink>
    //       </PaginationItem>
    //     ))}
    //   </PaginationContent>
    // </Pagination>
    <div className=''>
      <Pagination total={totalPages} onChange={handlePageChange} />
    </div>

  );
};

export default PaginationComp;
