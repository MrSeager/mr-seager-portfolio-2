//Types
import { PortfolioItemProps, PortfolioDataProps } from "@/types/portfolioTypes";
//Components
import Image from "next/image";
import Link from "next/link";

interface PortfolioMainProps {
    data: PortfolioDataProps;
}

export default function PortfolioMain({ data }: PortfolioMainProps) {
    return(
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#B2B2B2] shadow-lg flex w-full max-w-[100rem] flex-col items-center justify-between py-5 px-4">
            {data.portfolio.map((item: PortfolioItemProps) => (
                <div 
                    key={item.id}
                    tabIndex={0} 
                    className="shadow-md relative overflow-hidden group rounded rounded-[10px] grid grid-cols-2 gap-3 p-2 bg-[#FFFFFF] h-full items-center"
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
                        className="py-0 absolute bottom-0 w-full h-0 backdrop-blur bg-white/30 duration-500 flex flex-col justify-between
                                    group-hover:h-full group-hover:py-3
                                    group-focus:h-full group-focus:py-3
                                    group-active:h-full group-active:py-3">
                        <div className="text-[#000000] flex items-center justify-center gap-3">
                            {item.version.map((ver: string) => (
                                <p key={ver}>{ver}</p>
                            ))}
                        </div>
                        <div className="flex justify-between px-3">
                            <Link 
                                href={item.repasitory}
                                target='_blank'
                                className="cursor-pointer bg-[#FFFFFF] border-2 border-[#FFFFFF] text-[#000000] p-2 rounded rounded-4 duration-300
                                            hover:bg-transparent hover:text-[#FFFFFF]
                                            focus:bg-transparent focus:text-[#FFFFFF]"
                            >
                                github
                            </Link>
                            <Link 
                                href={item.link}
                                target='_blank'
                                className="cursor-pointer bg-[#FFFFFF] border-2 border-[#FFFFFF] text-[#000000] p-2 rounded rounded-4 duration-500
                                            hover:bg-transparent hover:text-[#FFFFFF]
                                            focus:bg-transparent focus:text-[#FFFFFF]"
                            >
                                link
                            </Link>                            
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
}
// #5e5e5e75