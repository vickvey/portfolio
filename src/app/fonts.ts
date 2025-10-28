import {
  Poppins,
  Lora,
  Inter,
  DM_Serif_Text,
  Merriweather,
  Roboto_Mono,
  Major_Mono_Display,
  Montez,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  variable: "--font-dm-serif-text",
  weight: "400",
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
});
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
export const majorMonoDisplay = Major_Mono_Display({
  weight: "400",
  variable: "--font-major-mono-display",
  subsets: ["latin"],
});
export const montezLogo = Montez({
  weight: "400",
  variable: "--font-montez",
  subsets: ["latin"],
});
