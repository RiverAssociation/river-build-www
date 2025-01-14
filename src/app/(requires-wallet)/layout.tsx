import { FooterDivider } from '@/components/footer/footer-divider'

const WalletLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <FooterDivider />
    </>
  )
}

export default WalletLayout
