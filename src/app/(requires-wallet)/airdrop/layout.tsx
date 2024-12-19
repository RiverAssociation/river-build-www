import { sharedMetadata } from '@/constants/metadata'
import { Metadata } from 'next'

const metadataTitle = 'Airdrop - River Protocol'
const metadataDescription = 'Claim your rewards'

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    ...sharedMetadata.openGraph,
    url: 'https://river.build/airdrop',
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: '/og-image-airdrop.jpg',
        alt: metadataTitle,
      },
    ],
  },
  twitter: {
    ...sharedMetadata.twitter,
    description: metadataDescription,
  },
}

const AirdropLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default AirdropLayout
