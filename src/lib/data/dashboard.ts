export interface MonthlyData {
    month: string;
    reports: number;
    users: number;
}

export const monthlyReports: MonthlyData[] = [
    { month: 'Jan', reports: 3200, users: 850 },
    { month: 'Feb', reports: 4100, users: 920 },
    { month: 'Mar', reports: 3800, users: 980 },
    { month: 'Apr', reports: 4600, users: 1050 },
    { month: 'May', reports: 5200, users: 1150 },
    { month: 'Jun', reports: 4900, users: 1234 },
];

export const getMonthlyReports = () => monthlyReports;
export const getUserGrowth = () => monthlyReports.map(({ month, users }) => ({ month, users })); 