
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BarChart2 } from "lucide-react";

export default function PartnersCornerPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Partner's Corner</h1>
        <p className="text-muted-foreground">
          See the impact of your generosity and find ways to get involved.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Coming Soon!</CardTitle>
          <CardDescription>
            Our Partner's Corner is being built. Soon, you'll be able to see project updates, funding status, and give directly through the app.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-center h-48 rounded-lg bg-muted/50 border border-dashed">
                <div className="text-center text-muted-foreground">
                     <div className="flex justify-center gap-4 mb-4">
                        <Heart className="h-8 w-8 text-rose-500" />
                        <BarChart2 className="h-8 w-8 text-blue-500" />
                    </div>
                    <p>View impact reports and find opportunities to support the ministry.</p>
                </div>
            </div>
        </CardContent>
      </Card>

    </div>
  );
}
