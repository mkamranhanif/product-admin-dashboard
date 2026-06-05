import useStore from "../Store/useGridStore"

function Table({ rows }) {
    const setSortConfig = useStore((state) => state.setSortConfig)
    const sortConfig = useStore((state) => state.sortConfig)

    const getIndicator = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "asc" ? " ▲" : " ▼"
        }
        return ""
    }

    return (
        <div className="w-full md:rounded-lg md:border md:border-[#eceef0] md:bg-white">
            <table className="block w-full text-left font-['Inter'] md:table md:border-collapse">
                <thead className="hidden border-b border-[#eceef0] bg-[#f7f9fb] md:table-header-group">
                    <tr>
                        <th className="cursor-pointer px-4 py-3 text-[12px] font-semibold text-[#434655] uppercase" onClick={() => setSortConfig("id")}>ID{getIndicator("id")}</th>
                        <th className="cursor-pointer px-4 py-3 text-[12px] font-semibold text-[#434655] uppercase" onClick={() => setSortConfig("title")}>Title{getIndicator("title")}</th>
                        <th className="cursor-pointer px-4 py-3 text-[12px] font-semibold text-[#434655] uppercase" onClick={() => setSortConfig("price")}>Price{getIndicator("price")}</th>
                        <th className="cursor-pointer px-4 py-3 text-[12px] font-semibold text-[#434655] uppercase" onClick={() => setSortConfig("description")}>Description{getIndicator("description")}</th>
                        <th className="cursor-pointer px-4 py-3 text-[12px] font-semibold text-[#434655] uppercase" onClick={() => setSortConfig("category")}>Category{getIndicator("category")}</th>
                        <th className="cursor-pointer px-4 py-3 text-[12px] font-semibold text-[#434655] uppercase" onClick={() => setSortConfig("rate")}>Rating{getIndicator("rate")}</th>
                    </tr>
                </thead>

                <tbody className="block px-4 md:table-row-group md:divide-y md:divide-[#eceef0] md:px-0">
                    {rows.map((row) => {
                        return (
                            <tr key={row.id} className="relative mb-4 flex flex-col rounded-md border-y border-r border-l-4 border-[#e0e3e5] border-l-[#004ac6] bg-white p-4 shadow-sm transition-colors hover:bg-[#f7f9fb] md:mb-0 md:table-row md:rounded-none md:border-0 md:p-0 md:shadow-none">
                                {/* ID */}
                                <td className="order-3 mb-1 text-[12px] text-[#434655] md:mb-0 md:table-cell md:px-4 md:py-4 md:text-[14px]">
                                    <span className="font-semibold md:hidden">ID: </span>{row.id}
                                </td>

                                {/* Title */}
                                <td className="order-1 mb-2 md:mb-0 md:table-cell md:px-4 md:py-4">
                                    <div className="line-clamp-2 text-[16px] font-semibold text-[#191c1e] md:line-clamp-1 md:text-[14px] md:font-medium">
                                        {row.title}
                                    </div>
                                </td>

                                {/* Price */}
                                <td className="order-5 mt-2 flex items-center justify-between border-t border-[#eceef0] pt-3 md:mt-0 md:table-cell md:border-t-0 md:border-none md:px-4 md:py-4 md:pt-4">
                                    <span className="text-[20px] font-bold text-[#191c1e] md:text-[14px] md:font-normal">
                                        ${Number(row.price).toFixed(2)}
                                    </span>
                                </td>

                                {/* Description */}
                                <td className="order-4 mb-2 md:mb-0 md:table-cell md:px-4 md:py-4">
                                    <div className="line-clamp-2 text-[12px] text-[#434655] md:line-clamp-1 md:text-[14px]">
                                        {row.description}
                                    </div>
                                </td>

                                {/* Category */}
                                <td className="order-2 mb-3 md:mb-0 md:table-cell md:px-4 md:py-4">
                                    <span className="inline-block rounded border border-[#e0e3e5] bg-[#f2f4f6] px-2.5 py-1 text-[12px] text-[#434655] capitalize md:border-none md:bg-transparent md:p-0 md:text-[14px]">
                                        {row.category}
                                    </span>
                                </td>

                                {/* Rating */}
                                <td className="absolute top-4 right-4 order-2 text-[12px] text-[#434655] md:static md:table-cell md:px-4 md:py-4 md:text-[14px]">
                                    <div className="flex items-center gap-1 rounded-full bg-[#fff8e1] px-2 py-0.5 font-semibold md:bg-transparent md:p-0 md:font-normal">
                                        <span className="text-amber-500">★</span> {row.rating?.rate || row.rate || 0}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table