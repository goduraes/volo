/* eslint-disable prettier/prettier */
'use client'
import { useContext, useEffect } from 'react'
import Banner from '@/components/Home/Banner'
import CustomerReviews from '@/components/Home/CustomerReviews'
import OurTeam from '@/components/Home/OurTeam'
import ServicesOffered from '@/components/Home/ServicesOffered'
import { MenuContext } from '@/contexts/MenuContext'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [refServicesOffered, inViewServicesOffered] = useInView({threshold: 0.2})
  const [refOurTeam, inViewOurTeam] = useInView({ threshold: 0.2 })
  const [refCustomerReviews, inViewCustomerReviews] = useInView({ threshold: 0.2 })

  const { setMenuActive } = useContext(MenuContext)

  useEffect(() => {
    if (inViewServicesOffered && !inViewOurTeam && !inViewCustomerReviews) setMenuActive('Serviços')
    if (inViewOurTeam && !inViewServicesOffered && !inViewCustomerReviews) setMenuActive('Sobre')
    if (inViewCustomerReviews && !inViewOurTeam && !inViewServicesOffered) setMenuActive('Cases')
    if (!inViewOurTeam && !inViewServicesOffered && !inViewCustomerReviews) setTimeout(() => setMenuActive('Home'), 60)
  }, [inViewServicesOffered, inViewOurTeam, inViewCustomerReviews, setMenuActive])

  return (
    <>
      <Banner />
      <div ref={refServicesOffered}>
        <ServicesOffered />
      </div>
      <div ref={refOurTeam}>
        <OurTeam />
      </div>
      <div ref={refCustomerReviews}>
        <CustomerReviews />
      </div>
    </>
  )
}
