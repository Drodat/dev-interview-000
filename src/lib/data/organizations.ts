export interface Organization {
    id: string;
    name: string;
    status: 'active' | 'inactive';
    users: number;
    reports: number;
    lastActive: string;
}

export const organizations: Organization[] = [
    {
        id: "1",
        name: "Acme Corporation",
        status: "active",
        users: 150,
        reports: 2500,
        lastActive: "2024-01-15"
    },
    {
        id: "2",
        name: "Globex Corporation",
        status: "active",
        users: 120,
        reports: 1800,
        lastActive: "2024-01-14"
    },
    {
        id: "3",
        name: "Initech",
        status: "inactive",
        users: 80,
        reports: 1200,
        lastActive: "2023-12-20"
    }
];

export const getOrganizations = () => organizations;
export const getOrganizationById = (id: string) => organizations.find(org => org.id === id);
export const getActiveOrganizations = () => organizations.filter(org => org.status === 'active');
export const getInactiveOrganizations = () => organizations.filter(org => org.status === 'inactive'); 