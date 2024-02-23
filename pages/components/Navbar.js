import MenuIcon from '@mui/icons-material/Menu';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useState } from 'react';
function Navbar(){
    const [menu,setMenu]=useState(false)
        return(
        <div className="navbar fixed top-0 bg-[white] z-[9999] border-b-[1px] border-[#E8E8E8] h-[60px] w-full overflow-hidden flex items-center justify-between pr-4 pl-4">
            <div className='flex items-center gap-[15px] w-auto '>
               <h1 className='text-xl font-[700] w-[100px] text-[#f7620c]'>Rent - 101</h1>
    
            </div>
            <div className={`max-[565px]:fixed  max-[565px]:w-[80%] transition-all duration-1000 z-[2]  ${menu===false ? "max-[565px]:left-[-200%] top-[0px] h-[0%]" : "top-[60px] left-0  h-[100vh]"}  bg-white h-[100vh] flex justify-end max-[565px]:justify-start  w-full`}>
                <ul className="relative  max-[565px]:items-start max-[565px]:pl-4 max-[565px]:text-[18px] text-black w-full flex items-center min-[565px]:justify-end gap-[15px] max-[565px]:flex-col max-[565px]:pt-[20px]">
<a href='#haqqimizda'><li className='list  flex flex-col box-border'>Maşınlar</li></a>
<a href='#gallery'><li className='list  flex flex-col'>Haqqımızda</li></a>
<a href='#contact'><li className='list flex flex-col'>Əlaqə</li></a>
                </ul>
            </div>
{menu===false ? <MenuIcon onClick={()=>{setMenu(true)}} fontSize='large' className='absolute z-[1] right-0 min-[565px]:hidden text-[#1E90FF]'/> : 
  <CloseSharpIcon fontSize='large' className='fixed z-[3] right-0 min-[565px]:hidden text-[#1E90FF] ' onClick={()=>{setMenu(false)}}/>}
        </div>
    )
}
export default Navbar