"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  FileText,
  Bot,
  Settings,
  LogOut,
  BadgeHelp,
} from "lucide-react";
import { Logo } from "./logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function MainSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard />,
    },
    {
      href: "/log-activity",
      label: "Log Activity",
      icon: <FileText />,
    },
    {
      href: "/summarize",
      label: "AI Summarizer",
      icon: <Bot />,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <Settings />,
    },
  ];

  return (
    <>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label, side: "right" }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarSeparator />
        <div className="px-2 py-2">
          <Card className="bg-transparent border-dashed">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>
                Check our documentation or contact support.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                <BadgeHelp className="mr-2 h-4 w-4"/>
                Support
              </Button>
            </CardContent>
          </Card>
        </div>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
             <Link href="/">
                <SidebarMenuButton tooltip={{ children: 'Logout', side: 'right' }}>
                    <LogOut />
                    <span>Logout</span>
                </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
