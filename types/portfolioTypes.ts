export interface PortfolioItemProps {
  id: number;
  image: string;        // path to image in /public/images
  title: string;
  technology: string[]; // list of technologies used
  version: string[];    // e.g. ["desktop", "mobile"]
  link: string;         // live demo URL
  repasitory: string;   // GitHub repo URL (consider renaming to "repository")
}

export interface PortfolioDataProps {
  portfolio: PortfolioItemProps[];
}