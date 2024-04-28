"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";



const clients = [
  { name: "Client 1", logo: "https://ppph.id/assets/img/yhji.png" },
  { name: "Client 2", logo: "https://ppph.id/assets/img/komunitas-pasifamal.png" },
  { name: "Client 3", logo: "https://ppph.id/assets/img/insani-logo.png" },
  { name: "Client 4", logo: "https://ppph.id/assets/img/pasifamal.png" },
];

const Sliding = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
     
    >
      {clients.map((client, index) => (
        <SwiperSlide key={index}>
          <Image src={client.logo} alt={client.name} className="p-1 w-40" width={100} height={100} />   
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliding;