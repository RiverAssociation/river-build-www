import { sharedMetadata } from '@/constants/metadata'
import { Metadata } from 'next'

const metadataTitle = 'Stake - River Protocol'
const metadataDescription = 'Stake your tokens and earn rewards'

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    ...sharedMetadata.openGraph,
    url: 'https://river.build/stake',
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: '/og-image-stake.jpg',
        alt: metadataTitle,
      },
    ],
  },
  twitter: {
    ...sharedMetadata.twitter,
    description: metadataDescription,
  },
}

const StakeLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default StakeLayout
