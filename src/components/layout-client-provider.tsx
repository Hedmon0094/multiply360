
"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/main-sidebar";
import { Header } from "@/components/header";
import { useEffect, useState } from "react";
import { Toaster } from "./ui/toaster";

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}


export function LayoutClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage = pathname === "/" || pathname === "/signup";

  if (isAuthPage) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/40">
        {children}
      </main>
    );
  }

  return (
    <ClientOnly>
        <SidebarProvider>
            <Sidebar>
                <MainSidebar />
            </Sidebar>
            <SidebarInset className="flex flex-col bg-[url('/background-pattern.svg')] bg-cover">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-background/90 backdrop-blur-sm">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
        <Toaster />
    </ClientOnly>
  );
}
