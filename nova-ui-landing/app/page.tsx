import About from "@/components/home/about";
import FAQs from "@/components/home/faqs";
import { Footer } from "@/components/home/footer";
import { Gallery6 } from "@/components/home/gallery";
import AgencyHero from "@/components/home/hero";
import ClientFeedback from "@/components/home/testimonial";

export default function Home() {
  return (
    <main className="flex flex-col gap-4" >
      <AgencyHero />
      <ClientFeedback />  
      <Gallery6 />
      <About />
      <FAQs />
      <Footer/>
    </main>
  );
}