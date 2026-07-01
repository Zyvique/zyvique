import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistPixelGrid } from "geist/font/pixel";
import "./globals.css";

const title = "Zyvique — Build a better online presence.";
const description =
  "Your website is often the first thing people see. We make sure it's one they'll remember. Zyvique builds websites for local businesses.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistPixelGrid.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
