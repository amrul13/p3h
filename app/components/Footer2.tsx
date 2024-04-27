import Image from 'next/image'
import React from 'react'

const Footer2 = () => {
  return (
   
<footer
  className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white lg:text-left">
  <div className="container p-6">
    <div className="grid gap-4 lg:grid-cols-3">
                  <div className="mb-6 md:mb-0">
                     
                          
            <Image className='lg:mx-0 md:mx-auto sm:mx-auto xs:mx-auto' src="https://ppph.id/assets/img/new-lppph.png" alt="FlowBite Logo" width={250} height={20}/>
                      
      </div>
        
      <div className="mb-6 md:mb-0">
        <h5 className="mb-2 font-medium uppercase">Contact Us</h5>

          <p>Phone: +1-123-456-7890</p>
          <p>Email: lp3h@example.com</p>
          <p>Address: 123 Main St, Anytown USA</p>
      </div>

      <div className="mb-6 md:mb-0 mx-auto">
        <h5 className="mb-2 font-medium uppercase">Maps</h5>

        <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6115806312696!2d123.03107931077345!3d0.5832770635572746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792d0b5544f829%3A0x198cdfe1fbbafa82!2sRumah%20Adis%20Dapur%20Milky!5e0!3m2!1sid!2sid!4v1714134502524!5m2!1sid!2sid" width="300" height="250"  loading="lazy" ></iframe>

      </div>
    </div>
  </div>


  <div className="w-full bg-black/5 p-4 text-center">
    © 2023 Copyright:
    <a href="https://tw-elements.com/">LP3H™</a>
  </div>
</footer>
  )
}

export default Footer2