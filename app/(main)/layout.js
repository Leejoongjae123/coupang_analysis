import "@/app/globals.css";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import SidebarObj from "@/app/(main)/components/SidebarObj";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <SidebarObj children={children}></SidebarObj>
          
        </NextUIProvider>
      </body>
    </html>
  );
}
