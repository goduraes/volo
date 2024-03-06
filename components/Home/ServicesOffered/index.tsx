'use client'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Outsourcing from '@/public/services-offered-icons/outsourcing.svg'
import Suporte from '@/public/services-offered-icons/suporte.svg'
import AnimationDiv from '@/components/Shared/AnimationDiv'
export interface CardsType {
  icone: any
  title: string
  text: string
  duration: string
}

export default function ServicesOffered() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  const cards: CardsType[] = [
    {
      icone: Suporte,
      title: 'Desenvolvimento web',
      text: 'Essas aplicações podem ser desde sites institucionais até plataformas complexas que integram diversos sistemas e funcionalidades.',
      duration: 'duration-[1.2s]'
    },
    {
      icone: Outsourcing,
      title: 'Desenvolvimento mobile',
      text: 'Criação de aplicativos mobile para Android e iOS sob demanda, rápidos, intuitivos e com foco na experiência do usuário.',
      duration: 'duration-[1.4s]'
    },
    {
      icone: Suporte,
      title: 'Desenvolvimento desktop',
      text: 'Criação de aplicações desktop sob demanda, fluidas e intuitivas, que performam bem nas principais plataformas desktop, como Windows, Mac e Linux.',
      duration: 'duration-[1.6s]'
    },
    {
      icone: Suporte,
      title: 'Cloud computing',
      text: 'Suporte confiável, economia de custos e tranquilidade para o seu negócio. Deixe-nos cuidar da tecnologia para você!',
      duration: 'duration-[1.8s]'
    },
    {
      icone: Outsourcing,
      title: 'Desenvolvimento full-stack',
      text: 'Implementação tanto do design de interface quanto da lógica e dos dados do produto digital em código, utilizando as linguagens e ferramentas adequadas para cada camada.',
      duration: 'duration-[2s]'
    }
  ]

  return (
    <div
      ref={ref}
      id="services"
      className="flex justify-center items-center md:scroll-mt-16 bg-services"
    >
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mx-auto max-w-7xl py-20 px-2">
          <AnimationDiv
            duration="duration-[1s]"
            inView={inView}
            className="col-span-1"
          >
            <h2>Serviços oferecidos</h2>
          </AnimationDiv>
          {cards.map((item: CardsType) => (
            <AnimationDiv
              duration={item.duration}
              inView={inView}
              key={item.duration}
              className="col-span-1"
            >
              <Image
                className="w-7 h-auto"
                priority
                src={item.icone}
                alt={`Ícone do ${item.title}`}
              />
              <h3 className="text-xl text-neutra-800 my-4">{item.title}</h3>
              <p className="text-neutra-600 service-description">{item.text}</p>
            </AnimationDiv>
          ))}
        </div>
      </div>
    </div>
  )
}
