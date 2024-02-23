import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import Link from "next/link"
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import { useTranslation } from 'react-i18next';
import CircularProgress from '@mui/material/CircularProgress';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Cars({ filter }) {
    const {t}=useTranslation()
    const [cars, setCars] = useState([])
    const [loading,setLoading]=useState(true)
const [number,setNumber]=useState(8)
const [carCount,setCarcount]=useState()
useEffect(()=>{
    AOS.init()
},)
    useEffect(() => {
        const getCars = async () => {
            try {
                const item = filter === "Hamısı" ? "_type=='post'" : `_type=="post" && type=="${filter}"`
                const countQuery=`count(*[${item}])`
                const countResponse=await client.fetch(countQuery)
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
                setCarcount(countResponse)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getCars()
    }, [filter,number])
    const increaseNumber=()=>{
        setNumber(number+4)
    }
    return (
       <div className="pb-[100px] flex flex-col gap-[40px]">
        {loading ? <div className="w-full flex justify-center flex-col items-center gap-[15px] pt-[60px]"> <CircularProgress/><h1>Yüklənir</h1></div> : cars.length > 0 ?  <div className="grid w-full p-[10px] max-[415px]:p-[5px] max-[415px]:gap-[5px] place-items-center gap-[10px] overflow-hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-5 min-[1700px]:grid-cols-6">
            {cars.map(car => {
                return <Link href={`detail/${car._id}`} data-aos="fade-up" data-aos-duration="1500" className="w-full  items-center  rounded-[7px] max-w-[300px] h-[270px] shadow-md shadow-[#BEBEBE] flex flex-col">
    
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
            <h1 className="text-[18px] text-center">{t("Bu kateqoriyada maşın yoxdur")}</h1>
            </div>}
            {cars.length > 0 ? <div className="flex w-full justify-center items-center">
            <button onClick={increaseNumber} className={`bg-blue-600 text-white ${number>=carCount ? "hidden" : "flex"} flex items-center justify-center rounded-[5px] font-bold pl-2 pr-2 h-[40px] w-[120px]`}>{t("Daha çox")}</button>
            </div> : null}
       </div>)
}
export default Cars