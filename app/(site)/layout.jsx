import "../../styles/globals.css";
import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "@/components/theme-provider";
export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}