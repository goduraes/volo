"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Outsourcing from '../../../public/services-offered-icons/outsourcing.svg'
import Suporte from '../../../public/services-offered-icons/suporte.svg'
export interface CardsType {
  icone: any;
  title: string;
  text: string;
  duration: string;
}

export default function ServicesOffered() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const cards: CardsType[] = [
    {
      icone: Suporte,
      title: "Suporte",
      text: "Suporte confiável, economia de custos e tranquilidade para o seu negócio. Deixe-nos cuidar da tecnologia para você!",
      duration: 'duration-[1.2s]'
    },
    {
      icone: Outsourcing,
      title: "Outsourcing de TI",
      text: "Suporte confiável, economia de custos e tranquilidade para o seu negócio. Deixe-nos cuidar da tecnologia para você!",
      duration: 'duration-[1.4s]'
    },
    {
      icone: Suporte,
      title: "Suporte",
      text: "Suporte confiável, economia de custos e tranquilidade para o seu negócio. Deixe-nos cuidar da tecnologia para você!",
      duration: 'duration-[1.6s]'
    },
    {
      icone: Outsourcing,
      title: "Outsourcing de TI",
      text: "Suporte confiável, economia de custos e tranquilidade para o seu negócio. Deixe-nos cuidar da tecnologia para você!",
      duration: 'duration-[1.8s]'
    },
    {
      icone: Suporte,
      title: "Outsourcing de TI",
      text: "Suporte confiável, economia de custos e tranquilidade para o seu negócio. Deixe-nos cuidar da tecnologia para você!",
      duration: 'duration-[2s]'
    },
  ];

  return (
    <div ref={ref} id="services" className="flex justify-center items-center md:scroll-mt-16 bg-services">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mx-auto max-w-7xl py-20 px-2">
          <div className={`col-span-1 transition-all duration-[1s] ${inView ? "animation-show-left" : "animation-hidden-left"}`}>
            <h2>Serviços oferecidos</h2>
          </div>
          {cards.map((item: CardsType) => (
            <div key={item.duration} className={`col-span-1 transition-all ${item.duration} ${inView ? "animation-show-left" : "animation-hidden-left"}`}>
              <Image
                className="w-7 h-auto"
                priority
                src={item.icone}
                alt="Volo logo"
              />
              <h5 className="text-neutra-800 my-4">{item.title}</h5>
              <p className="text-neutra-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
