import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ChristmasWrapper from "./_components/christmas-wrap";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Predrag Popovic",
  description: "Personal Github Page Predrag Popovic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ChristmasWrapper>
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
              {children}
            </main>

            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/"
              >
                home
              </Link>
              <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/projects"
              >
                projects
              </Link>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/pekac"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.linkedin.com/in/predrag-popovic-508646b7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://twitter.com/pekac9"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            </footer>
          </div>
        </ChristmasWrapper>
      </body>
    </html>
  );
}
