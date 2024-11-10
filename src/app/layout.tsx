import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import Header from "../components/Header";
import RQClient from "../components/RQClient";
import "./globals.css";

const pitagon = localFont({
  src: "./fonts/PitagonSansMono.woff2",
  variable: "--font-pitagon",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jokesaside",
  description: "Jokesaside - cringe worthy jokes at your door step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RQClient>
        <body
          className={`${pitagon.className} relative bg-neutral-300 text-neutral-900 antialiased`}
        >
          <Toaster richColors position="top-right" />
          <div className="flex min-h-dvh flex-col gap-2 p-2">
            <Header />
            {children}
          </div>
        </body>
      </RQClient>
    </html>
  );
}
