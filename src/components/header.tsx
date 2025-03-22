"use client";

import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
export function Header() {

    return (
        <header className="sticky top-0 z-50 border-b border-drodatDarkGray/50 bg-black/80 backdrop-blur-xl">
            <div className="flex h-14 items-center px-6">
                <Link href="/" className="flex items-center gap-2 min-w-[120px]">
                    <Image
                        src="/drodat_logo.png"
                        alt="Drodat Logo"
                        width={120}
                        height={32}
                        className="object-contain"
                    />
                </Link>

                
                <div className="flex items-center gap-4 min-w-[120px] justify-end ml-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-white/60 hover:text-white"
                    >
                        <Bell className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <div className="text-sm font-medium text-white">
                                John Admin Doe
                            </div>
                            <div className="text-xs text-white/40">
                                Support Administrator
                            </div>
                        </div>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/avatar.png" alt="User" />
                            <AvatarFallback className="text-xs">AR</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    );
} 