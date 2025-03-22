import { DashboardWrapper } from "@/components/dashboard/dashboard-wrapper";

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-white/90">Dashboard Overview</h1>
        <p className="text-white/40">Monitor your organization&apos;s performance and activity in real-time.</p>
      </div>

      <DashboardWrapper />
    </div>
  );
}
