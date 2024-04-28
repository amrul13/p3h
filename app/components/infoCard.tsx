"use client"
import Image from "next/image";
import React, { useEffect, ReactNode } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface InfoCardProps  {
    animation: string;
    children: ReactNode;
}

const InfoCard: React.FC<InfoCardProps > = (props) => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

  return (
    <>
      <section className="bg-green-200 rounded-lg p-6 mb-6" data-aos={props.animation}>
          <div>
           {props.children}
          </div>
        </section>
       
    </>
  );
};

export default InfoCard;
