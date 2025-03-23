"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface UserData {
    name: string;
    email: string;
    organization: string;
    role: string;
    avatarUrl: string;
    phone: string;
    location: string;
    department: string;
}

export function UserProfile({ userId }: { userId: string }) {
    const [isEditing, setIsEditing] = useState(false);

    // Mock data - replace with actual API call
    const [userData, setUserData] = useState<UserData>(() => {
        // Simulate different data based on userId
        const mockUsers: Record<string, UserData> = {
            "1": {
                name: "John Smith",
                email: "john.smith@acme.com",
                organization: "Acme Corporation",
                role: "Admin",
                avatarUrl: "/avatars/john-smith.png",
                phone: "+1 (555) 123-4567",
                location: "New York, USA",
                department: "Engineering"
            },
            "2": {
                name: "Sarah Johnson",
                email: "sarah.j@globex.com",
                organization: "Globex Corporation",
                role: "User",
                avatarUrl: "/avatars/sarah-johnson.png",
                phone: "+1 (555) 987-6543",
                location: "San Francisco, USA",
                department: "Marketing"
            }
        };
        return mockUsers[userId] || mockUsers["1"];
    });

    return (
        <div className="space-y-8">
            <div className="flex items-start justify-between">
                <div className="flex gap-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={userData.avatarUrl} alt={userData.name} />
                        <AvatarFallback className="bg-white/[0.03] text-white/60 text-xl">
                            {userData.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-2xl font-semibold text-white/90">{userData.name}</h2>
                        <p className="text-white/40">{userData.email}</p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="text-white/60 border-white/[0.08] hover:bg-white/[0.02] hover:text-white"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? "Cancel" : "Edit Profile"}
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label className="text-white/60">Full Name</Label>
                    <Input
                        disabled={!isEditing}
                        value={userData.name}
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        className="border-white/[0.08]"
                    />
                </div>
                <div className="space-y-2">
                    <Label className="text-white/60">Email</Label>
                    <Input
                        disabled={!isEditing}
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        className="border-white/[0.08]"
                    />
                </div>
       
            
                <div className="space-y-2">
                    <Label className="text-white/60">Organization</Label>
                    <Input
                        disabled
                        value={userData.organization}
                        className="border-white/[0.08]"
                    />
                </div>
  
            </div>
        </div>
    );
}
