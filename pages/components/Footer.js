import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useTranslation } from 'react-i18next';
function Footer(){
    const {t}=useTranslation()
    return(
        <div className="w-full  gap-[30px] p-[20px] h-full bg-[#181818] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
<div className='flex flex-col gap-[15px] text-white'>
<h1 className='text-xl font-bold pb-[10px]'>{t("Əlaqə")}</h1>
   <span className='flex items-center gap-[10px]'>
    <CallIcon/>
    <a href='tel://+994123456789'>+994123456789</a>
   </span>
   <span className='flex items-center gap-[10px]'>
    <EmailOutlinedIcon/>
    <a href='mailto://abcdf@gmail.com'>rentacar@gmail.com</a>
   </span>
   <span className='flex items-center gap-[10px]'>
    <LocationOnOutlinedIcon/>
    <a href='tel://+994123456789'>Adress info</a>
   </span>
</div>
<div className='flex flex-col gap-[15px] text-white'>
    <h1 className='text-xl font-bold pb-[10px]'>{t("Sosial media")}</h1>
   <span className='flex items-center gap-[10px]'>
    <WhatsAppIcon/>
    <a href='https://wa.me/+994123456789'>WhatsApp</a>
   </span>
   <span className='flex items-center gap-[10px]'>
    <InstagramIcon/>
    <a href='mailto://werdegtgrhrh'>Instagram</a>
   </span>
</div>
        </div>
    )
}
export default Footer