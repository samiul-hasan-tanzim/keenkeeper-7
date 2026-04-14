import Friends from "@/components/Pages/Home/HomePage/Friends/Friends";
import Hero from "@/components/Pages/Home/HomePage/Hero/Hero";
import Stats from "@/components/Pages/Home/HomePage/Stats/Stats";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <Hero />
      <Stats />
      <p className="container mx-auto w-[95%] border border-t border-black/10 mt-10"></p>
      <Friends />
    </div>
  );
}
