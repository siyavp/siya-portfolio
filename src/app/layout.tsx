import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siya Patil",
  description: "Portfolio of Siya Patil, CS Engineer & Fashion Retail Minor, targeting SWE roles at top tech companies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
