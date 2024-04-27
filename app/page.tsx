import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import Slider from "./components/Slider";
import Footer2 from "./components/Footer2";
import Hero from "./components/Hero";



  export default function Home() {
    return (
      <>
        {/* <Hero/> */}
        <main className="bg-white px-10 pt-10">
          <section>
            <div className="bg-green-200 rounded-lg p-6 mb-6">
              <h1 className=" text-2xl font-bold text-slate-700 text-center mb-2">Jadi Pendamping Proses Produk Halal Profesional & Miliki Penghasilan Jutaan Rupiah setiap bulan bersama LPPPH EWI</h1>
              <h1 className=" font-regular text-slate-700 md:text-5 text-center">Indonesia memiliki lebih dari 60 juta pelaku usaha mikro yang 60% merupakan pelaku usaha sektor makanan & minuman. 17 Oktober 2024 seluruh pelaku usaha yang produknya terkait dengan makanan & minuman wajib memiliki sertifikasi halal dari Badan Penyelenggara Jaminan Produk Halal (BPJPH) Kementerian Agama RI.</h1>
              <h1 className=" font-regular text-slate-700 md:text-5 text-center">Dibutuhkan Pendamping bagi Pelaku Usaha untuk mendaftarkan produknya agar mendapatkan Sertifikat Halal dari BPJPH & dibutuhkan lebih dari 200.000 Pendamping Proses Produk Halal (PPPH) yang Profesional.</h1>
            </div>
          </section>
          <section>
            <div className="bg-green-200 rounded-lg p-6 mb-6">
              <h1 className=" text-2xl font-bold text-slate-700 text-center mb-2">Berapa Besar Penghasilan Seorang PPPH ?</h1>
              <h1 className=" font-regular text-slate-700 md:text-5 text-center">Bila dalam sebulan Anda berhasil mendampingi pengajuan sertifikat halal dan disetujui oleh Komisi Halal BPJPH sebanyak 20 Sertifikat Halal maka Anda akan mendapatkan penghasilan sebesar :</h1>
              <div className="bg-blue-200 text-blue-800 text-lg font-medium me-2 my-2 px-2.5 py-0.5 rounded border-blue-400 text-center">Rp. 150.000,- x 20 Sertifikat Halal = Rp. 3.000.000,-</div>
              <h1 className=" font-regular text-slate-700 md:text-5 text-center">Bagaimana bila Anda berhasil mendapat persetujuan bagi 50 Sertifikat Halal atau 100 Sertifikat Halal per bulannya? Penghasilan Anda dapat mencapai belasan bahkan puluhan juta sebulan. </h1>
            </div>
          </section>
          <section>
            <div className="bg-green-200 rounded-lg p-6 mb-6">
              <h1 className=" text-2xl font-bold text-slate-700 text-center mb-2">Apa itu Profesi Pendamping Proses Produk Halal Profesional ?</h1>
            </div>

            <div className="lg:px-32 md:px-0 mb-6">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow h-[500px]">
                <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/2V1yJefnLk0?si=HQcmXdUNUP-N6FDc" title="Peluang Profesi P3H" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </div>

          </section>

          <section>
            <div className="bg-green-200 rounded-lg p-6 mb-6">
              <h1 className=" text-2xl font-bold text-slate-700 text-center mb-2">Daftar Segera dan Dapatkan Fasilitas Penempatan Kerja di SWAKARTA</h1>
              <h1 className=" font-regular text-slate-700 md:text-5 text-center">Silahkan mengisi Data Anda melalui Form di bawah ini untuk mengikuti Pelatihan PPPH dari LPPPH EWI dan Asesmen Penempatan Kerja di SWAKARTA</h1>
              <div className="mx-12">

                <div className="bg-amber-100 text-amber-500 font-regular my-2 px-2.5 py-0.5 rounded border-blue-400 text-center">SILAHKAN MEMINTA LINK KODE REFERRAL UNTUK MELAKUKAN PENDAFTARAN PPPH EWI</div>
              </div>

            

              <form className="" action="#">
                <div className="w-full space-y-6 p-4  my-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                  <h5 className="text-xl font-medium text-gray-900">Data Calon PPPH</h5>
                  <span className="text-sm">Seluruh data akan dikirim ke sistem BPJPH</span>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Nama Lengkap</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nama " required />
                    </div>
                  
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">NIK</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="012345678910" required />
                    </div>
            
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">No Telepon / Whatsapp</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="082123456789" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Tempat Lahir</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Tanggal Lahir</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="12-12-2012" required />
                    </div>
        
                  </div>
                </div>
                {/* endcard  */}
                <div className="w-full space-y-6 p-4  mb-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                  <h5 className="text-xl font-medium text-gray-900">Alamat Area Kerja</h5>
                  <span className="text-sm">Anda dapat mengisi dengan area kerja Anda sebagai PPPH di provinsi yang berbeda dengan alamat KTP Anda</span>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Provinsi</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Gorontalo" required />
                    </div>
                  
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Kota / Kabupaten</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Bone Bolango" required />
                    </div>
            
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Kecamatan</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Telaga" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Desa / Kelurahan</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Mongolato" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Kode Pos</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="912312" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Alamat Lengkap</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="jl. jalan nomor 123" required />
                    </div>
        
                  </div>
                </div>
                <div className="w-full space-y-6 p-4  mb-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                  <h5 className="text-xl font-medium text-gray-900">Isian Tambahan</h5>
        
                  <div className="">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Alasan Menjadi PPPH</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Alasan saya ...." required />
                    </div>
         
                  </div>
                </div>
              
                <button type="submit" className="w-full text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim</button>
              </form>

            </div>
          </section>

          <section>
            <div className="bg-green-200 rounded-lg p-6 mb-6">
              <h1 className=" text-2xl font-bold text-slate-700 text-center mb-2">APA ITU SWAKARTA® “HUB HULU - HILIR HALAL” ?</h1>
              <h1 className=" font-regular text-slate-700 md:text-5 text-center">SWAKARTA® “Hub Hulu – Hilir Halal” adalah Unit Kelembagaan bagi PPPH dalam menjalankan tugasnya. Melalui SWAKARTA® pelaku usaha lebih mudah melakukan koordinasi dan konfirmasi atas proses sertifikasi produk halal dan memperkuat PPPH dalam melakukan koordinasi kerja bersama stakeholder halal di daerah.</h1>

            </div>

            <div className="lg:px-32 md:px-0 mb-6">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow h-[500px]">
                <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/czfWrVeclsQ" title="Peluang Profesi P3H" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </div>

       
          </section>

          {/* make a client section */}
          <section>
            <p>hello</p>
            <Slider/>
          </section>
        </main>
         
        <section>
            <Footer2 />
          </section>
      
      </>
    );
  }
