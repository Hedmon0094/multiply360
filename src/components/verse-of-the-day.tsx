import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export function VerseOfTheDay() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 text-primary-foreground shadow-lg">
        <BookOpen className="absolute -right-4 -bottom-4 h-24 w-24 text-white/10" />
        <CardContent className="p-6">
            <blockquote className="border-l-2 border-white/50 pl-4 italic text-base">
            "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
            </blockquote>
            <p className="text-right text-sm font-semibold mt-4">Matthew 28:19</p>
        </CardContent>
    </Card>
  );
}
