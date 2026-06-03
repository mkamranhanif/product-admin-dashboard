function Table({rows}){
    return(
        <div className="w-full border border-gray-400 bg-white shadow-sm">
        <table className=" w-full text-center text-sm">
             <thead   className= " border-neutral-200 bg-[#d8dadcs] text-neutral-700 font-normal">
              <tr className="">
               <th className="p-1.5" >ID</th>
              <th>Title</th>
               <th>Description</th>
               <th>Price</th>
               <th>Reviews</th>
               </tr>
             </thead>
             <tbody className="  divide-y divide-slate-400">
           {rows.map((row)=>(
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.price}</td>
                    <td>{row.description}</td>
                    <td>{row.category}</td>
                    <td>{row.rate}</td>
                </tr>
        
                ))}
           
           </tbody>
        </table>    
        </div>

    )
}
export default Table