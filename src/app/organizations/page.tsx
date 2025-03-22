import { OrganizationsTable } from "@/components/organizations/organizations-table";
import { Card } from "@/components/ui/card";

export default function OrganizationsPage() {
    return (
        <div className="space-y-10">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight text-white/90">Organizations</h1>
                <p className="text-white/40">Manage and monitor all organizations in the system.</p>
            </div>

            <Card className="p-6">
                <OrganizationsTable />
            </Card>
        </div>
    );
} 