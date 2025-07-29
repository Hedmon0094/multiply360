
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
      <main className="flex min-h-screen items-center justify-center bg-background">
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
            <SidebarInset>
                <Header />
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
        <Toaster />
    </ClientOnly>
  );
}
