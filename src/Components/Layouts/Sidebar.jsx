import Home from "../../assets/home.png"
import Overview from "../../assets/research.png"
import Products from "../../assets/box.png"
import Customers from "../../assets/users.png"
function SideBar(){
    return(
        <div className=" w-fit md:h-screen">
            <p className="font-extrabold m-5 hidden md:block" >Data Flow</p>
            <ul className="pl-5  ">
                <li className="flex pb-3 gap-2" ><img className="w-5 h-5 " src={Home} alt="" />Home</li>
                <li className="flex pb-3 gap-2"><img className="w-5 h-5 flex" src={Overview} alt="" /> Overview</li>
                <li className="flex pb-3 gap-2 "><img className="w-5 h-5 flex" src={Products} alt="" /> Products/Inventory</li>
                <li className="flex gap-2"> <img className="w-5 h-5 flex" src={Customers} alt="" /> Customers</li>
            </ul>
        </div>
    )
}
export default SideBar