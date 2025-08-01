import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { ThemeProvider } from 'next-themes'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rince Mathew - Portfolio",
  description: "Rince Mathew - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@400;700&family=Saira+Stencil+One&display=swap"
    rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
      <ThemeProvider attribute="data-theme" defaultTheme="theme-1" enableSystem={false}>
        {children}
      </ThemeProvider>
  <Script src="/script.js" strategy="afterInteractive"/>
      </body>
      
    </html>
    
  );
}
