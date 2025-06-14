import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/Container/page";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Container
          className="min-h-screen min-w-screen
                dark:bg-gradient-to-r dark:from-[#181818] dark:to-gray-800 dark:text-gray-100
                bg-gradient-to-r from-gray-100 to-gray-400 text-gray-900 "
        >
          {children}
        </Container>
      </body>
    </html>
  );
}
