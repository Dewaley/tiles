import GameShelf from "@/components/home/GameShelf";
import HeroIntro from "@/components/home/HeroIntro";
import HomeBackground from "@/components/home/HomeBackground";
import HomeHeader from "@/components/home/HomeHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <HomeBackground>
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10">
          <HomeHeader />

          <section className="pt-14">
            <HeroIntro />
          </section>

          <GameShelf />
        </div>
      </HomeBackground>
    </main>
  );
}
