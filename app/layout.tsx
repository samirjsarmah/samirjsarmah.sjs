import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Your Name — Developer Portfolio",
    template: "%s | Your Name",
  },
  description:
    "Full-stack developer specializing in modern web applications, AI/ML, and scalable systems.",
  keywords: ["developer", "portfolio", "full-stack", "Next.js", "React", "AI", "ML"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Your Name — Developer Portfolio",
    description: "Full-stack developer portfolio showcasing projects, skills, and blogs.",
    siteName: "Your Name Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Developer Portfolio",
    description: "Full-stack developer portfolio showcasing projects, skills, and blogs.",
    images: ["/og-image.png"],
    creator: "@yourhandle",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts — loaded here so they work on Vercel */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            {/* Ambient background blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
              <div
                className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10 blur-3xl"
                style={{ background: "radial-gradient(circle, #14b897 0%, transparent 70%)" }}
              />
              <div
                className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
                style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
              />
              <div
                className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
                style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }}
              />
              <div
                className="absolute inset-0 opacity-30 dark:opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(20,184,151,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,151,0.07) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
