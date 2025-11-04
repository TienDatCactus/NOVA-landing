# NOVA Landing

A modern landing page built with React Router v7 (framework mode), Tailwind CSS, and shadcn/ui.

![NOVA Landing Page](https://github.com/user-attachments/assets/c459a82d-b6b8-42b8-a8a9-47571ad062eb)

## 🚀 Tech Stack

- **[React Router v7](https://reactrouter.com/)** - Modern framework mode for React applications with built-in routing, server-side rendering, and more
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind CSS
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling

## 📦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TienDatCactus/NOVA-landing.git
cd NOVA-landing
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

### Production Server

Start the production server:

```bash
npm run start
```

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## 📁 Project Structure

```
NOVA-landing/
├── app/
│   ├── components/        # React components
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utility functions
│   ├── routes/           # Route components
│   ├── root.tsx          # Root layout component
│   ├── routes.ts         # Routes configuration
│   └── tailwind.css      # Tailwind CSS styles with shadcn/ui theme
├── public/               # Static assets
├── build/                # Production build output
├── components.json       # shadcn/ui configuration
├── postcss.config.js     # PostCSS configuration
├── react-router.config.ts # React Router configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies and scripts
```

## 🎨 Adding shadcn/ui Components

To add new shadcn/ui components, you can manually create them in `app/components/ui/` following the [shadcn/ui documentation](https://ui.shadcn.com/docs/components).

Example components are available at:
- Button: `app/components/ui/button.tsx`

## 🔧 Configuration

### React Router v7

The project uses React Router v7 in framework mode, configured in `react-router.config.ts`. Routes are defined in `app/routes.ts`.

### Tailwind CSS

Tailwind configuration is in `tailwind.config.js` with shadcn/ui theme variables included. The CSS file is at `app/tailwind.css`.

### shadcn/ui

shadcn/ui is configured in `components.json` with the following settings:
- Style: default
- Base color: slate
- CSS variables: enabled
- Components path: `~/components`

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
