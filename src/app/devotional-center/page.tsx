
import { VerseOfTheDay } from "@/components/verse-of-the-day";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function DevotionalCenterPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Devotional Center</h1>
        <p className="text-muted-foreground">
          Your daily source of inspiration and spiritual growth.
        </p>
      </div>

       <VerseOfTheDay />

       <Card>
        <CardHeader>
          <CardTitle>More Devotionals Coming Soon!</CardTitle>
          <CardDescription>
            We're building out this section to include reflections, audio devotionals, and more.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-center h-32 rounded-lg bg-muted/50 border border-dashed">
                <div className="text-center text-muted-foreground">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p>Daily reflections and audio content will appear here.</p>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
