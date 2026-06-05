import NavBar from "./Navbar"
import SideBar from "./Sidebar"
import DataGrid from "../Grid/DataGrid"

function DashBoard() {
    return (
        <div className="flex w-full items-start md:min-h-screen ">
            <div className="hidden w-fit shrink-0 md:flex">
                <SideBar />
            </div>
            <div className="flex w-full min-w-0 flex-col">
                <NavBar />
                <div className="p-10" >
                    <DataGrid />

                </div>
            </div>

        </div>
    )
}
export default DashBoard 