
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Target, Briefcase, Languages, ShieldCheck, Heart, MessageSquare, Award, Flame } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Mission Tracker",
      description: "Set and track your personal and group ministry goals.",
    },
    {
      icon: <Flame className="h-6 w-6 text-rose-500" />,
      title: "Faith Challenges",
      description: "Join national and regional challenges in prayer & outreach.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-amber-500" />,
      title: "Ministry Toolkit",
      description: "Access downloadable resources for evangelism & follow-up.",
    },
    {
      icon: <Languages className="h-6 w-6 text-emerald-500" />,
      title: "Language Hub",
      description: "Find content in Kiswahili, English, and other local dialects.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-sky-500" />,
      title: "Leadership Academy",
      description: "Grow your leadership through online spiritual courses.",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Partner's Corner",
      description: "Support and follow ministry projects across Kenya.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">About Multiply360</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Empowering disciples, leaders, and ministry partners for a generation on mission.
        </p>
      </header>
      
      <Card className="overflow-hidden">
        <CardContent className="p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">🕊️ What is Multiply360?</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Multiply360 is a purpose-built mobile and web application created to empower disciples, student leaders, and ministry workers across Kenya. Whether you're leading a campus outreach in Kisii, attending a discipleship training in Mombasa, or coordinating prayer in Turkana—this app helps you stay spiritually connected, organized, and mission-focused.
            </p>
            <blockquote className="mt-4 border-l-4 border-primary/50 pl-4 italic text-muted-foreground">
              Multiply360 supports the vision of Life Ministry Kenya (LMK): “Movements in every county so that everyone knows someone who truly follows Jesus.”
            </blockquote>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-3">🌍 Why This App?</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Ministry in Kenya spans 47 counties, diverse cultures, languages, and campuses—many of them in areas with limited connectivity or infrastructure. Multiply360 is designed to:
            </p>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>Record & track evangelism and discipleship in real-time or offline</li>
              <li>Access ministry tools like tracts, Jesus Film clips, and follow-up guides</li>
              <li>Strengthen the prayer network across regions</li>
              <li>Equip leaders through structured training and leadership courses</li>
              <li>Celebrate progress through badges, testimonies, and faith challenges</li>
            </ul>
          </section>
          
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-3">🙌 Who Is It For?</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-muted-foreground">
              <div className="flex items-center gap-3"><Users className="h-5 w-5 text-accent" /><p>Student leaders & campus fellowships</p></div>
              <div className="flex items-center gap-3"><Target className="h-5 w-5 text-accent" /><p>Field missionaries & county coordinators</p></div>
              <div className="flex items-center gap-3"><Heart className="h-5 w-5 text-accent" /><p>Prayer partners & intercessors</p></div>
              <div className="flex items-center gap-3"><Award className="h-5 w-5 text-accent" /><p>Donors, trainers, and ministry supporters</p></div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">⚙️ Key Features at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

           <Separator />
            
           <section>
            <h2 className="text-2xl font-semibold mb-3">💬 Testimonies from the Field</h2>
            <div className="space-y-4">
              <Card className="bg-muted/50 border-l-4 border-accent">
                <CardContent className="p-4">
                  <blockquote className="italic text-muted-foreground">“Using Multiply360 has made it easier to record our weekly evangelism. It even works when I'm offline!”</blockquote>
                  <p className="text-right font-semibold text-sm mt-2">- Faith, Campus Leader (Kisumu)</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-l-4 border-accent">
                <CardContent className="p-4">
                  <blockquote className="italic text-muted-foreground">“I followed the Leadership Academy course and now I help others lead!”</blockquote>
                  <p className="text-right font-semibold text-sm mt-2">- Daniel, Youth Minister (Nakuru)</p>
                </CardContent>
              </Card>
            </div>
           </section>

           <Separator />

          <section className="text-center">
            <h2 className="text-2xl font-semibold">📍 Built for Kenya. Connected to Eternity.</h2>
            <p className="text-base leading-relaxed text-muted-foreground mt-2">
              Multiply360 is localized, offline-ready, and spiritually intentional. Whether in Nairobi’s universities or the remotest rural village, this app is designed for one purpose: to help every believer become a multiplying disciple of Jesus.
            </p>
            <blockquote className="mt-6 text-xl italic text-primary font-serif">
                “Go therefore and make disciples of all nations…”<br />
                <span className="font-sans text-base not-italic tracking-wide text-muted-foreground">— Matthew 28:19</span>
            </blockquote>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}
