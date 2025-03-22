export interface ReportStats {
    name: string;
    reports: number;
    growth: string;
}

export const topOrganizations: ReportStats[] = [
    { name: "Acme Corp", reports: 1234, growth: "+12%" },
    { name: "Globex Corp", reports: 956, growth: "+8%" },
    { name: "Initech", reports: 854, growth: "+5%" },
    { name: "Hooli", reports: 721, growth: "+3%" },
    { name: "Umbrella Corp", reports: 645, growth: "+2%" },
];

export const getTopOrganizations = () => topOrganizations; 