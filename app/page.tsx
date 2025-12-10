import HomeClient from "@/components/HomeClient";
import type { PortfolioDataProps } from "@/types/portfolioTypes";

import portfolioData from "@/public/data/portfolio.json";

export default async function Home() {
  // #FFFFFF #B2B2B2 #000983 #F20505 #5E5E5E #000000
  const data: PortfolioDataProps = portfolioData;

  return (
    <div className="select-none bg-[#5E5E5E] flex flex-col items-center justify-center font-sans">
      <HomeClient
        data={data}
      />
    </div>
  );
}
