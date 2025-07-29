
import { ImpactStoryCard } from "@/components/impact-story-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { lmkRegions } from "@/lib/data";
import { Filter, PlusCircle } from "lucide-react";

const stories = [
  {
    title: "From Doubt to Campus Leader",
    region: "Nairobi Region",
    theme: "Student Discipleship",
    storySnippet: "A first-year student who was skeptical about faith attended a discipleship group out of curiosity. Today, she leads that same group, mentoring over 20 new believers...",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Campus Staff, Nairobi",
    likes: 142,
    date: "2024-09-15",
    dataAiHint: "student group",
  },
  {
    title: "JESUS Film Transforms a Village",
    region: "Western Region",
    theme: "Film Ministry",
    storySnippet: "In a remote village in Bungoma, a JESUS Film showing brought over 300 people together. The gospel message resonated deeply, and a new church plant was born from the follow-up.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "JESUS Film Team",
    likes: 289,
    date: "2024-09-12",
    dataAiHint: "village outdoors",
  },
  {
    title: "Digital Outreach Reaches the Unseen",
    region: "Coast Region",
    theme: "Digital Outreach",
    storySnippet: "Using social media, our digital strategies team connected with a young professional in Mombasa who felt isolated. Through online mentorship, he found community and purpose.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Digital Strategies Team",
    likes: 95,
    date: "2024-09-09",
    dataAiHint: "person phone",
  },
   {
    title: "Prayer Walk Ignites a Community",
    region: "South Rift Region",
    theme: "Prayer",
    storySnippet: "A simple prayer walk through a neighborhood in Nakuru led to conversations with families, opening doors for home fellowships and ongoing spiritual support.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Field Staff, Nakuru",
    likes: 112,
    date: "2024-09-05",
    dataAiHint: "people praying",
  },
];

const storyThemes = ["Student Discipleship", "Film Ministry", "Digital Outreach", "Prayer", "Community Development", "Leadership Training"];

export default function ImpactStoriesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Impact Stories</h1>
        <p className="text-muted-foreground">
          See how God is at work across Kenya. Real stories, real transformation.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center p-4 rounded-lg bg-muted/70 border">
          <div className="flex items-center gap-2 text-primary font-semibold w-full md:w-auto">
            <Filter className="h-5 w-5"/>
            <span>Filter Stories:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full flex-1">
             <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Filter by Region" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    {lmkRegions.map(region => (
                        <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Filter by Theme" />
                </SelectTrigger>
                <SelectContent>
                     <SelectItem value="all">All Themes</SelectItem>
                    {storyThemes.map(theme => (
                        <SelectItem key={theme} value={theme}>{theme}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
           <div className="w-full md:w-auto">
             <Button className="w-full">
                <PlusCircle className="mr-2 h-4 w-4"/>
                Submit a Story
            </Button>
           </div>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        {stories.map((story) => (
            <ImpactStoryCard key={story.title} story={story} />
        ))}
      </div>
    </div>
  );
}
