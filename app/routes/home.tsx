import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NOVA Landing" },
    { name: "description", content: "Welcome to NOVA Landing Page!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to NOVA
        </h1>
        <p className="text-xl text-white/90 mb-8">
          React Router v7 + Tailwind CSS + shadcn/ui
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button asChild variant="outline" size="lg" className="bg-white hover:bg-gray-100">
            <a
              href="https://reactrouter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router Docs
            </a>
          </Button>
          <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900">
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind Docs
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui Docs
            </a>
          </Button>
        </div>
        <div>
          <Button asChild variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            <Link to="/about">Learn More →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
