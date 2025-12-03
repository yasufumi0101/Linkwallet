import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "LinkWallet",
  description: "Saving money with your friends",
};


export default function RootLayout({ children }: { children: React.ReactNode }
) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body>
        <main className="content">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}

