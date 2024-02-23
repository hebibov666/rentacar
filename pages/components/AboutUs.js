import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function About(){
    useEffect(()=>{
        AOS.init()
    },)
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="w-full flex justify-center items-center">
<div className="w-[99%] rounded-[10px] bg-black">
<div className="flex justify-center w-full">
<h1 className="text-white font-bold pt-[10px] lg:text-2xl text-xl">Haqqımızda</h1>
</div>
<div className="grid grid-cols-2  max-[754px]:grid-cols-1">
  <div className="flex p-[10px] items-center h-full">
  <p  className="text-white lg:pl-4 lg:text-[21px] max-[754px]:text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
  </div>
  <div className="relative car-box p-4 w-full">
    <img src="./about.png" data-aos="fade-up" data-aos-duration="1500" className="w-full h-full"></img>
  </div>
</div>
</div>
        </div>
    )
}
export default About