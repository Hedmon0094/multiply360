import { ActivityLogForm } from "@/components/activity-log-form";

export default function LogActivityPage() {
  return (
    <div className="flex flex-col gap-8">
       <div>
        <h1 className="text-3xl font-bold tracking-tight">Log an Activity</h1>
        <p className="text-muted-foreground">Fill in the details below to record a ministry event.</p>
      </div>
      <ActivityLogForm />
    </div>
  );
}
