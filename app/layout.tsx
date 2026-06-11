import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equation Empire — Every Equation is a Universe",
  description:
    "Explore an interactive galaxy of mathematical equations. Each equation is a world, connected through concepts, applications, and the hidden fabric of mathematics.",
  keywords: ["math", "equations", "interactive", "graph", "universe", "fractal", "physics"],
  authors: [{ name: "Equation Empire" }],
  openGraph: {
    title: "Equation Empire",
    description: "Every mathematical equation creates an interactive universe.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
