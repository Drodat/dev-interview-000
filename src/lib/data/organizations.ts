import { collection, getDocs, query,getCountFromServer } from "firebase/firestore";
import { db } from "../firebase/config";
import { firestoreTimestampADate } from "@/lib/utils";
export interface Organization {
    id: string;
    name: string;
    status: 'active' | 'inactive';
    users: number | Promise<number>;
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

// export const getOrganizations = () => organizations;
export async function getOrganizations(): Promise<Organization[]> {
    try {
        const organizationsRef = collection(db, 'organizations');
        const querySnapshot = await getDocs(query(organizationsRef));
        const organizations: Organization[] = [];
        querySnapshot.forEach((doc) => {
            const usersRef = collection(db, "organizations", doc.id, "users");
            const getUserTotal = async (): Promise<number> => {
                const usersSnapshot = await getCountFromServer(usersRef);
                return usersSnapshot.data().count;
            }
            console.log("doc.data()",doc.data())
            const lastActive = firestoreTimestampADate(doc.data().createdAt);            
            organizations.push({
                id: doc.id,
                name: doc.data().name,
                status: doc.data().status,
                users: getUserTotal(),
                lastActive,
                // 
                reports: 0
            });
        });
        console.log('Organizations:', organizations);
        return organizations;
    } catch (error) {
        console.error('Error getting organizations:', error);
        return [];
    }
}
export const getOrganizationById = (id: string) => organizations.find(org => org.id === id);
export const getActiveOrganizations = () => organizations.filter(org => org.status === 'active');
export const getInactiveOrganizations = () => organizations.filter(org => org.status === 'inactive'); 