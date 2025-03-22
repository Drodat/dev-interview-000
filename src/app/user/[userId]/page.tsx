import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserProfile } from "@/components/organizations/user-profile";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function UserPage({ params }: { params: { id: string } }) {
    return (
        <div className="space-y-10">
            <div className="space-y-2">
                <div className="flex items-center gap-4">
                    <Link href="/organizations">
                        <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-white/90">User Profile</h1>
                        <p className="text-white/40">View and manage user details and activity.</p>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="bg-drodatDarkGray border border-white/[0.03]">
                    <TabsTrigger
                        value="profile"
                        className="data-[state=active]:bg-white/[0.04] data-[state=active]:text-white text-white/60"
                    >
                        Profile
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                    <Card className="p-8">
                        <UserProfile userId={params.id} />
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}