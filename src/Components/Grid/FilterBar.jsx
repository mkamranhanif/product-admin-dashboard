import useStore from "../Store/useGridStore"

function FilterBar() {
    const selectedFilter = useStore((state) => state.selectedFilter)
    const setSelectedFilter = useStore((state) => state.setSelectedFilter)
    const setCategory = useStore((state) => state.setCategory)
    const sortConfig = useStore((state) => state.sortConfig)
    const setSortConfig = useStore((state) => state.setSortConfig)

    const handleSelect = (val) => {
        setSelectedFilter(val)
        setCategory(val)
    }

    /* <div>
            <div className="flex items-center justify-between bg-amber-400" >
                <button onClick={() => setSortConfig(sortConfig.key)} >Direction</button>
                <button onClick={() => { setSelectedFilter("men's clothing"); setCategory("men's clothing"); }} className={` py-1.5 px-3 rounded-3xl ${selectedFilter === "men's clothing" ? "bg-surface-tint text-white" : "bg-surface-bright text-on-surface"}`} >Men's Clothing</button>
                <button onClick={() => { setSelectedFilter("women's clothing"); setCategory("women's clothing"); }} className={`py-1.5 px-3 rounded-3xl ${selectedFilter === "women's clothing" ? "bg-surface-tint text-white" : "bg-surface-bright text-on-surface"}`} >Women's Clothing</button>
                <button onClick={() => { setSelectedFilter("electronics"); setCategory("electronics"); }} className={`py-1.5 px-3 rounded-3xl ${selectedFilter === "electronics" ? "bg-surface-tint text-white" : "bg-surface-bright text-on-surface"}`} >Electronics</button>
                <button onClick={() => { setSelectedFilter("jewelery"); setCategory("jewelery"); }} className={`py-1.5 px-3 rounded-3xl ${selectedFilter === "jewelery" ? "bg-surface-tint text-white" : "bg-surface-bright text-on-surface"}`} >Jewelery</bu */
    return (
        <div className="w-full">
            {/* Desktop View: Dropdown */}
            <div className="relative hidden w-48 md:block">
                <select
                    value={selectedFilter || "All"}
                    onChange={(e) => handleSelect(e.target.value)}
                    className="w-full cursor-pointer appearance-none rounded-md border border-[#eceef0] bg-white px-4 py-2 pr-10 text-[#191c1e] focus:border-[#004ac6] focus:outline-none"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                >
                    <option value="All">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#434655]">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>

            {/* Mobile View: Pills */}
            <div className="scrollbar-hide flex w-full items-center gap-2 overflow-x-auto pb-2 md:hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
                <button onClick={() => setSortConfig(sortConfig.key)} className="rounded-full border border-[#c3c6d7] bg-white px-4 py-1.5 text-[14px] whitespace-nowrap text-[#434655]">
                    Sort {sortConfig.direction === 'asc' ? '▲' : '▼'}
                </button>
                <button onClick={() => handleSelect("All")} className={`px-4 py-1.5 rounded-full border text-[14px] whitespace-nowrap transition-colors ${(!selectedFilter || selectedFilter === "All") ? 'bg-[#2563eb] border-[#2563eb] text-white' : 'bg-white border-[#c3c6d7] text-[#434655]'}`}>All Products</button>
                <button onClick={() => handleSelect("electronics")} className={`px-4 py-1.5 rounded-full border text-[14px] whitespace-nowrap transition-colors ${selectedFilter === "electronics" ? 'bg-[#2563eb] border-[#2563eb] text-white' : 'bg-white border-[#c3c6d7] text-[#434655]'}`}>Electronics</button>
                <button onClick={() => handleSelect("jewelery")} className={`px-4 py-1.5 rounded-full border text-[14px] whitespace-nowrap transition-colors ${selectedFilter === "jewelery" ? 'bg-[#2563eb] border-[#2563eb] text-white' : 'bg-white border-[#c3c6d7] text-[#434655]'}`}>Jewelery</button>
                <button onClick={() => handleSelect("men's clothing")} className={`px-4 py-1.5 rounded-full border text-[14px] whitespace-nowrap transition-colors ${selectedFilter === "men's clothing" ? 'bg-[#2563eb] border-[#2563eb] text-white' : 'bg-white border-[#c3c6d7] text-[#434655]'}`}>Men's</button>
                <button onClick={() => handleSelect("women's clothing")} className={`px-4 py-1.5 rounded-full border text-[14px] whitespace-nowrap transition-colors ${selectedFilter === "women's clothing" ? 'bg-[#2563eb] border-[#2563eb] text-white' : 'bg-white border-[#c3c6d7] text-[#434655]'}`}>Women's</button>
            </div>
        </div>
    )
}
export default FilterBar



