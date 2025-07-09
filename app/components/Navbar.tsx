"use client"
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

// import { useState } from 'react';
// import clsx from 'clsx';
// Optional helper (can also use normal JS)


export default function Navbar() {

  const pathname = usePathname(); 
  const {handleCartClick}= useShoppingCart()

  // Define menu links
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/Men' },
    { name: 'Women', href: '/Women' },
    { name: 'Teens', href: '/Teens' },

  ];

  return (

    <header className='mb-8 border-b  '>

      <div className='flex items-center justify-between mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl'>
        {/* Left side - Logo */}
        <Link href='/' >
          <h1 className='text-3xl sm:text-2xl md:text-4xl font-bold '>
            Next<span className="text-primary">Buy</span>
          </h1>
        </Link>


        {/* Navigation */}
        <nav className='hidden gap-12 lg:flex 2xl:ml-16 '>
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ?
                (
                  <Link className='text-lg font-semibold text-primary' href={link.href}>
                    {link.name}
                  </Link>
                ) : (
                  <Link href={link.href} className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary' >
                    {link.name}
                  </Link>
                )}
            </div>
          ))}
        </nav>

        {/* Shopping Bag Icon */}
        <div className='flex divide-x border-r sm:border-l '>
          <Button variant={"outline"} 
          onClick={()=> handleCartClick()}
          className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none bg-white hover:bg-gray-100 '>
            <ShoppingBag className='size-6'/>
            <span className='hidden text-xs font-semibold text-gray-500 sm:block '>
              Cart
            </span>
          </Button>
          
        </div>
      </div>

    </header>
  );
}