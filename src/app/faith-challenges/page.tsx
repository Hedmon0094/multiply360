
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, CheckSquare } from "lucide-react";

export default function FaithChallengesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Faith Challenges</h1>
        <p className="text-muted-foreground">
          Join campaigns that will stretch your faith and multiply your impact.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Coming Soon!</CardTitle>
          <CardDescription>
            The Faith Challenges section is currently in development. Get ready for exciting campaigns like the "7 Days of Witnessing" and "40-Day Prayer Journey."
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-center h-48 rounded-lg bg-muted/50 border border-dashed">
                <div className="text-center text-muted-foreground">
                     <div className="flex justify-center gap-4 mb-4">
                        <Flame className="h-8 w-8 text-primary" />
                        <CheckSquare className="h-8 w-8 text-emerald-500" />
                    </div>
                    <p>Track your progress in ministry campaigns and earn badges.</p>
                </div>
            </div>
        </CardContent>
      </Card>

    </div>
  );
}
