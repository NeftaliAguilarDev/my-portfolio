import { HeroSection } from '@/components/sections/HeroSection'
import { Header } from '@/components/shared/Header'
import { WorkSection } from '@/components/sections/WorkSection'
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WorkSection />
    </div>
  )
}
