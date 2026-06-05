function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    // <div className="mx-auto my-4 flex w-fit items-center justify-between gap-4">
    <div className="mb-20 flex w-full flex-row items-center justify-between p-4 md:mb-0 md:rounded-b-lg md:border-t md:border-[#eceef0] md:bg-white">

      {/* Left side info - Desktop */}
      <div className="hidden text-[14px] text-[#434655] md:block" style={{ fontFamily: 'Inter, sans-serif' }}>
        Showing page <span className="font-semibold text-[#191c1e]">{currentPage}</span> of <span className="font-semibold text-[#191c1e]">{totalPages}</span>
      </div>

      {/* Pagination controls */}
      <div className="flex w-full items-center justify-between md:w-auto md:gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          /*   className="rounded bg-gray-200 px-2 py-1 disabled:opacity-50"
               &lt; Prev</button>
      
             <span className="text-sm">Page {currentPage} of {totalPages}</span>*/
          className="flex items-center justify-center rounded-md border border-[#e0e3e5] bg-white px-4 py-2 text-[14px] font-medium text-[#434655] shadow-sm hover:bg-[#f7f9fb] disabled:opacity-50 md:border-[#eceef0] md:shadow-none"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <span className="mr-1 md:hidden">&lt;</span> Previous
        </button>

        {/* Mobile Page indicator */}
        <span className="text-[14px] text-[#434655] md:hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
          Page {currentPage} of {totalPages}
        </span>

        {/* Desktop Page numbers */}
        <div className="mx-1 hidden items-center gap-1 md:flex">
          <button className="flex h-8 w-8 items-center justify-center rounded bg-[#004ac6] text-[14px] font-medium text-white">{currentPage}</button>
          {currentPage < totalPages && (
            <button onClick={() => onPageChange(currentPage + 1)} className="flex h-8 w-8 items-center justify-center rounded text-[14px] font-medium text-[#434655] hover:bg-[#f7f9fb]">{currentPage + 1}</button>
          )}
          {currentPage < totalPages - 1 && (
            <span className="flex h-8 w-8 items-center justify-center text-[#434655]">...</span>
          )}
          {currentPage < totalPages - 1 && (
            <button onClick={() => onPageChange(totalPages)} className="flex h-8 w-8 items-center justify-center rounded text-[14px] font-medium text-[#434655] hover:bg-[#f7f9fb]">{totalPages}</button>
          )}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          /*className="rounded bg-gray-200 px-2 py-1 disabled:opacity-50"
      >Next &gt;</button> */
          className="flex items-center justify-center rounded-md border border-[#004ac6] bg-[#004ac6] px-4 py-2 text-[14px] font-medium text-white shadow-sm disabled:opacity-50 md:border-[#eceef0] md:bg-white md:text-[#434655] md:shadow-none md:hover:bg-[#f7f9fb]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Next <span className="ml-1 md:hidden">&gt;</span>
        </button>
      </div>
    </div>
  )
}
export default Pagination