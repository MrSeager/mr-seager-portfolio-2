//Types
import { PortfolioDataProps } from "@/types/portfolioTypes";
//Components
import PortfolioItem from "./PortfolioItem";
//Animation
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioMainProps {
    data: PortfolioDataProps;
    filters: string[];
}

export default function PortfolioMain({ data, filters }: PortfolioMainProps) { 
    const filtered = data.portfolio.filter(item =>
        filters.length === 0 ||
        filters.every(f => item.technology.includes(f))
    );

    return (
        <motion.main
            layout
            className="grid grid-cols-1 auto-rows-max sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 bg-[#B2B2B2] shadow-lg w-full max-w-[100rem] flex-1 py-5 px-4"
            variants={{
                show: {
                    transition: {
                        staggerChildren: 0.02,
                    }
                }
            }}
            initial="hidden"
            animate="show"
        >
            <AnimatePresence>
                {filtered.map(item => (
                    <motion.div
                        key={item.id}
                        layout
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            show:   { opacity: 1, scale: 1 }
                        }}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        <PortfolioItem item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.main>
    );
}
