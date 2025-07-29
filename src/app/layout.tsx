import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LayoutClientProvider } from "@/components/layout-client-provider";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mkulima Connect",
  description: "Connecting field leaders, staff, and disciples for Life Ministry Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ptSans.variable} font-sans antialiased`}>
        <LayoutClientProvider>{children}</LayoutClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
