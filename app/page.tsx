import Navbar from "@/components/Navbar";
import PortfolioMain from "@/components/ProtfolioMain";
import type { PortfolioDataProps } from "@/types/portfolioTypes";

export default async function Home() {
  // #FFFFFF #B2B2B2 #000983 #F20505 #5E5E5E #000000
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(new URL("/data/portfolio.json", baseUrl).toString(), {
    next: { revalidate: 3600 },
  });
  const data: PortfolioDataProps = await res.json();

  return (
    <div className="select-none bg-[#5E5E5E] flex flex-col items-center justify-center font-sans">
      <Navbar />
      <PortfolioMain
        data={data}
      />
    </div>
  );
}
