"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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
     
    >
      {clients.map((client, index) => (
        <SwiperSlide key={index}>
          <Image src={client.logo} alt={client.name} className="border p-1" width={100} height={100} />
          <h1 className="mt-3">{client.name}</h1>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            officiis provident vitae, doloribus eaque saepe
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliding;