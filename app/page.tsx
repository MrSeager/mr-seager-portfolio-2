import Navbar from "@/components/Navbar";
import PortfolioMain from "@/components/ProtfolioMain";
import type { PortfolioDataProps } from "@/types/portfolioTypes";

export default async function Home() {
  // #027373 #038C7F #A9D9D0 #F2E7DC #0D0D0D
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(new URL("/data/portfolio.json", baseUrl).toString(), {
    next: { revalidate: 3600 },
  });
  const data: PortfolioDataProps = await res.json();

  return (
    <div className="bg-[#F2E7DC] flex flex-col items-center justify-center font-sans">
      <Navbar />
      <PortfolioMain
        data={data}
      />
    </div>
  );
}
