import { Geist, Geist_Mono } from "next/font/google";
import { AuthContextProvider } from "../_utils/auth-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cover Drive",
  description:
    "Cover drive is a popular and elegant cricket shot, where cricket enthusiasts can explore the elegance and precision of one of the most iconic shots in the game – the cover drive. Whether you're a seasoned cricketer or just starting out, our resources, tips, and tutorials will help you perfect this graceful and powerful shot. From understanding the fundamentals to mastering the technique, discover everything you need to elevate your game and make your cover drive a weapon of choice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
