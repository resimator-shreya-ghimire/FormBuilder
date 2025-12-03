import "./globals.css";
import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "./providers";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "My App",
  description: "Mantine with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>

        <Providers>{children}</Providers>

      </body>
    </html>
  );
}
