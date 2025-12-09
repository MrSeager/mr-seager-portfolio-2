//Types
import { PortfolioItemProps, PortfolioDataProps } from "@/types/portfolioTypes";
//Components
import PortfolioItem from "./PortfolioItem";

interface PortfolioMainProps {
    data: PortfolioDataProps;
}

export default function PortfolioMain({ data }: PortfolioMainProps) {
    return(
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#B2B2B2] shadow-lg flex w-full max-w-[100rem] flex-col items-center justify-between py-5 px-4">
            {data.portfolio.map((item: PortfolioItemProps) => (
                <PortfolioItem 
                    key={item.id}
                    item={item}
                />
            ))}
        </main>
    );
}
// #5e5e5e75