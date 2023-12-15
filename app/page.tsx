'use client'
import { useContext, useEffect } from 'react'
import Banner from '@/components/Home/Banner'
import CustomerReviews from '@/components/Home/CustomerReviews'
import OurTeam from '@/components/Home/OurTeam'
import ServicesOffered from '@/components/Home/ServicesOffered'
import { MenuContext } from '@/contexts/MenuContext'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [refServicesOffered, inViewServicesOffered] = useInView({
    threshold: 0.2
  })
  const [refOurTeam, inViewOurTeam] = useInView({ threshold: 0.2 })

  const { setMenuActive } = useContext(MenuContext)

  useEffect(() => {
    if (inViewServicesOffered && !inViewOurTeam) setMenuActive('Serviços')
    if (inViewOurTeam && !inViewServicesOffered) setMenuActive('Sobre')
    if (!inViewOurTeam && !inViewServicesOffered) setMenuActive('Home')
  }, [inViewServicesOffered, inViewOurTeam, setMenuActive])

  return (
    <>
      <Banner />
      <div ref={refServicesOffered}>
        <ServicesOffered />
      </div>
      <div ref={refOurTeam}>
        <OurTeam />
      </div>
      <CustomerReviews />
    </>
  )
}
