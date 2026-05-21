// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/swiper.css";
import CoreSpecialistCard from "../CoreSpecialistCard";

// import required modules
import { Icon } from "@iconify/react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
type SlidesType = {
  icon: string;
  title: string;
  text: string;
};
type swiperTypes = {
  slides: SlidesType[];
};

export default function SwiperContainer({ slides }: swiperTypes) {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="w-full relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            enabled: false,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {slides.map((card, index) => (
          <SwiperSlide>
            <CoreSpecialistCard key={index} {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="button-prev"
      >
        <Icon icon="material-symbols:chevron-left" className="w-10 h-10" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="button-next"
      >
        <Icon icon="material-symbols:chevron-right" className="w-10 h-10" />
      </button>
    </div>
  );
}
