import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF8F5] px-4 font-sans text-[#231F20]">
      <div className="max-w-md text-center">
        <span className="font-serif text-xs font-bold uppercase tracking-widest text-[#7A1F2D]">
          BHTCC • Ballarat Hindu Temple
        </span>
        <h1 className="mt-2 text-7xl font-bold font-serif text-[#7A1F2D]">404</h1>
        <h2 className="mt-4 text-2xl font-serif font-semibold text-[#231F20]">Sacred Space Not Found</h2>
        <p className="mt-3 text-sm text-[#5C554E] leading-relaxed">
          The page or sanctuary section you are seeking does not exist or has been relocated within the masterplan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-none border border-[#7A1F2D] bg-[#7A1F2D] px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#FAF8F5] transition-all hover:bg-[#5E1521]"
          >
            Return to Sanctuary Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF8F5] px-4 text-[#231F20]">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-serif font-semibold tracking-tight text-[#7A1F2D]">
          Temple Experience Temporarily Unavailable
        </h1>
        <p className="mt-2 text-sm text-[#5C554E]">
          Something unexpected occurred while presenting this sanctuary section. Please refresh or return to the main hall.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border border-[#7A1F2D] bg-[#7A1F2D] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#FAF8F5] transition-colors hover:bg-[#5E1521]"
          >
            Reload Page
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-[#C5BBAF] bg-[#FAF8F5] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#231F20] transition-colors hover:bg-[#F3EFE9]"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ballarat Hindu Temple & Cultural Centre (BHTCC) | Regional Victoria" },
      {
        name: "description",
        content:
          "Ballarat Hindu Temple & Cultural Centre Incorporated (BHTCC) - Regional Victoria's traditional Vedic Hindu temple and community sanctuary on 5 peaceful acres at 110 Vaggs Rd, Ross Creek VIC.",
      },
      { name: "author", content: "BHTCC Incorporated" },
      { property: "og:title", content: "Ballarat Hindu Temple & Cultural Centre (BHTCC)" },
      {
        property: "og:description",
        content:
          "Establishing Regional Victoria's first traditional Hindu Temple and cultural community complex at 110 Vaggs Rd, Ross Creek.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#FAF8F5] text-[#231F20] antialiased selection:bg-[#7A1F2D]/15 selection:text-[#7A1F2D]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
