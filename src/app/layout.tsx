import type { Metadata } from "next";
import { AppProviders } from "@/core/providers/app-providers";
import { AppShell } from "@/components/layouts/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "G-Scores | THPT 2024",
  description: "National high school exam score lookup and statistics for 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="h-full overflow-hidden antialiased">
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
