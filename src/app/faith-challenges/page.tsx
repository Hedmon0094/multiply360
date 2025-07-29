
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, CheckSquare, Trophy, PlusCircle, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const activeChallenges = [
    {
        title: "7-Day Witnessing Challenge",
        description: "Share your faith journey with one person each day for a week.",
        day: 4,
        totalDays: 7,
        progress: 57,
        icon: <Flame className="h-6 w-6 text-rose-500" />,
        color: "bg-rose-500"
    },
     {
        title: "40-Day Prayer Journey",
        description: "Join the national prayer movement for spiritual revival.",
        day: 22,
        totalDays: 40,
        progress: 55,
        icon: <Users className="h-6 w-6 text-sky-500" />,
        color: "bg-sky-500"
    }
]

const completedBadges = ["Prayer Warrior", "Evangelism Starter", "Discipleship 101"];

export default function FaithChallengesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Faith Challenges</h1>
          <p className="text-muted-foreground">
            Join campaigns that will stretch your faith and multiply your impact.
          </p>
        </div>
         <Button size="lg">
            <PlusCircle className="mr-2 h-5 w-5" />
            Join a Challenge
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg border-primary/20 bg-primary/5 dark:bg-primary/10">
            <CardHeader>
                <CardTitle>🔥 Active Challenges</CardTitle>
                <CardDescription>Your current progress in ongoing ministry campaigns.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {activeChallenges.map(challenge => (
                    <div key={challenge.title} className="p-4 rounded-xl border bg-background/80 shadow-inner">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted shadow-inner">
                                {challenge.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold">{challenge.title}</h3>
                                <p className="text-sm text-muted-foreground">{challenge.description}</p>
                            </div>
                             <Button variant="outline" size="sm">
                                <CheckSquare className="mr-2 h-4 w-4 text-accent"/> Check In
                            </Button>
                        </div>
                        <div className="mt-4">
                            <Progress value={challenge.progress} indicatorClassName={challenge.color} />
                            <p className="text-sm text-muted-foreground mt-1">Day {challenge.day} of {challenge.totalDays}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card className="shadow-lg border-amber-500/20 bg-amber-500/5 dark:bg-amber-900/20">
            <CardHeader>
                <CardTitle>🏆 Your Badges</CardTitle>
                <CardDescription>Celebrate your completed faith challenges and milestones.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-4">
                    {completedBadges.map(badge => (
                        <Badge key={badge} variant="secondary" className="text-lg py-2 px-4 border-2 border-amber-300/50 bg-amber-200/50 text-amber-800 hover:bg-amber-200/80 dark:bg-amber-800/20 dark:text-amber-200 dark:border-amber-700/50 dark:hover:bg-amber-800/40">
                             <Trophy className="mr-2 h-5 w-5 text-amber-600 dark:text-amber-400" /> {badge}
                        </Badge>
                    ))}
                     <div className="flex items-center justify-center h-16 w-full rounded-lg bg-muted/50 border-2 border-dashed mt-2">
                        <p className="text-muted-foreground text-sm">More badges will appear here as you complete challenges!</p>
                     </div>
                </div>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}
