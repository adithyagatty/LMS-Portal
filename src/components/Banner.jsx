import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="w-full lg:h-[400px] md:h-[250px] sm:h-[160px] px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/young-student-sitting-table-use-laptop_1157-27564.jpg?semt=ais_hybrid"
            alt="Slide 1"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/e-learning-education-template-vector-technology-ad-banner_53876-125996.jpg?semt=ais_hybrid"
            alt="Slide 2"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/young-man-listening-music-study-session_23-2149285451.jpg?semt=ais_hybrid"
            alt="Slide 3"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
