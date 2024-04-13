import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Film",
  description: "Film",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-color-secondary"} suppressHydrationWarning={true}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
