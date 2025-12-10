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

interface NavbarProps {
    filters: string[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Navbar({ filters, setFilters }: NavbarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = (tech: string) => {
        setFilters(prev =>
            prev.includes(tech)
                ? prev.filter(f => f !== tech)
                : [...prev, tech]
        );
    };

    const techs = [
        "html", "react", "next.js", "css", "bootstrap",
        "tailwind", "reactspring", "javascript", "typescript"
    ];

    return (
        <header className="sticky top-0 z-50 w-full">
            <nav className='relative border-black'>
                <div className="relative shadow-lg bg-[#000000] text-[#FFFFFF] max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-4">
                    <div className="flex justify-between items-center py-5">
                        <div className='flex items-center gap-3'>
                            <CgWebsite size={50} className='xl:block sm:hidden lg:block' />
                            <h1 className='font-bold text-[25px]'>Mr. Seager<br />
                            Portfolio</h1>
                        </div>
                        <div className='md:flex gap-5 hidden'>
                            <div className="font-semibold flex items-center justify-center gap-1 flex-wrap max-w-[550px]">
                                {techs.map(t => (
                                    <NavbarButton
                                        key={t}
                                        btnText={t}
                                        active={filters.includes(t)}
                                        onClick={() => handleClick(t)}
                                        classN="px-3 py-1"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col gap-2">
                            <Link 
                                href="https://www.linkedin.com/in/sergiy-b-623426159/"
                                target='_blank'
                                className="cursor-pointer bg-[#FFFFFF] border-2 border-[#FFFFFF] text-[#000000] p-2 rounded rounded-4 duration-500
                                            hover:bg-transparent hover:text-[#FFFFFF]
                                            focus:bg-transparent focus:text-[#FFFFFF]"
                            >
                                <FaLinkedinIn />
                            </Link>
                            <Link 
                                href="https://github.com/MrSeager"
                                target='_blank'
                                className="cursor-pointer bg-[#FFFFFF] border-2 border-[#FFFFFF] text-[#000000] p-2 rounded rounded-4 duration-500
                                            hover:bg-transparent hover:text-[#FFFFFF]
                                            focus:bg-transparent focus:text-[#FFFFFF]"
                            >
                                <SiRefinedgithub />
                            </Link>
                        </div>

                        <div className="md:hidden">
                            <button 
                                type='button' 
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-sm cursor-pointer uppercase bg-[#FFFFFF] border-2 border-[#F2E7DC] text-[#000000] px-3 py-2 rounded rounded-4 duration-500
                                            hover:bg-transparent hover:text-[#FFFFFF]
                                            focus:bg-transparent focus:text-[#FFFFFF]"
                            >
                                {isOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`md:hidden overflow-hidden transition-all px-3 absolute left-0 right-0 w-full bg-[#000000] duration-500 ease-in-out flex flex-col items-center gap-3
                    ${isOpen ? 'max-h-screen py-3' : 'max-h-0 pointer-events-none'}`}
                >
                    <div className='flex flex-col gap-5'>
                        <div className="font-semibold flex items-center justify-center gap-1 flex-wrap max-w-[550px]">
                            {techs.map(t => (
                                <NavbarButton
                                    key={t}
                                    btnText={t}
                                    active={filters.includes(t)}
                                    onClick={() => handleClick(t)}
                                    classN="px-3 py-1"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-2 justify-between w-full">
                        <Link 
                            href="https://www.linkedin.com/in/sergiy-b-623426159/"
                            target='_blank'
                            className="cursor-pointer bg-[#FFFFFF] border-2 border-[#FFFFFF] text-[#000000] p-2 rounded rounded-4 duration-500
                                        hover:bg-transparent hover:text-[#FFFFFF]
                                        focus:bg-transparent focus:text-[#FFFFFF]"
                        >
                            <FaLinkedinIn />
                        </Link>
                        <Link 
                            href="https://github.com/MrSeager"
                            target='_blank'
                            className="cursor-pointer bg-[#FFFFFF] border-2 border-[#FFFFFF] text-[#000000] p-2 rounded rounded-4 duration-500
                                        hover:bg-transparent hover:text-[#FFFFFF]
                                        focus:bg-transparent focus:text-[#FFFFFF]"
                        >
                            <SiRefinedgithub />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}