import type { Route } from "./+types/home";
import About from "./components/about";
import FAQs from "./components/faqs";
import { Footer } from "./components/footer";
import { Gallery6 } from "./components/gallery";
import AgencyHero from "./components/hero";
import ClientFeedback from "./components/testimonial";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

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
