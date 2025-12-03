'use client';
//Components
import { useState } from 'react'
import Link from "next/link"
import NavbarButton from './NavbarButton'
//Icons
import { IoMenu, IoClose } from "react-icons/io5"
import { CgWebsite } from "react-icons/cg"
import { FaLinkedinIn } from "react-icons/fa"
import { SiRefinedgithub } from "react-icons/si"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className='bg-[#F2E7DC] relative border-black sticky w-full top-0 z-50'>
            <div className="relative shadow-lg bg-[#0D0D0D] text-[#F2E7DC] max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex justify-between items-center py-5">
                    <div className='flex items-center gap-3'>
                        <CgWebsite size={50} className='xl:block sm:hidden lg:block' />
                        <h1 className='font-bold text-[25px]'>Mr. Seager<br />
                        Portfolio</h1>
                    </div>
                    <div className='md:flex gap-5 hidden'>
                        <div className="font-semibold flex items-center justify-center gap-1 flex-wrap max-w-[550px]">
                            <NavbarButton 
                                btnText='html'
                                classN='px-3 py-1'
                            />
                            <NavbarButton 
                                btnText='react'
                                classN='px-3 py-1'
                            />
                            <NavbarButton 
                                btnText='next.js'
                                classN='px-3 py-1'
                            />
                            <NavbarButton 
                                btnText='css'
                                classN='px-3 py-1'
                            />
                            <NavbarButton 
                                btnText='bootstrap'
                                classN='px-3 py-1'
                            />
                            <NavbarButton 
                                btnText='tailwind'
                                classN='px-3 py-1'
                            />
                            <NavbarButton 
                                btnText='reactspring'
                                classN='px-3 py-1'
                            />
                            <NavbarButton 
                                btnText='javascript'
                                classN='px-3 py-1'
                            />
                            <NavbarButton 
                                btnText='typescript'
                                classN='px-3 py-1'
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col gap-2">
                        <Link 
                            href="https://www.linkedin.com/in/sergiy-b-623426159/"
                            target='_blank'
                            className="cursor-pointer bg-[#F2E7DC] border-2 border-[#F2E7DC] text-[#0D0D0D] p-2 rounded rounded-4 duration-500
                                        hover:bg-transparent hover:text-[#F2E7DC]
                                        focus:bg-transparent focus:text-[#F2E7DC]"
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link 
                            href="https://github.com/MrSeager"
                            target='_blank'
                            className="cursor-pointer bg-[#F2E7DC] border-2 border-[#F2E7DC] text-[#0D0D0D] p-2 rounded rounded-4 duration-500
                                        hover:bg-transparent hover:text-[#F2E7DC]
                                        focus:bg-transparent focus:text-[#F2E7DC]"
                        >
                            <SiRefinedgithub />
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button 
                            type='button' 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-sm cursor-pointer uppercase bg-[#F2E7DC] border-2 border-[#F2E7DC] text-[#0D0D0D] px-3 py-2 rounded rounded-4 duration-500
                                        hover:bg-transparent hover:text-[#F2E7DC]
                                        focus:bg-transparent focus:text-[#F2E7DC]"
                        >
                            {isOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`overflow-hidden transition-all px-3 absolute left-0 right-0 w-full bg-[#0D0D0D] duration-500 ease-in-out flex flex-col items-center gap-3
                ${isOpen ? 'max-h-screen py-3' : 'max-h-0 pointer-events-none'}`}
            >
                <div className='flex flex-col gap-5'>
                    <div className="font-semibold flex items-center justify-center gap-1 flex-wrap max-w-[550px]">
                        <NavbarButton 
                            btnText='html'
                            classN='px-3 py-1'
                        />
                        <NavbarButton 
                            btnText='react'
                            classN='px-3 py-1'
                        />
                        <NavbarButton 
                            btnText='next.js'
                            classN='px-3 py-1'
                        />
                        <NavbarButton 
                            btnText='css'
                            classN='px-3 py-1'
                        />
                        <NavbarButton 
                            btnText='bootstrap'
                            classN='px-3 py-1'
                        />
                        <NavbarButton 
                            btnText='tailwind'
                            classN='px-3 py-1'
                        />
                        <NavbarButton 
                            btnText='reactspring'
                            classN='px-3 py-1'
                        />
                        <NavbarButton 
                            btnText='javascript'
                            classN='px-3 py-1'
                        />
                        <NavbarButton 
                            btnText='typescript'
                            classN='px-3 py-1'
                        />
                    </div>
                </div>

                <div className="flex gap-2 justify-between w-full">
                    <Link 
                        href="https://www.linkedin.com/in/sergiy-b-623426159/"
                        target='_blank'
                        className="cursor-pointer bg-[#F2E7DC] border-2 border-[#F2E7DC] text-[#0D0D0D] p-2 rounded rounded-4 duration-500
                                    hover:bg-transparent hover:text-[#F2E7DC]
                                    focus:bg-transparent focus:text-[#F2E7DC]"
                    >
                        <FaLinkedinIn />
                    </Link>
                    <Link 
                        href="https://github.com/MrSeager"
                        target='_blank'
                        className="cursor-pointer bg-[#F2E7DC] border-2 border-[#F2E7DC] text-[#0D0D0D] p-2 rounded rounded-4 duration-500
                                    hover:bg-transparent hover:text-[#F2E7DC]
                                    focus:bg-transparent focus:text-[#F2E7DC]"
                    >
                        <SiRefinedgithub />
                    </Link>
                </div>
            </div>
        </nav>
    );
}