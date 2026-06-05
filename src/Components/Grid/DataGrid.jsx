import Table from "./Table";
import useStore from "../Store/useGridStore";
import { useEffect } from "react";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";

function DataGrid() {
    const data = useStore((state) => state.data)
    const isLoading = useStore((state) => state.isLoading)
    const error = useStore((state) => state.error)
    const selectedCategory = useStore((state) => state.selectedCategory)
    const fetchData = useStore((state) => state.fetchData)
    const searchQuery = useStore((state) => state.searchQuery)
    const setSearchQuery = useStore((state) => state.setSearchQuery)
    const sortConfig = useStore((state) => state.sortConfig)
    const pageNumber = useStore((state) => state.pageNumber)
    const itemsPerPage = useStore((state) => state.itemsPerPage)
    const setPage = useStore((state) => state.setPage)

    useEffect(() => {

        fetchData()

    }, [fetchData])





    const filteredData = data.filter((item) => {
        const filteredBySearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
        const filteredByCategory = selectedCategory === "All" || item.category === selectedCategory
        return filteredBySearch && filteredByCategory
    })

    const getSortValue = (item, key) => {
        if (key === "rating" || key === "rate") {
            return item.rating?.rate ?? item.rate ?? 0
        }
        if (key === "reviews" || key === "count") {
            return item.rating?.count ?? item.count ?? 0
        }
        return item[key]
    }

    const compareValues = (aValue, bValue) => {
        const isString = typeof aValue === "string" || typeof bValue === "string"
        if (isString) {
            return String(aValue ?? "").localeCompare(String(bValue ?? ""), undefined, {
                numeric: true,
                sensitivity: "base",
            })
        }
        const aNumber = typeof aValue === "number" ? aValue : Number(aValue) || 0
        const bNumber = typeof bValue === "number" ? bValue : Number(bValue) || 0
        return aNumber - bNumber
    }

    const sortedData = [...filteredData].sort((a, b) => {
        const aValue = getSortValue(a, sortConfig.key)
        const bValue = getSortValue(b, sortConfig.key)
        const result = compareValues(aValue, bValue)
        return sortConfig.direction === "asc" ? result : -result
    })

    const totalPages = Math.max(1, Math.ceil(sortedData.length / itemsPerPage))

    useEffect(() => {
        if (pageNumber < 1) {
            setPage(1)
            return
        }
        if (pageNumber > totalPages) {
            setPage(totalPages)
        }
    }, [pageNumber, totalPages, setPage])

    const startIndex = (pageNumber - 1) * itemsPerPage
    const pageRows = sortedData.slice(startIndex, startIndex + itemsPerPage)


    return (

        /*  <div>
            <div>
                {isLoading ? <p>the data is Loading, please wait...</p>
                    : <div>
                        <input type="text" onChange={(e) => { setSearchQuery(e.target.value) }} value={searchQuery} />
                        <FilterBar />
                        {filteredData ? <Table rows={pageRows} />
                            : <p>the data is not available</p>}
                    </div>}
                {error && <p>we have encountered this error: {error}</p>} */

        <div className="mx-auto w-full max-w-[1440px] md:px-6">
            <div className="md:rounded-lg md:border md:border-[#eceef0] md:bg-white md:shadow-sm">
                {isLoading ? (
                    <div className="flex items-center justify-center p-10">
                        <p className="font-medium text-[#434655]" style={{ fontFamily: 'Inter, sans-serif' }}>Loading data, please wait...</p>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        {/* Toolbar: Search & Filter */}
                        <div className="mb-4 flex flex-col gap-4 border-b border-[#eceef0] px-4 md:mb-0 md:flex-row md:items-center md:justify-between md:p-4">
                            {/* Search Input */}
                            <div className="relative w-full md:w-96">
                                <svg className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-[#434655]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    value={searchQuery}
                                    className="w-full rounded-md border border-[#eceef0] bg-white py-2 pr-4 pl-10 text-[#191c1e] placeholder-[#737686] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] focus:outline-none"
                                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                                />
                            </div>

                            {/* FilterBar handles its own mobile/desktop rendering */}
                            <div className="-mx-4 w-full px-4 md:mx-0 md:w-auto md:px-0">
                                <FilterBar isDesktop={true} />
                            </div>
                        </div>

                        {/* Mobile specific header above table */}
                        <div className="mb-2 flex items-center justify-between px-4 py-2 text-[#434655] md:hidden">
                            <span className="text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length} items
                            </span>
                            <button className="flex items-center gap-1 text-[14px] font-medium text-[#004ac6]">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                                Filters
                            </button>
                        </div>

                        {/* Table */}
                        <div className="w-full">
                            {filteredData ? <Table rows={pageRows} /> : <p className="p-4">the data is not available</p>}
                        </div>
                    </div>
                )}
                {error && (
                    <div className="m-4 rounded-md bg-[#ffdad6] p-4 text-[#93000a]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <p>Error: {error}</p>
                    </div>
                )}
            </div>

            {/* Pagination is kept outside the table card on mobile, but inside conceptually on desktop. We can just keep it as is and style it. */}
            <div className="mt-4 px-4 pb-10 md:mt-0 md:px-0">
                <Pagination currentPage={pageNumber} totalPages={totalPages} onPageChange={setPage} />
            </div>
        </div>
    )
}
export default DataGrid