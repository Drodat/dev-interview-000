import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";
import { firestoreTimestampADate } from "@/lib/utils";

export interface User {
    id: string;
    name: string;
    email: string;
    organization: string;
    role: string;
    status: 'active' | 'inactive';
    lastActive: string;
    avatarUrl: string;
    createdAt?: string;
}

export type UserTable = {
    id: string;
    name: string;
    email: string;
    organization?: string;
    role: string;
    createdAt?: string;
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

export const getUsers = async(organizationId: string): Promise<UserTable[] | null> => {
    try {
        if (!organizationId) {
            console.error("Organization ID is required");
            return [];
        }
        
        const usersCollection = collection(db, "organizations", organizationId, "users");
        const docsnapshot = await getDocs(usersCollection);
        
        if (!docsnapshot.empty) {
            const users: UserTable[] = docsnapshot.docs.map(doc => {
                const data = doc.data();
                console.log("data",data)
                return {
                    id: doc.id,
                    name: data.name || '',
                    email: data.email || '',
                    role: data.role || '',
                    organization: data.organization || '',
                    createdAt: firestoreTimestampADate(data.createdAt)
                };
            });
            
            return users;
        } else {
            console.log(`Organization ${organizationId} has no users.`);
            return [];
        }
    } catch (error) {
        console.error("Error getting users:", error);
        return null;
    }
};

export const getUserById = async(userId: string, organizationId: string) => {
    try {
        if (!userId || !organizationId) {
            console.error("User ID and Organization ID are required");
            return null;
        }
        
        const docRef = doc(db, "organizations", organizationId, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            console.log('data',data)
            return { 
                id: docSnap.id,
                ...data
            };
        } else {
            console.log("No such user document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting user document:", error);
        return null;
    }
};

export const getActiveUsers = () => users.filter(user => user.status === 'active');
export const getInactiveUsers = () => users.filter(user => user.status === 'inactive');