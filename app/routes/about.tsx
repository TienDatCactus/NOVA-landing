import type { Route } from "./+types/about";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - NOVA Landing" },
    { name: "description", content: "About NOVA Landing Page" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About NOVA</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              This project demonstrates a complete setup of React Router v7 in framework mode,
              integrated with Tailwind CSS and shadcn/ui components.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Server-side rendering (SSR) with React Router v7</li>
              <li>Type-safe routing with TypeScript</li>
              <li>Beautiful UI components from shadcn/ui</li>
              <li>Utility-first styling with Tailwind CSS</li>
              <li>Fast development with Vite</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-4">
              Check the README.md file for installation instructions and available commands.
            </p>

            <div className="mt-8">
              <Button asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
