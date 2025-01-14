import Footer from '@/components/footer'
import Header from '@/components/header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import '../styles/global.css'

import { Toaster } from '@/components/ui/toaster'
import { sharedMetadata } from '@/constants/metadata'
import { client } from '@/gql/client'
import { siteDataQuery } from '@/gql/query'

import { GeistSans } from 'geist/font/sans'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import { Providers } from './providers'

// Font files can be colocated inside of `pages`
const menloFont = localFont({ src: '../lib/fonts/Menlo-Regular.woff', variable: '--font-menlo' })

const DESCRIPTION =
  'River is a permissionless protocol for social networking apps. Create dynamic on-chain spaces that feature memberships, reputation, and end-to-end message encryption.'
const metaImageUrl = '/og-image.jpeg'

export const fetchCache = 'force-cache'

export async function generateMetadata(): Promise<Metadata> {
  const cms = await client.request(siteDataQuery)

  return {
    title: cms._site.globalSeo?.siteName as string,
    description: cms._site.globalSeo?.fallbackSeo?.description || DESCRIPTION,
    openGraph: {
      ...sharedMetadata.openGraph,
      title: cms._site.globalSeo?.fallbackSeo?.title || 'River Protocol',
      description: cms._site.globalSeo?.fallbackSeo?.description || DESCRIPTION,
      images: [
        {
          url: cms._site.globalSeo?.fallbackSeo?.image?.url || metaImageUrl,
          alt: 'River Protocol',
        },
      ],
    },
    twitter: {
      ...sharedMetadata.twitter,
      description: cms._site.globalSeo?.fallbackSeo?.description || DESCRIPTION,
    },
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cmsData = await client.request(siteDataQuery)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Favicons />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#02000a" />
        <meta name="theme-color" content="#02000a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#02000a" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="dark" />
      </head>

      <body>
        <Providers>
          <main className={`${GeistSans.variable} font-primary ${menloFont.variable}`}>
            <Header cms={cmsData} />
            {children}
            <Footer cms={cmsData} />
            <Toaster />
            <TailwindIndicator />
          </main>
        </Providers>
      </body>
    </html>
  )
}

const Favicons = () => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`/favicon/light/apple-icon-57x57.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href={`/favicon/light/favicon.ico`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href={`/favicon/dark/favicon.ico`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`/favicon/light/apple-icon-60x60.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`/favicon/dark/apple-icon-60x60.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`/favicon/light/apple-icon-72x72.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`/favicon/light/apple-icon-76x76.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`/favicon/dark/apple-icon-76x76.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`/favicon/light/apple-icon-114x114.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`/favicon/dark/apple-icon-114x114.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`/favicon/light/apple-icon-120x120.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`/favicon/dark/apple-icon-120x120.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`/favicon/light/apple-icon-144x144.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`/favicon/dark/apple-icon-144x144.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`/favicon/light/apple-icon-152x152.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`/favicon/dark/apple-icon-152x152.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/favicon/light/apple-icon-180x180.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/favicon/dark/apple-icon-180x180.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`/favicon/light/android-icon-192x192.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`/favicon/dark/android-icon-192x192.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon/light/favicon-32x32.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon/dark/favicon-32x32.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`/favicon/light/favicon-96x96.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`/favicon/dark/favicon-96x96.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon/light/favicon-16x16.png`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon/dark/favicon-16x16.png`}
        media="(prefers-color-scheme: dark)"
      />
      <meta
        name="msapplication-TileImage"
        content={`/favicon/light/ms-icon-144x144.png`}
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="msapplication-TileImage"
        content={`/favicon/dark/ms-icon-144x144.png`}
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="manifest"
        href={`/favicon/light/manifest.json`}
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="manifest"
        href={`/favicon/dark/manifest.json`}
        media="(prefers-color-scheme: dark)"
      />
    </>
  )
}
