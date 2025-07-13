'use client'
import './globals.css'
import React from 'react'
import {
   Plus_Jakarta_Sans,
   Source_Serif_Pro,
   Work_Sans,
   Roboto,
   Dancing_Script
} from 'next/font/google'
import { GlobalProvider } from '@/context/store'
import Header from '@/components/organism/header'
import Footer from '@/components/organism/footer'
import { Providers } from '@/utils/themeMode' // Plus Jakarta Sans font family with 4 weights and 2 styles

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const dancing_script = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
})

// Plus Jakarta Sans font family with 4 weights and 2 styles
const Jakarta_Sans = Plus_Jakarta_Sans({
   weight: ['400', '500', '600', '700'],
   style: ['normal', 'italic'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-plus-jakarta-sans',
})

// Work Sans font family with 4 weights and 2 styles
const work_Sans = Work_Sans({
   weight: ['400', '500', '600', '700'],
   style: ['normal', 'italic'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-work-sans',
})

// Source Serif Pro font family with 4 weights and 2 styles
const source_Serif_Pro = Source_Serif_Pro({
   weight: ['200', '300', '400', '600', '700'],
   style: ['normal', 'italic'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-source-serif-pro',
})

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html
         lang="en"
         // suppressHydrationWarning
         // className={roboto.className}
         // className={`${source_Serif_Pro.variable} ${Jakarta_Sans.variable} ${work_Sans.variable} font-sans`}
         // className={`${openSans.variable} ${roboto.variable} font-sans`}
         className={`${source_Serif_Pro.variable} ${Jakarta_Sans.variable} ${work_Sans.variable} ${roboto.variable} ${dancing_script.variable} font-sans`}

      >
         <body>
            <Providers>
               <GlobalProvider>
                  <Header />
                  {children}
                  <Footer />
               </GlobalProvider>
            </Providers>
         </body>
      </html>
   )
}
