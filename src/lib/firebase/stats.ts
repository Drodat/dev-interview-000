import { collection, getDocs, getCountFromServer } from "firebase/firestore";
import { db } from "./config";

export async function getTotalOrganizationsCount(): Promise<number> {
    try {
        const organizationsRef = collection(db, "organizations");
        const snapshot = await getCountFromServer(organizationsRef);
        return snapshot.data().count;
    } catch (error) {
        console.error("Error getting total organizations count:", error);
        return 0;
    }
}

export async function getTotalUsersCount(): Promise<number> {
    try {
        const organizationsRef = collection(db, "organizations");
        const organizationsSnapshot = await getDocs(organizationsRef);
        
        let totalUsers = 0;
        
        // Get users count from each organization
        for (const orgDoc of organizationsSnapshot.docs) {
            const usersRef = collection(db, "organizations", orgDoc.id, "users");
            const usersSnapshot = await getCountFromServer(usersRef);
            totalUsers += usersSnapshot.data().count;
        }
        
        return totalUsers;
    } catch (error) {
        console.error("Error getting total users count:", error);
        return 0;
    }
} 