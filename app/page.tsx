import Faq from "@/components/faq/Faq";
import LandingPage from "@/components/Hero/LandingPage";
import Introduction from "@/components/Introduction";
import FestivalOverview from "@/components/Overview/FestivalOverview";
import FetivalStatScroll from "@/components/Stats/FetivalStatScroll";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <section>
        <LandingPage />
      </section>
      <section>
        <Introduction />
      </section>
      <section>
        <FetivalStatScroll />
      </section>
      <section className=" mx-auto max-w-5xl">
        <FestivalOverview />
      </section>
      <section className=" mx-auto max-w-5xl py-10">
        <Faq />
      </section>
    </div>
  );
}
