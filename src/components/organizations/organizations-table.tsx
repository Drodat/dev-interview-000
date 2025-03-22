"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getOrganizations } from '@/lib/data/organizations';
import { useRouter } from "next/navigation";

export function OrganizationsTable() {
    const organizations = getOrganizations();
    const router = useRouter();

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow className="border-white/[0.02]">
                        <TableHead className="text-white/40 font-medium">Organization</TableHead>
                        <TableHead className="text-white/40 font-medium">Users</TableHead>
                        <TableHead className="text-white/40 font-medium">Status</TableHead>
                        <TableHead className="text-white/40 font-medium">Date Created</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {organizations.map((org) => (
                        <TableRow 
                            key={org.id} 
                            className="border-white/[0.02] hover:bg-white/[0.02] cursor-pointer"
                            onClick={() => router.push(`/organizations/${org.id}`)}
                        >
                            <TableCell className="font-medium text-white/80">{org.name}</TableCell>
                            <TableCell className="text-white/60">{org.users}</TableCell>
                            <TableCell>
                                <Badge
                                    variant={org.status === 'active' ? 'default' : 'secondary'}
                                    className="bg-drodatOrange/10 text-drodatOrange border-0 font-medium"
                                >
                                    {org.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-white/60">{new Date(org.lastActive).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
} 