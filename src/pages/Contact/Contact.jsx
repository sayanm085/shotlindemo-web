import React from 'react';
import { ContactFrom ,LoopSlider } from '../../Layout'

export default function Contact({data}) {

  console.log(data)
  
  return (
   <>
   <div className='relative h-fit  w-full '>
   <section className='h-auto w-full flex justify-center items-center'>
      <div className="h-full w-full  absolute overflow-hidden -z-[1] left-1/2 -top-[70%] -translate-x-1/2  flex justify-center ">
        <div className="h-[435px] w-[70%] rounded-full bg-[#3900d869]   mt-36 blur-3xl "></div>
      </div>
    </section>
      <ContactFrom/>
   </div>

   </>
  )
}

