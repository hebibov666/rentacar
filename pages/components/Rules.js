import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Rules(){
    useEffect(()=>{
        AOS.init()
    },)
    const rules=[
        {
            id:1,
            text:"Menecer ilə əlaqə saxlayın +994 123456890 "
        },
        {
            id:2,
            text:"İcarənin tarixini , vaxtını və məkanını menecerlə razılaşın "
        },
        {
            id:3,
            text:"İcarə nöqtəsində avtomobili təhvil götürün "
        },
        {
            id:4,
            text:"Müqavilə bağlayın, depozit qoyun, avtomobilin icarə haqqını ödəyin. "
        },
    ]
    return(
        <div className="w-full pb-[90px] flex flex-col gap-[20px] p-[20px]">
        <div className="flex w-full justify-center items-center">
            <h1 className="text-black text-xl font-bold">Qaydalar</h1>
        </div>
    <div className="grid w-full min-[400px]:grid-cols-2 gap-[20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {rules.map(rule=>{
            return <div data-aos="fade-up" data-aos-duration="1500"  className="w-full hover:mt-[-10px] transition-all duration-500 justify-center h-[250px] shadow-md shadow-[#BEBEBE] flex gap-[20px] flex-col items-center">
                <div className="flex justify-center">
                    <h1 className="text-red-600 font-bold text-6xl">{rule.id}</h1>
                </div>
                <div className="flex justify-center">
                    <p className="p-[10px] text-center text-black font-bold">{rule.text}</p>
                </div>
                </div>
        })}
    </div>

        </div>
    )
}
export default Rules