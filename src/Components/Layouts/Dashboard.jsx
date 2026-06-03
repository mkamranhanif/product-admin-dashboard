import NavBar from "./Navbar"
import SideBar from "./Sidebar"
import DataGrid from "../Grid/DataGrid"

function DashBoard(){
    return(
        <div className="flex items-start w-full md:min-h-screen ">
            <div className=" hidden bg-lime-cream md:flex w-fit shrink-0">
            <SideBar/>
        </div>
        <div className="flex min-w-0 w-full flex-col">
            <NavBar/>
            <div className="p-10" >
                <DataGrid/>
             
            </div>
        </div>
       
        </div>
    )
}
export default DashBoard 