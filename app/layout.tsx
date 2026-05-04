import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Metric Benchmark Tracker — Compare Your Metrics",
  description: "Input your startup metrics and get benchmarked against similar stage and industry companies with actionable growth recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dbf46801-4af1-4fd1-9a19-594c89d523f7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
