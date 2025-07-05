import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header"; // importa il tuo header

export const metadata = {
  title: "ButterflyOS",
  description: "A poetic Linux experience by Butterfly STUDIO",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}