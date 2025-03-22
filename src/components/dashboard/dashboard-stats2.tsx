"use client";

import { Card } from "@/components/ui/card";
import { Building2, Users, FileText } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { useEffect, useState } from 'react';
import { getTotalOrganizationsCount, getTotalUsersCount } from '@/lib/firebase/stats';

// Add this interface for our custom tooltip props
interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
    active?: boolean;
    payload?: Array<{
        value: number;
        dataKey: string;
    }>;
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        const value = payload[0].value;
        const metric = payload[0].dataKey === 'reports' ? 'reports' : 'users';

        return (
            <div className="rounded-lg bg-black/90 backdrop-blur-xl border border-white/[0.1] px-4 py-2 shadow-xl">
                <p className="text-sm font-medium text-white/60 mb-1">{label}</p>
                <p className="text-2xl font-bold text-white">{value.toLocaleString()} {metric}</p>
            </div>
        );
    }
    return null;
};

export function DashboardStats() {
    const [totalOrganizations, setTotalOrganizations] = useState<number>(0);
    const [totalUsers, setTotalUsers] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [orgsCount, usersCount] = await Promise.all([
                    getTotalOrganizationsCount(),
                    getTotalUsersCount()
                ]);
                setTotalOrganizations(orgsCount);
                setTotalUsers(usersCount);
            } catch (error) {
                console.error('Error fetching dashboard stats:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    const monthlyData = [
        { month: 'Jan', reports: 3200, users: 850 },
        { month: 'Feb', reports: 4100, users: 920 },
        { month: 'Mar', reports: 3800, users: 980 },
        { month: 'Apr', reports: 4600, users: 1050 },
        { month: 'May', reports: 5200, users: 1150 },
        { month: 'Jun', reports: 4900, users: 1234 },
    ];

    const userGrowthData = monthlyData.map(({ month, users }) => ({ month, users }));

    if (isLoading) {
        return (
            <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="p-6">
                        <div className="animate-pulse">
                            <div className="h-4 bg-white/10 rounded w-1/3 mb-4"></div>
                            <div className="h-8 bg-white/10 rounded w-1/2"></div>
                        </div>
                    </Card>
                ))}
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-6">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-drodatOrange/10 rounded-lg">
                        <Building2 className="h-6 w-6 text-drodatOrange" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white/60">Total Organizations</p>
                        <p className="text-2xl font-bold text-white">{totalOrganizations.toLocaleString()}</p>
                    </div>
                </div>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Users className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white/60">Total Users</p>
                        <p className="text-2xl font-bold text-white">{totalUsers.toLocaleString()}</p>
                    </div>
                </div>
            </Card>

            <Card className="p-6">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <FileText className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white/60">Total Reports</p>
                        <p className="text-2xl font-bold text-white">24,500</p>
                    </div>
                </div>
            </Card>

            <Card className="col-span-full p-6">
                <h3 className="text-lg font-semibold mb-4">Monthly Reports</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={monthlyData}>
                            <defs>
                                <linearGradient id="reportsGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#FF6B00" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                            <XAxis dataKey="month" stroke="#ffffff60" />
                            <YAxis stroke="#ffffff60" />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="reports"
                                stroke="#FF6B00"
                                fillOpacity={1}
                                fill="url(#reportsGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            <Card className="col-span-full p-6">
                <h3 className="text-lg font-semibold mb-4">User Growth</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={userGrowthData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                            <XAxis dataKey="month" stroke="#ffffff60" />
                            <YAxis stroke="#ffffff60" />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="users" fill="#3B82F6" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
    );
} 