import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Questions(){
    useEffect(()=>{
        AOS.init()
    },)
    const questions=[
        {
            question:"İcarə üçün depozit lazımdır?"
        },
        {
            question:"İcarə üçün minimum yaş həddi neçədir?"
        },
        {
            question:"Ünvana çatdırılma var?"
        },
        {
            question:"İcarənin minimum müddəti nə qədərdir?"
        }
    ]
    return(
<div  data-aos="fade-right" data-aos-duration="1500" className='w-full bg-blue-900 pb-[20px] flex flex-col pt-[20px]'>
<div className='flex justify-center items-center'>
    <h1 className='text-white text-2xl font-bold'>Tez-tez verilən suallar</h1>
</div>
<div className='w-full p-[10px] flex flex-col gap-[20px]'>
{questions.map(question=>{
    return <Accordion className='rounded-[5px]'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
      className='font-bold text-black'
    >
     {question.question}
    </AccordionSummary>
    <AccordionDetails className='text-[19px] text-black'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionDetails>
  </Accordion>
})}
</div>
</div>
    )
}
export default Questions