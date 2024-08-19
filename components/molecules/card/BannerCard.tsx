import Link from 'next/link'
import React from 'react'

/**
 * Our BannerCard is a reusable UI component used to display a top section of our website
 *
 * @property featured image, a heading, author name and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const BannerCard = () => {
   return (
      <div className="relative rounded-xl font-work mb-24">
         <img
            width="1216"
            height="400"
            alt={`banner_image`}
            src="/outer.jpg"
            className="rounded-xl"
         />
         <div className="absolute -bottom-16 left-4 md:left-14 rounded-xl p-4 md:p-10 bg-base-100 w-10/12 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20">
            <div className="w-fit text-primary-content px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-4 font-medium">
               Technology
            </div>
            <h3>
               <Link
                  href="/"
                  className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500"
               >
                 Welcome To The Headquarters
               </Link>
            </h3>
            <div className="mt-6 flex items-center gap-5">
               <div className=" flex items-center gap-3">
                  <div className="avatar">
                     <div className="w-9 rounded-full">
                        {/* <img src="https://placehold.it/100x100" alt="avatar" /> */}
                        <img 
                        src="/avatar.jpg"
                         alt="avatar" />

                     </div>
                  </div>
                  <h6>
                     <Link
                        href="/"
                        className="text-base-content/60 text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
                     >
                        Kafka
                     </Link>
                  </h6>
               </div>
               {/* <p className="text-base-content/60 text-xs md:text-base">
                  August 20, 2022
               </p> */}
            </div>
         </div>
      </div>
   )
}

export default BannerCard
