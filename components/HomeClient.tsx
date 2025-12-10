"use client";
import { useState } from "react";
//Types
import { PortfolioDataProps } from "@/types/portfolioTypes";
//Components
import Navbar from "./Navbar";
import PortfolioMain from "./ProtfolioMain";

interface HomeClientProps {
    data: PortfolioDataProps;
}

export default function HomeClient({ data }: HomeClientProps) {
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <div className="min-h-screen select-none bg-[#5E5E5E] flex flex-col items-center font-sans w-full">
      <Navbar filters={filters} setFilters={setFilters} />
      <PortfolioMain data={data} filters={filters} />
    </div>
  );
}
