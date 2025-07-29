
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function EventsTrainingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Events & Trainings</h1>
        <p className="text-muted-foreground">
          Find upcoming events, register for trainings, and watch past sessions.
        </p>
      </div>

       <Card>
        <CardHeader>
          <CardTitle>Coming Soon!</CardTitle>
          <CardDescription>
            The Events & Trainings calendar is under construction. Soon, you'll be able to discover and RSVP for events right here.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-center h-48 rounded-lg bg-muted/50 border border-dashed">
                <div className="text-center text-muted-foreground">
                    <Calendar className="h-10 w-10 mx-auto mb-4 text-primary" />
                    <p>A calendar view and event feed will be available here.</p>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
