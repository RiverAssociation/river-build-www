import Footer from '@/components/footer'
import { FooterDivider } from '@/components/footer/footer-divider'
import Header from '@/components/header'
import { client } from '@/gql/client'
import { siteDataQuery } from '@/gql/query'
import { TanstackQueryProvider } from '@/lib/context/tanstack-query-provider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Status - River Protocol',
  description: 'River Protocol nodes status page.',
}
const StatusLayout = async ({ children }: { children: React.ReactNode }) => {
  const cmsData = await client.request(siteDataQuery)

  return (
    <>
      <Header cms={cmsData} />
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
      <FooterDivider />
      <Footer cms={cmsData} />
    </>
  )
}

export default StatusLayout