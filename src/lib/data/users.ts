export interface User {
    id: string;
    name: string;
    email: string;
    organization: string;
    role: string;
    status: 'active' | 'inactive';
    lastActive: string;
    avatarUrl: string;
}

export const users: User[] = [
    {
        id: "1",
        name: "John Smith",
        email: "john.smith@acme.com",
        organization: "Acme Corporation",
        role: "Admin",
        status: "active",
        lastActive: "2024-01-15",
        avatarUrl: "/avatars/john-smith.png"
    },
    {
        id: "2",
        name: "Sarah Johnson",
        email: "sarah.j@globex.com",
        organization: "Globex Corporation",
        role: "User",
        status: "active",
        lastActive: "2024-01-14",
        avatarUrl: "/avatars/sarah-johnson.png"
    },
    {
        id: "3",
        name: "Michael Brown",
        email: "m.brown@initech.com",
        organization: "Initech",
        role: "User",
        status: "inactive",
        lastActive: "2023-12-20",
        avatarUrl: "/avatars/michael-brown.png"
    }
];

export const getUsers = () => users;
export const getUserById = (id: string) => users.find(user => user.id === id);
export const getActiveUsers = () => users.filter(user => user.status === 'active');
export const getInactiveUsers = () => users.filter(user => user.status === 'inactive'); 