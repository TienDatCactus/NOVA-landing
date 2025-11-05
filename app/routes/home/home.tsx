import type { Route } from "./+types/home";
import About from "./components/about";
import FAQs from "./components/faqs";
import { Footer } from "./components/footer";
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
      <About />
      <FAQs />
      <Footer/>
    </main>
  );
}
