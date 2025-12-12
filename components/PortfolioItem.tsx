//Types
import { PortfolioItemProps } from "@/types/portfolioTypes";
//Components
import Image from "next/image";
import Link from "next/link";
//Icons
import { FaDesktop, FaMobileAlt, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
//Animation
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioItemsInt {
    item: PortfolioItemProps;
}

export default function PortfolioItem ({ item }: PortfolioItemsInt) {
    const handleVersionIcon = (ver: string) => {
        switch (ver) {
            case "desktop":
                return <FaDesktop size={25} />;
            case "mobile":
                return <FaMobileAlt size={25} />
        }
    }

    return(
        <div 
            tabIndex={0} 
            className={`ease-in-out shadow-sm relative overflow-hidden group rounded rounded-[10px] grid grid-cols-2 gap-3 p-2 bg-[#FFFFFF] items-center transition-discrete duration-400
                        hover:scale-[1.03] hover:shadow-xl`}
        >
            <Image 
                src={item.image} 
                alt={item.title}
                height={800}
                width={1200}
                className="rounded rounded-[10px] border border-[#000000]"
            />
            <div className="flex flex-col justify-between text-[#000000] h-full">
                <h2 
                    title={item.title}
                    className="font-semibold truncate"
                >
                    {item.title}
                </h2>
                <div className="flex flex-wrap gap-x-2">
                    {item.technology.map((tech: string) => (
                        <p 
                            key={tech}
                            className="text-[12px]"
                        >
                            #{tech}
                        </p>
                    ))}
                </div>
            </div>
            <div 
                className="py-0 absolute bottom-0 w-full h-0 backdrop-blur bg-white/30 duration-400 flex flex-col justify-between
                            group-hover:h-full group-hover:py-3
                            group-focus:h-full group-focus:py-3
                            group-active:h-full group-active:py-3">
                <div className="text-[#000000] flex items-center justify-center gap-3">
                    {item.version.map((ver: string) => (
                        <span key={ver} className="animate-bounce mt-4">
                            {handleVersionIcon(ver)}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between px-3">
                    <Link 
                        href={item.repasitory}
                        target='_blank'
                        className="cursor-pointer bg-transparent border-3 border-[#000000] text-[#000000] p-2 rounded rounded-4 duration-300
                                    hover:bg-[#000000] hover:text-[#FFFFFF]
                                    focus:bg-[#000000] focus:text-[#FFFFFF]"
                    >
                        <FaGithub size={15} />
                    </Link>
                    <Link 
                        href={item.link}
                        target='_blank'
                        className="cursor-pointer bg-transparent border-3 border-[#000000] text-[#000000] p-2 rounded rounded-4 duration-300
                                    hover:bg-[#000000] hover:text-[#FFFFFF]
                                    focus:bg-[#000000] focus:text-[#FFFFFF]"
                    >
                        <FaExternalLinkAlt size={15} />
                    </Link>                            
                </div>
            </div>
        </div>
    );
}