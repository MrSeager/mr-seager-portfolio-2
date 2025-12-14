//Icons
import { FaGlobe } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

export default function PortfolioFooter() {
    return (
        <footer className="w-full bg-black/75">
            <div className="bg-[#000000] max-w-[100rem] mx-auto p-4 flex flex-col gap-5">
                <h3 className="flex items-center gap-2 font-semibold text-[30px]">Front-End <FaGlobe /></h3>
                <h4 className="text-end flex items-center gap-1 justify-end"><span className="font-semibold">Made with:</span> Next.js <RiNextjsLine />, Tailwind <RiTailwindCssLine />, TypeScript <TbBrandTypescript /></h4>
            </div>
        </footer>
    );
}