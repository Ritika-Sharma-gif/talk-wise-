import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Talkwise — Better conversations. Clearer thinking.",
    template: "%s | Talkwise",
  },
  description:
    "Meet curious people, explore complicated ideas, and make sense of things together. Your next breakthrough could start with a conversation.",
  applicationName: "Talkwise",
};

export const viewport: Viewport = {
  themeColor: "#f7f7f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
