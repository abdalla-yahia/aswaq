'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/utils/BreadCrumb_Nav";
import { ApolloProvider } from '@apollo/client';
import { client } from '@/libs/Apollo/ApolloClient';
import { Provider } from 'react-redux';
import { store } from '@/libs/Redux_Store/Store';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// Site Meta Data 
// export const metadata: Metadata = {
//   title: "متجر اسواق بني سويف للتجارة الإلكترونية",
//   description: "متجر اسواق بني سويف للتجارة الإلكترونية , متجر أسواق الإلكتروني – اكتشف أفضل العروض على مجموعة واسعة من المنتجات بجودة عالية وأسعار تنافسية. تسوّق الآن مع خدمة شحن موثوقة ودعم عملاء مميز في مصر والوطن العربي.",
//   openGraph: {
//     title: "متجر اسواق بني سويف للتجارة الإلكترونية",
//     description: "متجر اسواق بني سويف للتجارة الإلكترونية , متجر أسواق الإلكتروني – اكتشف أفضل العروض على مجموعة واسعة من المنتجات بجودة عالية وأسعار تنافسية. تسوّق الآن مع خدمة شحن موثوقة ودعم عملاء مميز في مصر والوطن العربي.",
//     images: [
//       {
//         url: "/images/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "aswaq logo",
//       },
//     ],
//     url: "https://aswaq-bns.vercel.app/",
//     siteName: "متجر اسواق بني سويف للتجارة الإلكترونية",
//     type: "website",
//     locale: "ar_AR",

//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "متجر اسواق بني سويف للتجارة الإلكترونية",
//     description: "متجر اسواق بني سويف للتجارة الإلكترونية , متجر أسواق الإلكتروني – اكتشف أفضل العروض على مجموعة واسعة من المنتجات بجودة عالية وأسعار تنافسية. تسوّق الآن مع خدمة شحن موثوقة ودعم عملاء مميز في مصر والوطن العربي.",
//     images: ["/images/logo.png"],
//   },
//   keywords: [
//     "اسواق بني سويف",
//     "سوق الكتروني",
//     "عطارة",
//     "منتجات",
//     "مواد غذائية",
//     "شحن مجاني",
//     "بني سويف",
  
//   ],
  
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/favicon/apple-touch-icon.png",
//     shortcut: "/favicon/favicon-16x16.png",
//     other: [
//       {
//         rel: "icon",
//         url: "/favicon/favicon-32x32.png",
//         sizes: "32x32",
//         type: "image/png",
//       },
//       {
//         rel: "icon",
//         url: "/favicon/android-chrome-192x192.png",
//         sizes: "192x192",
//         type: "image/png",
//       },
//       {
//         rel: "icon",
//         url: "/favicon/android-chrome-512x512.png",
//         sizes: "512x512",
//         type: "image/png",
//       },
//     ],
//   },
//   themeColor: "#ffffff",
//   manifest: "/manifest.json",
//   applicationName: "متجر اسواق بني سويف للتجارة الإلكترونية",
//   authors: [
//     {
//       name: "م/ عبدالله يحيى",
//       url: "https://www.linkedin.com/in/abdalla-yahia",
//     },
//   ],
//   creator: "م/ عبدالله يحيى",
//   publisher: "م/ عبدالله يحيى",
//   colorScheme: "light dark",
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 1,
//     userScalable: false,
//   },
//   alternates: {
//     canonical: "https://aswaq-bns.vercel.app/",
//     languages: {
//       "ar": "/ar",
//       "en": "/en",
//     }
//   },
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: "black-translucent",
//     title: "متجر اسواق بني سويف للتجارة الإلكترونية",
//   },
//   formatDetection: {
//     telephone: false,
//     address: false,
//     email: false,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     noimageindex: false,
//     noarchive: false,
//     nosnippet: false,
//   },

// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Provider store={store}>
          <ApolloProvider client={client} >
            <Header />
            <Breadcrumb />
              <main className="min-h-screen mt-[155px]  bg-background text-foreground">
              {children}
              </main>
            <Footer />
          </ApolloProvider>
        </Provider>
      </body>
    </html>
  );
}
