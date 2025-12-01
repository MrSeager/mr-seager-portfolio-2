'use client';
//Components
import { useState } from 'react'
import Link from "next/link"
//Icons
import { IoMenu, IoClose } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className=''>
            <div className="bg-[#191827] max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex justify-between items-center py-5">
                    <div className='flex items-center gap-3'>
                        <CgWebsite size={50} />
                        <h1 className='font-bold text-[25px]'>Mr. Seager<br />
                        Portfolio</h1>
                    </div>
                    <div className='md:flex gap-5 hidden'>
                        <div className="font-semibold flex flex-col items-start">
                            <button type="button" className="uppercase">html</button>
                            <button type="button" className="">react</button>
                            <button type="button" className="">next.js</button>
                        </div>
                        <div className="font-semibold flex flex-col">
                            <button type="button" className="">css</button>
                            <button type="button" className="">bootstrap</button>
                            <button type="button" className="">tailwind</button>
                            <button type="button" className="">reactspring</button>
                        </div>
                        <div className="font-semibold flex flex-col items-end">
                            <button type="button" className="">javascript</button>
                            <button type="button" className="">typescript</button>
                        </div>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="">1</Link>
                        <Link href="/" className="">2</Link>
                        <Link href="/" className="">3</Link>
                        <Link href="/" className="">4</Link>
                    </div>

                    <div className="md:hidden">
                        <button type='button' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <div 
                className={`transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"} 
                            uppercase font-semibold md:hidden px-4 pb-4 flex flex-col items-center gap-2`}
            >
                <Link href="/" className="block focus:text-shadow-md focus:scale-105 transition-transform duration-500">Discover</Link>
                <Link href="/" className="block focus:text-shadow-md focus:scale-105 transition-transform duration-500">Search</Link>
                <Link href="/" className="block focus:text-shadow-md focus:scale-105 transition-transform duration-500">Why</Link>
                <Link href="/" className="block focus:text-shadow-md focus:scale-105 transition-transform duration-500">Cart</Link>
            </div>
        </nav>
    );
}