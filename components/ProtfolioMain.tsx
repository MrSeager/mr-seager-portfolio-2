//Types
import { PortfolioItemProps, PortfolioDataProps } from "@/types/portfolioTypes";
//Components
import PortfolioItem from "./PortfolioItem";

interface PortfolioMainProps {
    data: PortfolioDataProps;
    filters: string[];
}

export default function PortfolioMain({ data, filters }: PortfolioMainProps) {   
    return(
        <main className="grid grid-cols-1 auto-rows-max sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#B2B2B2] shadow-lg w-full max-w-[100rem] flex-1 py-5 px-4">
            {data.portfolio.map((item: PortfolioItemProps) => (
                <PortfolioItem 
                    key={item.id}
                    item={item}
                    filters={filters}
                />
            ))}
        </main>
    );
}