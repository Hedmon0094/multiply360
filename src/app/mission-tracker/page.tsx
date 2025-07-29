
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Target, User, Users } from "lucide-react";

export default function MissionTrackerPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mission Tracker</h1>
        <p className="text-muted-foreground">
          Set goals, track your progress, and celebrate your impact.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Coming Soon!</CardTitle>
          <CardDescription>
            The Mission Tracker is under construction. Soon, you'll be able to set personal and group goals for evangelism, discipleship, and prayer right here.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-center h-48 rounded-lg bg-muted/50 border border-dashed">
                <div className="text-center text-muted-foreground">
                    <div className="flex justify-center gap-4 mb-4">
                        <Target className="h-8 w-8 text-primary" />
                        <Users className="h-8 w-8 text-emerald-500" />
                        <Flame className="h-8 w-8 text-amber-500" />
                    </div>
                    <p>Track your evangelism goals, discipleship journey, and prayer streaks.</p>
                </div>
            </div>
        </CardContent>
      </Card>

    </div>
  );
}
