import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function LeadershipPipeline() {
  const pipelineStages = [
    { name: "Win", count: 328, goal: 500, color: "bg-sky-500" },
    { name: "Build", count: 112, goal: 200, color: "bg-amber-500" },
    { name: "Send", count: 45, goal: 100, color: "bg-emerald-500" },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Discipleship Journey</CardTitle>
        <CardDescription>Progress in the Win-Build-Send strategy.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {pipelineStages.map((stage) => {
          const progress = (stage.count / stage.goal) * 100;
          return (
            <div key={stage.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-foreground">{stage.name}</span>
                <span className="text-sm font-medium text-muted-foreground">{stage.count} / {stage.goal}</span>
              </div>
              <Progress value={progress} className="h-3 [&>div]:bg-primary" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
