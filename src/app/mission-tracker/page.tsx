
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Flame, PlusCircle, Target, Users, Award } from "lucide-react";

const personalGoals = [
    {
        title: "Share the Gospel",
        description: "Share your faith with 5 people this week.",
        current: 3,
        goal: 5,
        icon: <Users className="h-6 w-6 text-sky-500" />,
        color: "bg-sky-500"
    },
    {
        title: "Prayer Streak",
        description: "Pray for the nation for 7 consecutive days.",
        current: 4,
        goal: 7,
        icon: <Flame className="h-6 w-6 text-amber-500" />,
        color: "bg-amber-500"
    },
    {
        title: "Follow-up a New Believer",
        description: "Complete the first 3 sessions of 'Foundations'.",
        current: 1,
        goal: 3,
        icon: <Target className="h-6 w-6 text-emerald-500" />,
        color: "bg-emerald-500"
    }
];

const groupChallengeParticipants = [
    { rank: 1, name: "Mary Wanjiru", region: "Central Region", progress: 92, avatar: "https://placehold.co/40x40.png" },
    { rank: 2, name: "David Koech", region: "South Rift", progress: 85, avatar: "https://placehold.co/40x40.png" },
    { rank: 3, name: "John Omondi", region: "Nairobi", progress: 78, avatar: "https://placehold.co/40x40.png" },
    { rank: 4, name: "Grace Akinyi", region: "Coast Region", progress: 75, avatar: "https://placehold.co/40x40.png" },
];


export default function MissionTrackerPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Mission Tracker</h1>
            <p className="text-muted-foreground">
            Set goals, track your progress, and celebrate your impact.
            </p>
        </div>
        <Button size="lg">
            <PlusCircle className="mr-2 h-5 w-5" />
            Set a New Goal
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Target className="text-primary" />
                    Your Active Missions
                </CardTitle>
                <CardDescription>
                    Here is your personal progress on the goals you've set.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {personalGoals.map((goal) => {
                    const progressValue = (goal.current / goal.goal) * 100;
                    return (
                        <div key={goal.title} className="p-4 rounded-lg border bg-muted/50">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-inner">
                                    {goal.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">{goal.title}</h3>
                                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Progress value={progressValue} indicatorClassName={goal.color} />
                                <div className="flex justify-between items-center mt-1">
                                    <span className={`text-sm font-medium`} style={{color: `hsl(var(--${goal.color.replace('bg-','').split('-')[0]}))`} }>{goal.current} of {goal.goal} completed</span>
                                     {progressValue === 100 && <Award className="h-5 w-5 text-yellow-500" />}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Users className="text-primary" />
                    Group Challenge: Campus Outreach
                </CardTitle>
                <CardDescription>
                    Leaderboard for the "Each One, Reach One" campus campaign.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Rank</TableHead>
                        <TableHead>Leader</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead className="text-right">Progress</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {groupChallengeParticipants.map((p) => (
                        <TableRow key={p.rank}>
                            <TableCell className="font-bold text-lg">{p.rank}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={p.avatar} alt={p.name} data-ai-hint="user avatar" />
                                        <AvatarFallback>{p.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">{p.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>{p.region}</TableCell>
                            <TableCell className="text-right font-semibold">{p.progress}%</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}

