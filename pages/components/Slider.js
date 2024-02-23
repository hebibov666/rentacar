import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Scrollbar, A11y, Autoplay,EffectCoverflow,EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'
import 'swiper/css/effect-cube'

function SliderSection() {
  const images = ["./car1.png", "./car2.png", "./car3.png"];
  
  return (
    <div className='mt-[60px] bg-[#1E90FF] mb-[20px]'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay,EffectCoverflow,EffectCube]}
        loop={true}
        autoplay={{
            delay: 3000,
        }}
        effect='cube'
       className='slide pt-[100px] flex items-center justify-center'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='flex items-center justify-center w-full'>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderSection;
