import { useState } from "react"
import Cars from "./Cars"
function AllCars(){
    const [filter,setFilter]=useState("Hamısı")
    const types=[
        {
            type:"Hamısı",
            id:0
        },
        {
            type:"Biznes",
            id:1
        },
        {
            type:"Ekonom",
            id:2
        },
        {
            type:"Minivan",
            id:3
        },
        {
            type:"Vip",
            id:4
        }
    ]

    const filterCars=(type)=>{
        setFilter(type)
    }
   
    return(
<div id="cars" className="flex flex-col w-full gap-[20px]">
<div className="w-full flex justify-center">
                <ul className="flex gap-[10px] text-[18px] font-[500] pl-2 overflow-scroll pr-2 noscroll">
                    {types.map(type=>{
                        return <li onClick={()=>{filterCars(type.type)}} className={`text-xl transition-all duration-700 border-[1px] ${filter===type.type ? "bg-[#1E90FF] text-white" : "text-black"} border-[#1E90FF] pl-2 pr-2 h-[35px] flex items-center rounded-[5px]`}>{type.type}</li>
                    })}
                </ul>
            </div>
            <Cars filter={filter}/>
</div>
    )
}
export default AllCars