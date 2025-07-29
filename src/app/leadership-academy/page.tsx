
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, CheckCircle, ShieldCheck, Star, Video } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const courses = [
  {
    title: "Foundations of Discipleship",
    description: "Learn the core principles of what it means to be a disciple and how to disciple others.",
    level: "Beginner",
    levelColor: "text-emerald-500",
    progress: 75,
    modules: 8,
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    title: "Leading a Small Group",
    description: "Practical skills for facilitating a vibrant and healthy small group that fosters growth.",
    level: "Intermediate",
    levelColor: "text-amber-500",
    progress: 40,
    modules: 10,
    icon: <Users className="h-6 w-6 text-sky-500" />
  },
  {
    title: "Digital Evangelism Strategies",
    description: "Explore how to use social media and digital tools to share the Gospel effectively online.",
    level: "Intermediate",
    levelColor: "text-amber-500",
    progress: 0,
    modules: 12,
    icon: <Video className="h-6 w-6 text-rose-500" />
  },
];

const earnedBadges = [
    { name: "Discipleship Starter", icon: <Star className="h-5 w-5 text-yellow-500" />, description: "Completed 'Foundations of Discipleship'" },
    { name: "Small Group Ready", icon: <Users className="h-5 w-5 text-sky-500" />, description: "Completed 'Leading a Small Group'" },
];

export default function LeadershipAcademyPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Leadership Academy</h1>
        <p className="text-muted-foreground">
          Equipping you with the skills to lead and multiply your impact.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Courses Section */}
        <div className="lg:col-span-2 space-y-6">
           <h2 className="text-2xl font-semibold">Available Courses</h2>
           {courses.map(course => (
             <Card key={course.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                             <Badge variant="secondary" className="mb-2">
                                <ShieldCheck className={`mr-1 h-4 w-4 ${course.levelColor}`} />
                                {course.level}
                            </Badge>
                            <CardTitle>{course.title}</CardTitle>
                            <CardDescription className="mt-1">{course.description}</CardDescription>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted shrink-0">
                            {course.icon}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                     <div className="flex justify-between items-center mb-1 text-sm text-muted-foreground">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} indicatorClassName="bg-primary" />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{course.modules} Modules</span>
                    <Button>
                        {course.progress > 0 ? "Continue Course" : "Start Course"}
                    </Button>
                </CardFooter>
             </Card>
           ))}
        </div>

        {/* Badges & Certificates Section */}
        <div className="space-y-6">
             <h2 className="text-2xl font-semibold">My Achievements</h2>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Award className="text-amber-500"/> My Badges</CardTitle>
                    <CardDescription>Your collection of earned awards.</CardDescription>
                </CardHeader>
                <CardContent>
                    <TooltipProvider>
                        <div className="flex flex-wrap gap-4">
                        {earnedBadges.map(badge => (
                             <Tooltip key={badge.name}>
                                <TooltipTrigger>
                                    <div className="flex flex-col items-center justify-center h-24 w-24 rounded-lg bg-muted/70 border-2 border-dashed hover:bg-muted transition-colors cursor-pointer">
                                        {badge.icon}
                                        <span className="text-xs text-center mt-2 text-muted-foreground">{badge.name}</span>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{badge.description}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                         <div className="flex flex-col text-center items-center justify-center h-24 w-24 rounded-lg bg-muted/40 border-2 border-dashed">
                             <p className="text-xs text-muted-foreground">Complete courses to earn more badges!</p>
                         </div>
                        </div>
                    </TooltipProvider>
                </CardContent>
             </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><CheckCircle className="text-emerald-500" /> Certificates</CardTitle>
                    <CardDescription>Download your course completion certificates.</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground py-8">
                    <p>Your certificates will appear here.</p>
                </CardContent>
             </Card>
        </div>
      </div>
    </div>
  );
}
