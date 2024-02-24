import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PaidIcon from '@mui/icons-material/Paid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Advantages(){
    useEffect(()=>{
        AOS.init()
    },)
    const advantages=[
        {
            id:0,
            text:"90+ icarə avtomobil modeli",
            icon:<TimeToLeaveIcon  className='text-[60px] max-[660px]:text-[50px]'/>
        },
        {
            id:2,
            text:"Münasib qiymət",
            icon:<PaidIcon className='text-[60px] max-[660px]:text-[50px]'/>
        },
        {
            id:3,
            text:"Avtomobillərin ünvana çatdırılması",
            icon:<LocationOnIcon className='text-[60px] max-[660px]:text-[50px]'/>
        },
        {
            id:4,
            text:"7/24 Dəstək",
            icon:<SupportAgentIcon className='text-[60px] max-[660px]:text-[50px]'/>
        }
    ]
    return(
        <div id='advantages' className="w-full pt-[10px] rounded-t-[30px] bg-red-600 h-auto pb-[30px] gap-[20px] flex flex-col">
            <div className="flex justify-center">
                <h1 className="text-white font-bold text-2xl">
                    Niyə biz?
                </h1>
            </div>
            <div className="w-full p-[20px] max-[660px]:grid-cols-1 gap-[20px]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{advantages.map(item=>{
    return <div data-aos="zoom-in" data-aos-duration="1500" className='w-full bg-white gap-[15px] h-[250px] shadow-md flex-col max-[660px]:pl-4 rounded-[10px] max-[660px]:flex-row max-[660px]:justify-start max-[660px]:h-[80px] items-center shadow-[#BEBEBE] flex justify-center'>
<div className='flex items-center justify-center text-red-600 shadow-md shadow-[#BEBEBE] rounded-full h-[100px] w-[100px] max-[660px]:w-[60px] max-[660px]:h-[60px]'>{item.icon}</div>
<div>
    <p className='text-black font-bold text-center text-[20px]'>{item.text}</p>
</div>
    </div>
})}
</div>
        </div>
    )
}
export default Advantages