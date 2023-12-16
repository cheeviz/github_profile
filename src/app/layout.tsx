import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cheevi | Github-Profile",
  description: "Visualize perfil do github",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ToastContainer />
        <Header text="Github Profile" />
        {children}
      </body>
    </html>
  );
}
