import Link from "next/link";
//Icons
import { FaGlobe } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

export default function PortfolioFooter() {
    return (
        <footer className="w-full bg-black/75 text-white">
            <div className="bg-[#000000] max-w-[120rem] mx-auto p-4 flex flex-col gap-5 max-sm:items-center">
                <h3 className="flex items-center gap-2 font-semibold text-[30px]">Front-End <FaGlobe /></h3>
                <ul className="mx-auto text-center">
                    <li className="font-semibold uppercase">Sites used for practice</li>
                    <li>
                        <Link 
                            href="https://www.frontendmentor.io/"
                            target='_blank'
                            className="underline decoration-2 underline-offset-2 hover:decoration-[#F20505] hover:text-[#F20505] duration-500">
                                Frontend Mentor
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="https://devchallenges.io/"
                            target='_blank'
                            className="underline decoration-2 underline-offset-2 hover:decoration-[#F20505] hover:text-[#F20505] duration-500">
                                devChallenges
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="https://www.frontendpractice.com/"
                            target='_blank'
                            className="underline decoration-2 underline-offset-2 hover:decoration-[#F20505] hover:text-[#F20505] duration-500">
                                Frontend Practice
                        </Link>
                    </li>
                </ul>
                <h4 className="text-end flex items-center gap-1 justify-end"><span className="font-semibold">Made with:</span> Next.js <RiNextjsLine />, Tailwind <RiTailwindCssLine />, TypeScript <TbBrandTypescript /></h4>
            </div>
        </footer>
    );
}