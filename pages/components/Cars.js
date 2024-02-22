import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import Link from "next/link"
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
function Cars({ filter }) {
    const [cars, setCars] = useState([])
const [number,setNumber]=useState(4)
    useEffect(() => {
        const getCars = async () => {
            try {
                const item = filter === "Hamısı" ? "_type=='post'" : `_type=="post" && type=="${filter}"`
                const response = await client.fetch(
                    `*[${item}] | order(_createdAt desc) [0...${number}]{
                _id,
                gearbox,
                model,
                marka,
                price,
                seat,
                year,
                fueltype,
                "images": images[]{
                  asset -> {
                      _id,
                      url
                  }
              }
              }`
                );
                setCars(response)
            } catch (error) {
                console.log(error)
            }
        }
        getCars()
    }, [filter,number])
    return (
       <div className="pb-[100px] flex flex-col gap-[40px]">
        {cars.length > 0 ?  <div className="grid w-full p-[10px] max-[415px]:p-[3px] max-[415px]:gap-[5px] place-items-center gap-[10px] overflow-hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cars.map(car => {
                return <Link href={`detail/${car._id}`} className="w-full items-center  rounded-[7px] max-w-[300px] h-[270px] shadow-md shadow-[#BEBEBE] flex flex-col">
    
                    <div className="w-full h-[200px] flex items-start justify-center">
                        <img src={car.images[0].asset.url} className="w-full rounded-t-[7px] h-full object-cover"></img>
                    </div>
                    <div className="flex w-full flex-col pl-2 pt-2 lg:text-xl">
                        <p className="flex items-center text-black  font-bold">{car.model}</p>
                        <p className="flex items-center text-red-800  font-bold">{car.price + " ₼"}</p>
                    </div>
               </Link>
            })}
        </div> : <div className="w-full text-black pt-[50px] flex flex-col items-center justify-center">
           <HourglassDisabledIcon className="text-[70px]"/>
            <h1 className="text-[18px] text-center">Bu kateqoriyada maşın yoxdur </h1>
            </div>}
            {cars.length > 0 ? <div className="flex w-full justify-center items-center">
            <button onClick={()=>{setNumber(number+4)}} className="bg-blue-600 text-white flex items-center justify-center pl-2 pr-2 h-[40px] w-[120px]">Daha çox</button>
            </div> : null}
       </div>)
}
export default Cars