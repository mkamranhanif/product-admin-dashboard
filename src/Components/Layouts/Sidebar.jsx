import Home from "../../assets/home.png"
import Overview from "../../assets/research.png"
import Products from "../../assets/box.png"
import Customers from "../../assets/users.png"

function SideBar() {
    return (
        <div className="flex h-full w-64 flex-col border-r border-[#eceef0] bg-[#f7f9fb] py-6 md:min-h-screen">
            {/* Logo Section - Visible on Desktop */}
            <div className="mb-8 hidden flex-col px-6 md:flex">
                <div className="mb-1 flex items-center gap-2">
                    <div className="rounded bg-[#004ac6] p-1 text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                    </div>
                    <span className="text-[20px] font-bold tracking-tight text-[#191c1e]" style={{ fontFamily: 'Inter, sans-serif' }}>DataFlow</span>
                </div>
                <span className="pl-9 text-[12px] font-medium text-[#434655]" style={{ fontFamily: 'Inter, sans-serif' }}>Admin Console</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-1 px-4">
                <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[#434655] transition-colors hover:bg-[#eceef0] hover:text-[#191c1e]">
                    <img className="h-5 w-5 opacity-70" src={Overview} alt="Overview" />
                    <span className="text-[14px] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Overview</span>
                </a>

                {/* Active Link */}
                <a href="#" className="flex items-center gap-3 rounded-md bg-[#dbe1ff] px-3 py-2.5 font-semibold text-[#003ea8] transition-colors">
                    <img className="h-5 w-5" src={Products} alt="Products/Inventory" style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(2815%) hue-rotate(213deg) brightness(91%) contrast(105%)' }} />
                    <span className="text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>Products/Inventory</span>
                </a>

                <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[#434655] transition-colors hover:bg-[#eceef0] hover:text-[#191c1e]">
                    <img className="h-5 w-5 opacity-70" src={Customers} alt="Customers" />
                    <span className="text-[14px] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Customers</span>
                </a>
            </nav>

            {/* Bottom Settings Link */}

        </div>
    )
}

export default SideBar