import type { Metadata } from "next";
import {
  dmSerif,
  inter,
  lora,
  majorMonoDisplay,
  merriweather,
  montezLogo,
  poppins,
  robotoMono,
} from "./fonts";
import { ThemeProvider } from "@/components/common/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivek Kumar",
  description: "My Personal Portfolio Website",
};

// Do not touch this mostly
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montezLogo.variable} ${poppins.variable} ${lora.variable} ${inter.variable} ${dmSerif.variable} ${merriweather.variable} ${robotoMono.variable} ${majorMonoDisplay.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
