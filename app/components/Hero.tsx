import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
      <>
      <section
          style={{ backgroundImage: `url(${'https://ppph.id/assets/img/hero-ppph.png'})` }}
          className="flex flex-col justify-between h-screen bg-cover bg-center text-white"
        >
          {/* make logo */}
          <div className="flex items-center justify-end">
            <Image className="lg:w-[250px] md:w-[200px] sm:w-[150px]" src={'https://ppph.id/assets/img/new-lppph.png'} alt="logo" width={225} height={225} />
            <Image className="mt-[50px] lg:w-[250px]  md:w-[200px] sm:w-[150px]" src={'https://ppph.id/assets/img/bpjph_logo.png'} alt="logo" width={225} height={225} />
          </div>

          {/* make hero text section */}
          <div className="grid grid-cols-2">
            <div></div>
            <div className="text-center flex flex-col items-center justify-end">
              <p className="text-3xl font-regular text-slate-700">Perekrutan dan Penempatan</p>
              <h1 className="text-5xl font-bold text-slate-700 md:text-5">PENDAMPING PROSES PRODUK HALAL</h1>
            </div>
          </div>

          <div></div>
        </section>
      </>
    
  )
}

export default Hero