"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "@/components/layouts/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);

  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-g-page md:flex-row">
      <header className="relative z-50 flex shrink-0 items-center justify-between border-b border-g-border bg-g-page px-3 py-3 min-[440px]:px-4 md:hidden">
        <Link
          href="/dashboard"
          className="text-xl font-bold tracking-wide text-g-text min-[440px]:text-2xl"
        >
          G-Scores
        </Link>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-g-border bg-g-sidebar text-g-text shadow-md transition hover:bg-g-sidebar-hover active:scale-95"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="app-sidebar"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
        >
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
            className="h-5 w-5"
          />
        </button>
      </header>

      <button
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-label="Đóng menu"
      />

      <div
        id="app-sidebar"
        className={`fixed inset-y-0 right-0 z-40 w-[min(17.5rem,88vw)] transform transition-transform duration-300 ease-out md:static md:z-20 md:h-full md:w-56 md:shrink-0 md:translate-x-0 lg:w-64 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Sidebar onNavigate={() => setMenuOpen(false)} />
      </div>

      <main className="min-h-0 w-full min-w-0 flex-1 overflow-x-hidden overflow-y-auto px-3 pb-6 pt-4 min-[440px]:px-4 min-[440px]:pt-5 md:px-6 md:pb-8 md:pt-8">
        {children}
      </main>
    </div>
  );
}
