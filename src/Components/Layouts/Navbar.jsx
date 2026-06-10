import { useState } from "react"
import bellIcon from "../../assets/ringing.png"
import userI from "../../assets/user.png"
import hamburgerIcon from "../../assets/hamburger.png"
import SideBar from "./Sidebar"

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex w-full flex-col bg-[#f7f9fb]">
            {/* Top Navigation Bar */}
            <nav className="flex items-center justify-between border-b border-[#eceef0] bg-white px-4 py-3">
                {/* Left side: Hamburger and Logo */}
                <div className="flex items-center gap-3">
                    <div className="relative flex items-center md:hidden">
                        <button onClick={handleIsOpen} className="flex items-center justify-center rounded p-1 hover:bg-gray-100">
                            <img className="h-6 w-6" src={hamburgerIcon} alt="Menu" />
                        </button>
                        {isOpen && (
                            <div className="absolute top-full left-0 z-20 mt-3 w-64 max-w-[80vw] overflow-hidden rounded-md border border-[#e0e3e5] bg-white shadow-md">
                                <SideBar />
                            </div>
                        )}
                    </div>
                    {/* DataFlow text */}
                    <span className="text-[24px] font-semibold tracking-[-0.01em] text-[#191c1e]" style={{ fontFamily: 'Inter, sans-serif' }}>DataFlow</span>
                </div>

                {/* Right side: Bell and User */}
                <div className="flex items-center gap-4">
                    {/* Notification Bell */}
                    <button className="relative flex items-center justify-center rounded-full p-1 hover:bg-gray-100">
                        <img className="h-5 w-5" src={bellIcon} alt="Notifications" />
                        {/* Red Dot Indicator */}
                        <span className="absolute top-1 right-1 h-2 w-2 rounded-full border-[1.5px] border-white bg-[#ba1a1a]"></span>
                    </button>
                    {/* User Avatar */}
                    <button className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full border border-[#c3c6d7]">
                        <img className="h-full w-full object-cover" src={userI} alt="user" />
                    </button>
                </div>
            </nav>

            {/* Page Header (Products/Inventory) */}
            <div className="px-4 pt-6 pb-4 md:px-6">
                <h1 className="mb-1 text-[28px] leading-[36px] font-semibold tracking-[-0.01em] text-[#191c1e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Products/Inventory
                </h1>
                <p className="text-[14px] leading-[20px] text-[#434655]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Manage your catalog, stock levels, and pricing.
                </p>
            </div>
        </div>
    )
}
export default NavBar