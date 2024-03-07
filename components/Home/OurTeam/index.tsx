'use client'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Button from '@/components//Shared/Button'
import AnimationDiv from '@/components//Shared/AnimationDiv'
import OurTeamImg from '@/public/our-team/our-team.jpg'
import IconCheck from '@/public/our-team/check.svg'
import { SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export interface NumbersTeamType {
  label: string
  number: number
  setState: Function
  state: number
  duration: string
  durationCounter: number
}

export default function OurTeam() {
  const router = useRouter()
  const [refAboutTeam, inViewAboutTeam] = useInView({ threshold: 0.3 })
  const [refTeamNumbers, inViewTeamNumbers] = useInView({ threshold: 0.5 })

  let [counterYears, setCounterYears] = useState(0)
  let [counterClients, setCounterClients] = useState(0)
  let [counterProjects, setCounterProjects] = useState(0)

  useEffect(() => {
    if (inViewTeamNumbers)
      numbersTeam.forEach((item) =>
        increment(
          item.state,
          item.number,
          item.durationCounter,
          (value: SetStateAction<number>) => item.setState(value)
        )
      )
    else numbersTeam.forEach((item) => item.setState(0))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewAboutTeam, inViewTeamNumbers])

  const list: string[] = [
    'Expertise especializada',
    'Qualidade consistente',
    'Suporte e manutenção contínuos'
  ]

  const numbersTeam: NumbersTeamType[] = [
    {
      label: 'Anos de Mercado',
      number: 2,
      setState: (value: number) => setCounterYears(value),
      state: counterYears,
      duration: 'duration-[1s]',
      durationCounter: 500
    },
    {
      label: 'Clientes satisfeitos',
      number: 10,
      setState: (value: number) => setCounterClients(value),
      state: counterClients,
      duration: 'duration-[1.2s]',
      durationCounter: 250
    },
    {
      label: 'Projetos entregues',
      number: 20,
      setState: (value: number) => setCounterProjects(value),
      state: counterProjects,
      duration: 'duration-[1.4s]',
      durationCounter: 125
    }
  ]

  const increment = (
    i: number,
    max: number,
    time: number,
    setCounter: (value: SetStateAction<number>) => void
  ) => {
    if (i >= max) return
    setTimeout(() => {
      setCounter(i + 1)
      increment(i + 1, max, time, setCounter)
    }, time)
  }

  return (
    <div
      id="sobre"
      className="flex flex-col justify-center items-center md:scroll-mt-16"
    >
      <div
        ref={refAboutTeam}
        className="flex flex-col justify-center items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-7xl py-20 px-2">
          <AnimationDiv
            duration="duration-[1s]"
            inView={inViewAboutTeam}
            className="col-span-1"
          >
            <Image
              className="w-full h-auto"
              priority
              src={OurTeamImg}
              alt="Homem trabalhando no notebook"
            />
          </AnimationDiv>

          <AnimationDiv
            duration="duration-[1.2s]"
            inView={inViewAboutTeam}
            className="col-span-1"
          >
            <h2 className="font-medium text-neutra-700 mb-4">
              Por que escolher nossa equipe?
            </h2>
            <p className="text-neutra-600 mb-5">
              Suporte confiável, economia de custos e tranquilidade para o seu
              negócio. Deixe-nos cuidar da tecnologia para você!
            </p>
            <ul className="mb-4">
              {list.map((item: string) => (
                <li key={item} className="flex gap-2 mt-2">
                  <Image
                    className="w-5 h-5 mt-0.5"
                    priority
                    src={IconCheck}
                    alt="Ícone check"
                  />
                  <span className="text-neutra-600">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => router.push('/contato')}
              aria-label="Solicitar orçamento"
            >
              Solicitar orçamento
            </Button>
          </AnimationDiv>
        </div>
      </div>

      <div ref={refTeamNumbers} className="w-full mx-auto max-w-7xl px-2 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 py-10 rounded-lg bg-services">
          {numbersTeam.map((item: NumbersTeamType) => (
            <AnimationDiv
              key={item.duration}
              duration={item.duration}
              inView={inViewTeamNumbers}
              className="flex flex-col justify-center items-center col-span-1"
            >
              <figure
                className="flex flex-col items-center stat-indicator"
                aria-labelledby="stat-value"
              >
                <h2 className="font-medium text-neutra-800">{item.state}+</h2>
                <p className="stat-label font-montserrat font-medium text-xl text-neutra-700">
                  {item.label}
                </p>
              </figure>
            </AnimationDiv>
          ))}
        </div>
      </div>
    </div>
  )
}
