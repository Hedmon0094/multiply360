import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Target, ShieldCheck, Send } from "lucide-react";

export function LeadershipPipeline() {
  const pipelineStages = [
    { name: "Win", count: 328, icon: <Target className="h-8 w-8 text-accent" />, description: "Initial outreach & evangelism" },
    { name: "Build", count: 112, icon: <ShieldCheck className="h-8 w-8 text-accent" />, description: "Discipleship & growth" },
    { name: "Send", count: 45, icon: <Send className="h-8 w-8 text-accent" />, description: "Multiplying leaders" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leadership Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {pipelineStages.map((stage, index) => (
            <div key={stage.name} className="flex items-center gap-4">
              <Card className="flex-1 bg-secondary/50 border-dashed">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  {stage.icon}
                  <h3 className="text-lg font-semibold mt-2">{stage.name}</h3>
                  <p className="text-3xl font-bold">{stage.count}</p>
                  <p className="text-xs text-muted-foreground">{stage.description}</p>
                </CardContent>
              </Card>
              {index < pipelineStages.length - 1 && (
                 <ChevronRight className="h-8 w-8 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
