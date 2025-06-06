"use client"

import { Navbar } from "./navbar";
import { useTranslation } from "@/lib/i18n";

export function Layout({ children }) {
  const { t } = useTranslation();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t">
        <div className="container max-w-[1980px] flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t.title}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 