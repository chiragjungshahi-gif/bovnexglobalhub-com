import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bovnex Global Hub — BPO & Virtual Assistant Services from Nepal" },
      {
        name: "description",
        content:
          "Bovnex Global Hub is Nepal's emerging BPO & Virtual Assistant company helping US, UK and Australian businesses save 10–20 hours every week.",
      },
      { property: "og:title", content: "Bovnex Global Hub — People Behind Every Process" },
      {
        property: "og:description",
        content:
          "Outsource admin, payroll, accounting, AutoCAD and IT to a skilled dedicated team in Kathmandu, Nepal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-navy">404</h1>
        <p className="mt-4 text-foreground/70">This page doesn't exist.</p>
        <a href="/" className="mt-6 inline-block bg-navy text-navy-foreground px-6 py-3 rounded-full text-sm">
          Go home
        </a>
      </div>
    </div>
  );
}
