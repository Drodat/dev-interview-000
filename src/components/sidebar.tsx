"use client";

import { Home, Building2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
    {
        label: "Overview",
        icon: Home,
        href: "/",
    },
    {
        label: "Organizations",
        icon: Building2,
        href: "/organizations",
    },

];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 border-r border-white/[0.03] bg-black">
            <div className="space-y-6 py-6">
                <div className="px-4">
                    <nav className="space-y-2">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-white/[0.04]",
                                    pathname === route.href
                                        ? "bg-white/[0.04] text-white"
                                        : "text-white/60 hover:text-white"
                                )}
                            >
                                <route.icon className="h-4 w-4" />
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
} 