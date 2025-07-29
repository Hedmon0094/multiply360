

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Heart, Target, Users, Megaphone, Download, PiggyBank } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const impactStats = [
  { title: "New Disciples", value: "328", change: "+15% this quarter", icon: <Users className="h-6 w-6 text-emerald-500" /> },
  { title: "Regions Supported", value: "8", change: "National Coverage", icon: <Target className="h-6 w-6 text-sky-500" /> },
  { title: "Lives Touched", value: "12,000+", change: "Through outreach events", icon: <Heart className="h-6 w-6 text-rose-500" /> },
  { title: "Leaders Equipped", value: "112", change: "In Win-Build-Send", icon: <Handshake className="h-6 w-6 text-amber-500" /> },
];

const projects = [
  {
    title: "Campus Outreach Initiative",
    description: "Equipping student leaders to reach their peers with the Gospel across 15 university campuses.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "university students",
    raised: 7500,
    goal: 10000,
    tag: "Student Discipleship"
  },
  {
    title: "JESUS Film Translation Project",
    description: "Translating the JESUS Film into two new local languages to make it accessible to more communities.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "outdoor cinema",
    raised: 4500,
    goal: 5000,
    tag: "Evangelism"
  }
];

export default function PartnersCornerPage() {
  return (
    <div className="flex flex-col gap-12 bg-amber-50/30 dark:bg-amber-900/10 -m-8 p-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-amber-800 dark:text-amber-200">Partner's Corner</h1>
        <p className="text-lg mt-2 text-muted-foreground">
          See the incredible impact of your generosity and find new ways to join us in ministry. Your partnership is changing lives across Kenya.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {impactStats.map(stat => (
          <Card key={stat.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stat.value}</p>
              <CardTitle className="text-lg mt-1">{stat.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Sponsorship */}
       <div>
         <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Where Your Support Goes</h2>
         <div className="grid lg:grid-cols-2 gap-8 items-start">
            {projects.map(project => {
                const progress = (project.raised / project.goal) * 100;
                return (
                     <Card key={project.title} className="shadow-lg transition-all duration-300 hover:shadow-2xl">
                        <CardHeader className="p-0">
                            <div className="relative h-56 w-full">
                                <Image 
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                    data-ai-hint={project.dataAiHint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-lg" />
                                <Badge variant="secondary" className="absolute top-4 right-4">{project.tag}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                            <div className="mt-4">
                                <Progress value={progress} indicatorClassName="bg-emerald-500" />
                                <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                                    <span>${project.raised.toLocaleString()} raised</span>
                                    <span>${project.goal.toLocaleString()} goal</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">
                                <Heart className="mr-2 h-4 w-4"/>
                                Support this Project
                            </Button>
                        </CardFooter>
                    </Card>
                )
            })}
         </div>
       </div>

      {/* Give & Grow Section */}
      <Card className="bg-amber-100/50 dark:bg-amber-800/20 border-amber-300/50 shadow-xl">
        <div className="grid md:grid-cols-2">
            <div className="p-8">
                <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100">Give & Grow</h2>
                <p className="mt-2 text-muted-foreground">
                    Your financial partnership is vital for advancing the Gospel. Choose a way to give that works for you.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                     <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-amber-50 shadow-md transition-colors duration-300">
                       <PiggyBank className="mr-2 h-5 w-5"/> One-Time Gift
                    </Button>
                    <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-amber-50 dark:border-amber-400 dark:text-amber-300 dark:hover:bg-amber-400 dark:hover:text-amber-900 transition-colors duration-300">
                       <Handshake className="mr-2 h-5 w-5"/> Monthly Partner
                    </Button>
                </div>
                 <p className="text-xs text-muted-foreground mt-4">Secure giving options coming soon.</p>
            </div>
            <div className="p-8 md:border-l border-t md:border-t-0 border-amber-300/50">
                 <h3 className="text-xl font-semibold">Partner Resources</h3>
                 <p className="text-muted-foreground mt-1">Access exclusive reports and updates.</p>
                 <div className="mt-4 space-y-3">
                    <button className="flex items-start gap-4 p-2 rounded-lg hover:bg-amber-200/50 dark:hover:bg-amber-800/40 w-full text-left transition-colors">
                        <Download className="h-5 w-5 text-amber-700 dark:text-amber-300 mt-1 shrink-0"/> 
                        <div>
                            <p className="font-semibold">Annual Impact Report 2023</p>
                            <p className="text-xs text-muted-foreground">Download the full PDF report.</p>
                        </div>
                    </button>
                    <button className="flex items-start gap-4 p-2 rounded-lg hover:bg-amber-200/50 dark:hover:bg-amber-800/40 w-full text-left transition-colors">
                        <Megaphone className="h-5 w-5 text-amber-700 dark:text-amber-300 mt-1 shrink-0"/> 
                         <div>
                            <p className="font-semibold">A Message from the Director</p>
                            <p className="text-xs text-muted-foreground">Watch the latest video update.</p>
                        </div>
                    </button>
                 </div>
            </div>
        </div>
      </Card>
    </div>
  );
}
