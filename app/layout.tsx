import type { Metadata } from "next";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/700-italic.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/dm-mono/300.css";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Charme — French Bistro · Calgary",
  description: "A warm, intimate French-inspired bistro on Edmonton Trail. Thoughtfully composed seasonal plates, classic French bistro favourites, and local Alberta ingredients.",
  keywords: "French bistro Calgary, Le Charme, Edmonton Trail restaurant, date night Calgary",
  openGraph: {
    title: "Le Charme — French Bistro · Calgary",
    description: "Warm, intimate French-inspired bistro minutes from downtown Calgary.",
    url: "https://lecharme.ca",
    siteName: "Le Charme",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
