"use client";

import { Card } from "@/components/ui/card";
import { Building2, Users, FileText } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { getMonthlyReports, getUserGrowth } from '@/lib/data/dashboard';
import { getTotalOrganizationsCount, getTotalUsersCount } from '@/lib/firebase/stats';
import { useEffect, useState } from "react";

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
    const monthlyData = getMonthlyReports();
    const userGrowthData = getUserGrowth();
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
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="overflow-hidden group hover:border-white/[0.05] transition-all">
                    <div className="p-8">
                        <div className="flex justify-between items-start">
                            <div className="space-y-3">
                                <p className="text-sm font-medium text-white/40">Total Organizations</p>
                                <h3 className="text-4xl font-semibold tracking-tight text-white">{totalOrganizations.toLocaleString()}</h3>
                                <p className="text-sm text-drodatOrange">+12% from last month</p>
                            </div>
                            <Building2 className="h-6 w-6 text-drodatOrange opacity-50 group-hover:opacity-80 transition-opacity" />
                        </div>
                    </div>
                </Card>

                <Card className="overflow-hidden group hover:border-white/[0.05] transition-all">
                    <div className="p-8">
                        <div className="flex justify-between items-start">
                            <div className="space-y-3">
                                <p className="text-sm font-medium text-white/40">Total Users</p>
                                <h3 className="text-4xl font-semibold tracking-tight text-white">{totalUsers.toLocaleString()}</h3>
                                <p className="text-sm text-drodatOrange">+8% from last month</p>
                            </div>
                            <Users className="h-6 w-6 text-drodatOrange opacity-50 group-hover:opacity-80 transition-opacity" />
                        </div>
                    </div>
                </Card>

                <Card className="overflow-hidden group hover:border-white/[0.05] transition-all">
                    <div className="p-8">
                        <div className="flex justify-between items-start">
                            <div className="space-y-3">
                                <p className="text-sm font-medium text-white/40">Reports Pulled</p>
                                <h3 className="text-4xl font-semibold tracking-tight text-white">45.2k</h3>
                                <p className="text-sm text-drodatOrange">+15% from last month</p>
                            </div>
                            <FileText className="h-6 w-6 text-drodatOrange opacity-50 group-hover:opacity-80 transition-opacity" />
                        </div>
                    </div>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                    <h3 className="text-lg font-medium text-white/80 mb-4">Monthly Reports</h3>
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
                                <Tooltip
                                    cursor={{ stroke: '#ffffff20' }}
                                    content={<CustomTooltip />}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="reports"
                                    stroke="#FF6B00"
                                    fill="url(#reportsGradient)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card className="p-6">
                    <h3 className="text-lg font-medium text-white/80 mb-4">User Growth</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={userGrowthData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                <XAxis dataKey="month" stroke="#ffffff60" />
                                <YAxis stroke="#ffffff60" />
                                <Tooltip
                                    cursor={{ fill: '#ffffff05' }}
                                    content={<CustomTooltip />}
                                />
                                <Bar
                                    dataKey="users"
                                    fill="#FF6B00"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        </div>
    );
} 