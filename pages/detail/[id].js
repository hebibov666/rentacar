import { ArrowBackIos} from "@mui/icons-material"
import { useRouter } from "next/router"
import { client } from "@/sanity/lib/client"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,EffectCube,Autoplay,Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube'
import 'swiper/css/navigation'
import { useState } from "react";
import FlightClassIcon from '@mui/icons-material/FlightClass';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function CarDetail({car}){
    const [bigImage,setBigImage]=useState(false)
    const router=useRouter()
    console.log(car[0])
    const zoomImage=()=>{
        setBigImage(prevIndex=> prevIndex===false ? true : false)
    }
    console.log(car)
    return(
        <div className={`w-full flex flex-col`}>
<div className="w-full bg-blue-600 text-white h-[40px] font-bold flex items-center pl-2">
   <ArrowBackIos onClick={()=>{router.back()}}/>
   <h1>Ətraflı</h1>
</div>
<div className="w-full grid gap-[20px] grid-cols-2 max-[691px]:grid-cols-1 pt-[20px]">
<div className={`${bigImage===true ? "fixed top-0 left-0 z-[9999] flex items-center bg-black w-full h-[100vh]" : "w-full relative  grid grid-cols-1 max-[691px]:w-full min-[691px]:pl-[10px]"}`}>
   <Swiper
     spaceBetween={50}
     slidesPerView={1}
     modules={[Autoplay,EffectCube,Navigation]}
     loop={true}
     navigation={true}
     effect="cube"
   className={`w-full h-[400px]`}>
     {car[0].images?.map((car)=>{
        return <SwiperSlide onClick={()=>{zoomImage()}} className="w-full h-full">
            <img src={car.asset.url} className={`${bigImage===true ? "w-auto h-auto" : "w-full h-full object-cover"}`}></img>
        </SwiperSlide>
    })}
   </Swiper>
</div>
<div className="w-full p-[10px] flex flex-col gap-[10px]">
<div className="flex p-2 rounded-[5px] justify-between bg-[#F5F5F5] shadow-sm shadow-[#E8E8E8]">
   
    <h1 className="flex gap-[10px]">Model: {car[0].model}</h1>
    <h1 className="font-[500] bg-blue-600 rounded-[20px] text-white flex w-[80px] h-[30px] items-center justify-center">{car[0].price + " ₼"}</h1>
</div>
<ul className="flex flex-col bg-[#F5F5F5] shadow-sm shadow-[#E8E8E8]  gap-[10px] w-full rounded-[5px]">
   <li className="flex items-center gap-[10px] p-2 border-b-[1px] border-[#C8C8C8]"><FlightClassIcon/><h1 className="font-[400]">Oturacaq sayı:</h1>{car[0].seat}</li>
   <li className="flex items-center gap-[10px] p-2 border-b-[1px] border-[#C8C8C8]"><LocalGasStationIcon/><h1>Yanacaq növü:</h1>{car[0].fueltype}</li>
   <li className="flex items-center gap-[10px] p-2 border-b-[1px] border-[#C8C8C8]"><img src="../gear1.png" className="w-[20px] ml-[3px]  h-[20px]"></img><h1 className="pl-[-10px]">Sürətlər qutusu:</h1> {car[0].gearbox}</li>
   <li className="flex items-center gap-[10px] p-2 border-b-[1px] border-[#C8C8C8]"><CalendarMonthIcon/><h1>Buraxılış ili:</h1>{car[0].year}</li>
</ul>
<div className="bg-[#F5F5F5] p-2 shadow-sm shadow-[#E8E8E8] w-full rounded-[5px]">
    <p className="text-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
</div>
</div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const {params}=context
    const {id}=params
    try {
        console.log(params)
      const car = await client.fetch(
        `*[_type=="post" && _id=='${id}']{
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
  
  
      return {
        props: {
          car,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {
          car: [],
        },
      };
    }
  }
export default CarDetail