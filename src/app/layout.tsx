import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ly Makara",
  description:
    "This is my personal website. You learn more about me by click on the link and enjor visiting.",
  icons: {
    icon: "my-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:p-8 p-4">
          <NavBar />
          <div className="flex-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
