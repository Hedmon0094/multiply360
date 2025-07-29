import { SummarizerTool } from "@/components/summarizer-tool";

export default function SummarizePage() {
  return (
    <div className="flex flex-col gap-8">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Summarizer</h1>
            <p className="text-muted-foreground">
                Get quick, translated summaries of your field notes.
            </p>
        </div>
        <SummarizerTool />
    </div>
  );
}
