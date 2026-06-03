import Table from "./Table";
import useStore from "../Store/useGridStore";
import { useEffect } from "react";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";

function DataGrid(){
    const data= useStore((state)=> state.data)
    const isLoading= useStore((state)=> state.isLoading)
    const error= useStore((state)=> state.error)
    const active= useStore((state)=> state.active)
    const selectedCategory= useStore((state)=>state.selectedCategory)
    const fetchData = useStore((state)=> state.fetchData)
    const searchQuery = useStore((state)=>state.searchQuery)
    const setSearchQuery = useStore((state)=> state.setSearchQuery)

    useEffect(()=>{

        fetchData()

    },[fetchData])

    

    

    const filteredData= data.filter((item)=>{
        
        const filteredBySearch= item.title.toLowerCase().includes(searchQuery.toLowerCase())
        const filteredByCategory= selectedCategory === "All" || item.category === selectedCategory
        return filteredBySearch && filteredByCategory
    })

        


    
    

    return(
        <div>
            <div>
                {isLoading ? <p>the data is Loading, please wait...</p> 
                : <div>
                     <input type="text" onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery} />
                    <FilterBar/>
                {filteredData ?  <Table rows={filteredData}/> 
                :   <p>the data is not available</p> }
                </div> }
                {error && <p>we have encountered this error: {error}</p>}
                
           
            
           
            </div>
            
                
            <Pagination/> 
           
            
              
        </div>
        
       
    )
}
export default DataGrid