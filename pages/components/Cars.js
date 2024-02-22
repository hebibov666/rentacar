import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
function Cars({ filter }) {
    const [cars, setCars] = useState([])
    useEffect(() => {
        const getCars = async () => {
            try {
                const item = filter === "Hamısı" ? "_type=='post'" : `_type=="post" && type=="${filter}"`
                const response = await client.fetch(
                    `*[${item}]{
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
    }, [filter])

    return (
        <div className="grid w-full p-[10px] max-[415px]:p-[3px] max-[415px]:gap-[5px] place-items-center gap-[10px] overflow-hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cars.map(car => {
                return <div className="w-full  rounded-[7px] max-w-[300px] h-[300px] shadow-md shadow-[#BEBEBE] flex flex-col">
                    <div className="w-full h-[200px] flex items-start justify-center">
                        <img src={car.images[0].asset.url} className="w-full rounded-t-[7px] h-full object-cover"></img>
                    </div>
                    <div className="flex flex-col pl-2 pt-2 lg:text-xl">
                        <p className="flex items-center text-black  font-bold">{car.model}</p>
                        <p className="flex items-center text-red-800  font-bold">{car.price + " ₼"}</p>
                    </div>
                </div>
            })}
        </div>)
}
export default Cars