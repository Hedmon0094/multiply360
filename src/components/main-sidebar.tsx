
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
  BookOpen,
  Users,
  Heart,
  Sparkles,
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
  ];

  const resourcesItems = [
     {
      href: "/discipleship-resources",
      label: "Discipleship Resources",
      icon: <BookOpen />,
    },
     {
      href: "/prayer-network",
      label: "Prayer Network",
      icon: <Users />,
    },
    {
        href: "/impact-stories",
        label: "Impact Stories",
        icon: <Sparkles />,
    }
  ]

  return (
    <>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="p-2 bg-[url('/sidebar-bg.png')] bg-cover bg-center">
        <div className="bg-sidebar/80 backdrop-blur-sm rounded-lg h-full flex flex-col">
            <SidebarMenu className="flex-1">
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
              <SidebarSeparator className="my-2" />
               {resourcesItems.map((item) => (
                  <SidebarMenuItem key={`${item.href}-${item.label}`}>
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
             <div className="p-2">
                <Card className="bg-gradient-to-br from-primary/20 to-transparent border-primary/40 text-center">
                    <CardHeader className="p-4">
                        <CardTitle>Get Involved</CardTitle>
                        <CardDescription className="text-foreground/80">
                            Join us in prayer or support our mission financially.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex gap-2">
                        <Button size="sm" className="w-full bg-primary/80 hover:bg-primary">
                            <Heart className="mr-2 h-4 w-4"/>
                            Give
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                           <Users className="mr-2 h-4 w-4"/>
                            Pray
                        </Button>
                    </CardContent>
                </Card>
             </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarSeparator />
        <SidebarMenu>
           <SidebarMenuItem>
             <Link href="/settings">
                <SidebarMenuButton tooltip={{ children: 'Settings', side: 'right' }} isActive={pathname === '/settings'}>
                    <Settings />
                    <span>Settings</span>
                </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
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
