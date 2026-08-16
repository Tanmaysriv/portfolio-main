import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Tanmay | Portfolio",
  description: "Tanmay's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}