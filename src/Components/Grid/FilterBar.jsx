import useStore from "../Store/useGridStore"

function FilterBar(){

    const selectedFilter=  useStore((state)=> state.selectedFilter)
    const setSelectedFilter = useStore((state)=> state.setSelectedFilter)
    const setCategory = useStore((state)=> state.setCategory)

    return(
        <div>
            <div className="flex items-center justify-between bg-amber-400" >
                <button onClick={()=> {setSelectedFilter("men's clothing"); setCategory("men's clothing") ;}}  className={` py-1.5 px-3 rounded-3xl ${selectedFilter=== "men's clothing"?  "bg-surface-tint text-white" : "bg-surface-bright text-on-surface"}`} >Men's Clothing</button>
                <button onClick={ ()=>{setSelectedFilter("women's clothing"); setCategory("women's clothing") ;}}  className={`py-1.5 px-3 rounded-3xl ${selectedFilter=== "women's clothing"?  "bg-surface-tint text-white" : "bg-surface-bright text-on-surface"}`} >Women's Clothing</button>
                <button onClick={ ()=>{setSelectedFilter("electronics"); setCategory("electronics") ;}}  className={`py-1.5 px-3 rounded-3xl ${selectedFilter=== "electronics"?  "bg-surface-tint text-white" : "bg-surface-bright text-on-surface"}`} >Electronics</button>
                <button onClick={ ()=>{setSelectedFilter("jewelery"); setCategory("jewelery") ;}}  className={`py-1.5 px-3 rounded-3xl ${selectedFilter=== "jewelery"?  "bg-surface-tint text-white" : "bg-surface-bright text-on-surface"}`} >Jewelery</button>
            </div>
        </div>
    )
}
export default FilterBar


 
