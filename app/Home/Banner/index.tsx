"use client";
import { useInView } from "react-intersection-observer";
import Button from "@/components/Button";
import Image from "next/image";
import AnimationDiv from "@/components/AnimationDiv";
import HomeBanner from "@/public/home-banner.jpg";
import Avatar from "@/public/avatar.jpg";

import Microsoft from "@/public/companies/microsoft.svg";
import Microsoft2 from "@/public/companies/microsoft-2.svg";
import Github from "@/public/companies/github.svg";
import Linkedin from "@/public/companies/linkedin.svg";
import Google from "@/public/companies/google.svg";
export interface CompaniesType {
  name: string;
  alt: string;
  icon: any;
  duration: string;
}

export default function Banner() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [refCompanyList, inViewCompaniesList] = useInView({ threshold: 0.5 });

  const companies: CompaniesType[] = [
    { name: "Microsoft", alt: 'Logo da microsoft', icon: Microsoft, duration: "duration-[1s]" },
    { name: "Microsoft2", alt: 'Logo da microsoft', icon: Microsoft2, duration: "duration-[1.2s]" },
    { name: "Github", alt: 'Logo do github', icon: Github, duration: "duration-[1.4s]" },
    { name: "Linkedin", alt: 'Logo do linkedin', icon: Linkedin, duration: "duration-[1.6s]" },
    { name: "Google", alt: 'Logo do google', icon: Google, duration: "duration-[1.8s]" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-5 py-5 min-h-[calc(100vh_-_164px)]`}>
        <AnimationDiv duration="duration-[1s]" inView={inView} className="flex flex-col justify-center col-span-1">
          <h2 className="text-neutra-800">
            <span className="text-semantica-1">Turbinando sua empresa</span> com
            as tecnologias de ponta
          </h2>
          <p className="text-neutra-700 leading-7 my-10">
            Uma fábrica de software líder no mercado! Contamos com uma equipe de
            especialistas altamente qualificados que combinam tecnologia de
            ponta com criatividade excepcional.
          </p>

          <div className="btns flex gap-5">
            <Button aria-label="Solicitar orçamento">Solicitar orçamento</Button>
            <Button aria-label="Saiba mais" secondary>Saiba mais</Button>
          </div>
        </AnimationDiv>

        <AnimationDiv duration="duration-[1.2s]" inView={inView} className="flex flex-col justify-center items-center md:items-end relative col-span-1">
          <Image priority src={HomeBanner} alt="Pessoas trabalhando no notebook" />

          <AnimationDiv duration="duration-[1.5s]" inView={inView} className="avatar-container hidden lg:flex items-center h-14 absolute top-[150px] left-10 bg-white shadow-2xl p-1 rounded-[36px]">
            <Image
              className="h-12 w-auto rounded-full"
              priority
              src={Avatar}
              alt="Avatar de usuário"
            />
            <div className="flex flex-col px-4">
              <span className="text-neutral-800 text-sm">Barbara</span>
              <p className="text-neutra-600 text-sm">Ótimo trabalho</p>
            </div>
          </AnimationDiv>

          <AnimationDiv duration="duration-[1.8s]" inView={inView} className="avatar-container hidden lg:flex items-center h-14 absolute bottom-[150px] left-0 bg-[#F39568] shadow-2xl p-1 rounded-[36px]">
            <Image
              className="h-12 w-auto rounded-full"
              priority
              src={Avatar}
              alt="Avatar de usuário"
            />
            <div className="flex flex-col px-4">
              <span className="text-neutral-800 text-sm">Barbara</span>
              <p className="text-neutra-200 text-sm">Equipe de alta qualidade👏</p>
            </div>
          </AnimationDiv>
        </AnimationDiv>
      </div>

      <div ref={refCompanyList} className="grid grid-cols-2 md:grid-cols-5 gap-y-2 gap-x-10 md:gap-5 mb-9">
        {companies.map((item: CompaniesType) => (
          <AnimationDiv key={item.name} duration={item.duration} inView={inViewCompaniesList} className="flex justify-center col-span-1">
            <Image
              className="w-4/6"
              priority
              src={item.icon}
              alt={item.alt}
            />
          </AnimationDiv>
        ))}
      </div>
    </div>
  );
}
