import { Archivo, Bowlby_One, Patrick_Hand } from "next/font/google";

// Poster caps for headlines and sound effects.
export const display = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

// Hand-lettered balloon and caption text.
export const lettering = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lettering",
});

// Body and UI text.
export const body = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
});
