"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
}

export function OrganizationUsers({ organizationId }: { organizationId: string }) {
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            try {
                // For now, using mock data
                const mockUsers = [
                    {
                        id: "1",
                        name: "John Doe",
                        email: `john@org-${organizationId}.com`,
                        role: "Admin",
                        createdAt: "2024-01-20"
                    },
                    {
                        id: "2",
                        name: "Jane Smith",
                        email: `jane@org-${organizationId}.com`,
                        role: "User",
                        createdAt: "2024-01-19"
                    },
                    {
                        id: "3",
                        name: "Bob Wilson",
                        email: `bob@org-${organizationId}.com`,
                        role: "User",
                        createdAt: "2024-01-18"
                    },
                ];

                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                setUsers(mockUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
                // You might want to show an error message to the user
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, [organizationId]);

    const handleRowClick = (userId: string) => {
        router.push(`/user/${userId}`);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-white/60">Loading users...</div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-white/80">Organization Users</h2>
            </div>

            <Table>
                <TableHeader>
                    <TableRow className="border-white/[0.02]">
                        <TableHead className="text-white/40 font-medium">Name</TableHead>
                        <TableHead className="text-white/40 font-medium">Email</TableHead>
                        <TableHead className="text-white/40 font-medium">Role</TableHead>
                        <TableHead className="text-white/40 font-medium">Date Created</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            className="border-white/[0.02] hover:bg-white/[0.02] cursor-pointer"
                            onClick={() => handleRowClick(user.id)}
                        >
                            <TableCell className="font-medium text-white/80">{user.name}</TableCell>
                            <TableCell className="text-white/60">{user.email}</TableCell>
                            <TableCell className="text-white/60">{user.role}</TableCell>
                            <TableCell className="text-white/60">{user.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
} 