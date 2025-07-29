"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Languages, Loader2, Sparkles } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function SummarizerTool() {
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("swahili");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      setSummary("Please enter some text to summarize.");
      return;
    }
    setIsLoading(true);
    setSummary("");
    
    // Simulate AI call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const generatedSummary = `AI Summary in ${language.charAt(0).toUpperCase() + language.slice(1)}: Based on the provided notes, the outreach in Nairobi was successful, with over 50 attendees. Key challenges included transportation issues. The main feedback was a request for more Bibles. Follow-up is scheduled for next week. (This is a simulated AI response.)`;
    setSummary(generatedSummary);
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Field Notes AI Summarizer</CardTitle>
        <CardDescription>
          Paste your activity notes below. Our AI will summarize them and translate to a local language for easier understanding.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid w-full gap-2">
          <Textarea 
            placeholder="Type or paste your field notes here..." 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={8}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
            <div>
                <label className="text-sm font-medium mb-2 block">Translate to</label>
                <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                        <Languages className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="swahili">Kiswahili</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="luhya">Luhya</SelectItem>
                        <SelectItem value="luo">Luo</SelectItem>
                        <SelectItem value="kalenjin">Kalenjin</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-end">
                <Button onClick={handleSummarize} disabled={isLoading} className="w-full">
                {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                )}
                Summarize & Translate
                </Button>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        {summary && (
            <Alert>
                <Bot className="h-4 w-4" />
                <AlertTitle>AI Generated Summary</AlertTitle>
                <AlertDescription className="prose prose-sm dark:prose-invert max-w-none">
                    {summary}
                </AlertDescription>
            </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
