import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Nachy POS", description: "Business checkout and management" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
