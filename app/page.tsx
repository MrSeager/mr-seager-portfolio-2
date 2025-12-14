import HomeClient from "@/components/HomeClient";
import type { PortfolioDataProps } from "@/types/portfolioTypes";

import portfolioData from "@/public/data/portfolio.json";

export default async function Home() {
  // #FFFFFF #B2B2B2 #000983 #F20505 #5E5E5E #000000
  const data: PortfolioDataProps = portfolioData;

  return <HomeClient data={data} />
  
}
