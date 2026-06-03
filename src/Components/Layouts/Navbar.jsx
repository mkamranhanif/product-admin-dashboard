import { useState } from "react"
import heroImg from "../../assets/hero.png"
import userI from "../../assets/user.png"
import hamburgerIcon from "../../assets/hamburger.png"
import SideBar from "./Sidebar"
function NavBar(){

    const [isOpen, setIsOpen]= useState(false)

    const handleIsOpen = (v)=>{
        setIsOpen(!v)
    }
       

    

    return(

        
            
        <nav className="relative flex items-start justify-between gap-4 p-5 w-full max-w-full bg-neutral-50">
            <div className="min-w-0 flex-1">
                <div className="mb-7 md:hidden flex items-center gap-3">
                    <div className="relative">
                        <button onClick={()=>handleIsOpen(isOpen)}><img className="w-6 h-6" src={hamburgerIcon} alt="" /></button>
                        {isOpen && (
                            <div className="absolute left-0 top-full z-20 mt-3 w-64 max-w-[80vw] overflow-hidden rounded-md bg-lime-cream shadow">
                                <SideBar/>
                            </div>
                        )}
                    </div>
                    <p className="font-bold">Data Flow</p>
                </div>
                <p className="font-extrabold">Products/inventory</p>
                <p className="text-gray-600 text-xs ">manage your catalog, stock levels and pricing</p>
            </div>

            <div className="flex shrink-0 gap-3.5 md:items-center">
                <img className="w-5 h-5" src={heroImg} alt="User" />
                <button className="overflow-hidden bg-amber-400 rounded-2xl w-6 h-6"><img className="w-6 h-6" src={userI} alt="user" /></button>
            </div>

        </nav>
        
        
    )
}
export default NavBar