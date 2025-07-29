
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Megaphone, Send, UserPlus, Users } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const prayerPoints = [
    { id: 1, category: "National", title: "Unity in the Nation", text: "Pray for peace and unity across Kenya, especially among its leaders and diverse communities.", count: 128 },
    { id: 2, category: "Campus Ministry", title: "Student Outreach in Nairobi", text: "Pray for the upcoming campus outreach events in the Nairobi region, that many students would come to faith.", count: 212 },
    { id: 3, category: "Leadership", title: "Wisdom for LMK Leaders", text: "Pray for wisdom and guidance for all Life Ministry Kenya leaders as they make strategic decisions.", count: 98 },
];

const praiseReports = [
    { id: 1, title: "Successful Coast Region Conference", text: "We praise God for a successful conference in the Coast Region, where 45 leaders were trained and equipped for ministry." },
    { id: 2, title: "Healing for a Team Member's Family", text: "A field staff member's mother was healed from a long-term illness. We thank God for His healing power!" },
    { id: 3, title: "New Discipleship Group in Eldoret", text: "A new discipleship group was started in Eldoret, with 8 new believers eager to grow in their faith." },
];

export default function PrayerNetworkPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Prayer Network</h1>
        <p className="text-muted-foreground">
          Join us in prayer for the nation, our teams, and the harvest.
        </p>
      </div>

      <Tabs defaultValue="points" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
          <TabsTrigger value="points">Prayer Points</TabsTrigger>
          <TabsTrigger value="praise">Praise Wall</TabsTrigger>
          <TabsTrigger value="submit">Submit a Prayer</TabsTrigger>
        </TabsList>
        
        <TabsContent value="points">
            <Card className="bg-transparent shadow-none border-none">
                <CardHeader>
                    <CardTitle>This Week's Prayer Focus</CardTitle>
                    <CardDescription>Join the LMK community in focused prayer. Click "I Prayed" to let us know you're standing with us.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                {prayerPoints.map(point => (
                     <div key={point.id} className="rounded-lg border bg-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-grow">
                            <Badge variant="secondary" className="mb-2">{point.category}</Badge>
                            <h3 className="font-semibold">{point.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{point.text}</p>
                        </div>
                        <Button variant="outline" className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                            <Heart className="h-4 w-4 text-rose-500 transition-transform group-hover:scale-110" /> 
                            <span>I Prayed ({point.count})</span>
                        </Button>
                    </div>
                ))}
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="praise">
           <Card className="bg-transparent shadow-none border-none">
                <CardHeader>
                    <CardTitle>Praise Wall</CardTitle>
                    <CardDescription>See how God is at work! Celebrate the testimonies of His faithfulness across the ministry.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {praiseReports.map(report => (
                        <div key={report.id} className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-500/10 rounded-r-lg">
                             <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">{report.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{report.text}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="submit">
            <Card>
                <CardHeader>
                    <CardTitle>Submit a Prayer Request</CardTitle>
                    <CardDescription>Share your prayer needs with the community. Requests can be submitted anonymously.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="prayer-title">Prayer Title</Label>
                        <Input id="prayer-title" placeholder="e.g., Healing for my mother" />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="prayer-request">Your Prayer Request</Label>
                        <Textarea id="prayer-request" placeholder="Please provide details about your prayer request..." rows={5} />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="prayer-region">Region (Optional)</Label>
                        <Input id="prayer-region" placeholder="e.g., Central Region" />
                    </div>
                    <Button className="w-full sm:w-auto">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Anonymously
                    </Button>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
