
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
  SidebarGroup,
  SidebarGroupLabel,
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
  Target,
  Calendar,
  ShieldCheck,
  Languages,
  Briefcase,
  Flame,
} from "lucide-react";
import { Logo } from "./logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function MainSidebar() {
  const pathname = usePathname();

  const mainMenuItems = [
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
  ];

  const growthToolsItems = [
     {
      href: "/mission-tracker",
      label: "Mission Tracker",
      icon: <Target />,
    },
     {
      href: "/faith-challenges",
      label: "Faith Challenges",
      icon: <Flame />,
    },
  ];

  const communityItems = [
     {
      href: "/prayer-network",
      label: "Prayer Network",
      icon: <Users />,
    },
    {
        href: "/impact-stories",
        label: "Impact Stories",
        icon: <Sparkles />,
    },
     {
      href: "/events-trainings",
      label: "Events & Trainings",
      icon: <Calendar />,
    },
  ];

  const resourcesItems = [
    {
      href: "/devotional-center",
      label: "Devotional Center",
      icon: <BookOpen />,
    },
     {
      href: "/ministry-toolkit",
      label: "Ministry Toolkit",
      icon: <Briefcase />,
    },
  ]

  const partnerItems = [
      {
          href: "/partners-corner",
          label: "Partner's Corner",
          icon: <Heart />,
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
              <SidebarGroup>
                {mainMenuItems.map((item) => (
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
              </SidebarGroup>
              <SidebarSeparator className="my-1" />
              <SidebarGroup>
                <SidebarGroupLabel>Growth Tools</SidebarGroupLabel>
                 {growthToolsItems.map((item) => (
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
              </SidebarGroup>
              <SidebarSeparator className="my-1" />
              <SidebarGroup>
                <SidebarGroupLabel>Community</SidebarGroupLabel>
                 {communityItems.map((item) => (
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
              </SidebarGroup>
               <SidebarSeparator className="my-1" />
              <SidebarGroup>
                <SidebarGroupLabel>Resources</SidebarGroupLabel>
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
              </SidebarGroup>
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
                        <Button size="sm" className="w-full bg-primary/80 hover:bg-primary" asChild>
                          <Link href="/partners-corner">
                            <Heart className="mr-2 h-4 w-4"/>
                            Give
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" className="w-full" asChild>
                           <Link href="/prayer-network">
                           <Users className="mr-2 h-4 w-4"/>
                            Pray
                           </Link>
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
