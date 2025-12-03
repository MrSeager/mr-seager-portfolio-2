import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  // #027373 #038C7F #A9D9D0 #F2E7DC #0D0D0D
  const res = await fetch("http://localhost:3000/data/portfolio.json"); 
  // In production, just "/data/portfolio.json"
  const data = await res.json();

  return (
    <div className="bg-[#F2E7DC] flex items-center justify-center font-sans">
      <Navbar />
      <main className="bg-[#F2E7DC] h-[1500px] shadow-lg flex w-full max-w-[100rem] flex-col items-center justify-between py-32 px-16">
        {data.portfolio.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>Tech: {item.technology.join(", ")}</p>
            <a href={item.link} target="_blank">Live Demo</a>
            <a href={item.repasitory} target="_blank">Repo</a>
          </div>
        ))}
      </main>
    </div>
  );
}
