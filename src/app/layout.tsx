import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.className} h-full overflow-hidden`}>
        <div className="h-full bg-black">
          <Header />
          <div className="flex h-[calc(100%-3.5rem)]">
            <Sidebar />
            <main className="flex-1 overflow-y-auto scrollbar-custom p-6">
              <div className="mx-auto max-w-7xl">
                {children}
              </div>
            </main>
          </div>
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              className: "bg-drodatDarkGray border-white/[0.03] text-white",
            }}
          />
        </div>
      </body>
    </html>
  );
}
