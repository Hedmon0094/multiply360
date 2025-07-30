
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
  {
    title: "Mentorship in the Marketplace",
    region: "Nairobi Region",
    theme: "Student Discipleship",
    storySnippet: "A group of young professionals started a weekly discipleship meeting in their office, creating a space for spiritual growth and accountability in the workplace.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Marketplace Ministry",
    likes: 88,
    date: "2024-08-28",
    dataAiHint: "professionals meeting",
  },
  {
    title: "First Generation Believers",
    region: "Eastern Region",
    theme: "Student Discipleship",
    storySnippet: "In a family that had never known Christ, a young student's conversion through a campus ministry has led to his entire family attending church and learning about Jesus.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Campus Ministry, Machakos",
    likes: 176,
    date: "2024-08-21",
    dataAiHint: "happy family",
  },
   {
    title: "Multiplying Groups in Kiambu",
    region: "Central Region",
    theme: "Student Discipleship",
    storySnippet: "A single discipleship group of four students has multiplied into five separate groups in just one semester, creating a movement of disciples making disciples.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Kiambu Team",
    likes: 204,
    date: "2024-08-15",
    dataAiHint: "students studying",
  },
  {
    title: "Film Screening in a Refugee Camp",
    region: "North Rift Region",
    theme: "Film Ministry",
    storySnippet: "The JESUS Film was shown in a refugee camp, bringing hope and the message of God's love to people who have lost everything. Many hearts were touched.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Humanitarian Aid Team",
    likes: 350,
    date: "2024-08-10",
    dataAiHint: "refugee camp",
  },
  {
    title: "A Chief's Heart is Changed",
    region: "Nyanza Region",
    theme: "Film Ministry",
    storySnippet: "After watching the JESUS Film, a local chief who was once opposed to the gospel gave his life to Christ and now advocates for church planting in his community.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Nyanza Field Team",
    likes: 412,
    date: "2024-08-05",
    dataAiHint: "african elder",
  },
  {
    title: "JESUS Film on a Boda Boda",
    region: "Western Region",
    theme: "Film Ministry",
    storySnippet: "Using a portable projector powered by a motorcycle battery, a team is taking the JESUS Film to the most remote villages, reaching people who have never heard the gospel.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Mobile Evangelism Unit",
    likes: 299,
    date: "2024-07-30",
    dataAiHint: "motorcycle night",
  },
  {
    title: "24/7 Prayer Chain for Elections",
    region: "National",
    theme: "Prayer",
    storySnippet: "During a tense election period, a nationwide 24/7 prayer chain was organized through the app, mobilizing thousands to pray for peace and a Godly outcome.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "National Prayer Team",
    likes: 540,
    date: "2024-07-25",
    dataAiHint: "kenya flag",
  },
  {
    title: "Healing after Community Prayer",
    region: "South Rift Region",
    theme: "Prayer",
    storySnippet: "A community came together to pray for a child suffering from a mysterious illness. After weeks of persistent prayer, the child was miraculously healed.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Nakuru Prayer Group",
    likes: 180,
    date: "2024-07-20",
    dataAiHint: "community hands",
  },
  {
    title: "Prayer for a Harvest",
    region: "Eastern Region",
    theme: "Prayer",
    storySnippet: "A region facing severe drought started a collective prayer movement for rain. Within a month, the rains came, opening doors for the gospel to be shared.",
    mediaType: "image",
    mediaUrl: "https://placehold.co/600x400.png",
    submittedBy: "Kitui Team",
    likes: 215,
    date: "2024-07-15",
    dataAiHint: "rain clouds",
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
