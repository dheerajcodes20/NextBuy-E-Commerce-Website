"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppprops{
    images: Array<{ asset: { _ref: string; _type: string } }>;

}


export default function ImageGallery({ images }: iAppprops) {
    const [bigImage, setBigImage] = useState(images[0])

    const handleSmallImageClick = (image: { asset: { _ref: string; _type: string } }) => {
        setBigImage(image);
    }

   return(
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image,idx)=>(
         <div key={idx} className=" overflow-hidden rounded-lg bg-gray-100">
          <Image
           src={urlFor(image).url()}
           width={200}
           height={200}
           alt="photo"
           className="h-full w-full object-cover object-center cursor-pointer "
          onClick={()=> handleSmallImageClick(image)} priority />

         </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image src={urlFor(bigImage).url()}
         alt="photo"
         width={500} 
         height={500}
         className="h-full w-full object-cover object-center"
         priority />
         <span className="absolute left-0 top-0 rounded-br-lg bg-red-600 px-3 py-1.5 text-sm uppercase tracking-wider text-white">SALE</span>
      </div>
    </div>
   )
}