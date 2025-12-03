import { PortfolioItemProps, PortfolioDataProps } from "@/types/portfolioTypes";

interface PortfolioMainProps {
    data: PortfolioDataProps;
}

export default function PortfolioMain({ data }: PortfolioMainProps) {
    return(
        <main className="bg-[#F2E7DC] shadow-lg flex w-full max-w-[100rem] flex-col items-center justify-between py-32 px-16">
            {data.portfolio.map((item: PortfolioItemProps) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} />
                </div>
            ))}
        </main>
    );
}