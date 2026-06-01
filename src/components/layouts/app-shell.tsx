import { Sidebar } from "@/components/layouts/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-g-page md:flex-row">
      <Sidebar />
      <main className="mt-8 min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-4 pb-6 pt-6 sm:mt-10 sm:px-6 sm:pb-8 sm:pt-8">
        {children}
      </main>
    </div>
  );
}
