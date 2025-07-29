import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export function VerseOfTheDay() {
  return (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">Verse of the Day</CardTitle>
            <BookOpen className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <blockquote className="border-l-2 pl-4 italic text-sm">
            "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
            </blockquote>
            <p className="text-right text-xs font-semibold mt-2">Matthew 28:19</p>
        </CardContent>
    </Card>
  );
}
