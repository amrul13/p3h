import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${"https://ppph.id/assets/img/hero-ppph.png"})`,
        }}
        className="flex flex-col justify-between bg-cover h-screen ml-[-290px] md:ml-auto"
      >
        {/* make logo */}
        <div className="flex items-center justify-end">
          <Image
            className=" w-32 lg:w-60"
            src={"https://ppph.id/assets/img/new-lppph.png"}
            alt="logo"
            width={250}
            height={250}
          />
          <Image
            className="mt-10 w-32 lg:w-60"
            src={"https://ppph.id/assets/img/bpjph_logo.png"}
            alt="logo"
            width={250}
            height={250}
          />
        </div>

        {/* make hero text section */}
        <div className="grid grid-cols-2 mt-[-120px]">
          <div></div>
          <div className="text-center flex flex-col items-center justify-end">
            <p className="text-xl md:text-3xl font-medium text-slate-700">
              Perekrutan dan Penempatan
            </p>
            <h1 className="text-3xl lg:text-6xl md:text-4xl font-bold text-slate-700 md:text-5">
              PENDAMPING PROSES PRODUK HALAL
            </h1>
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
};

export default Hero;
