"use client";
import { useInView } from "react-intersection-observer";
import Button from "../../../components/Button";
import Image from "next/image";

import HomeBanner from "../../../public/home-banner.jpg";
import Avatar from "../../../public/avatar.jpg";

import Microsoft from "../../../public/companies/microsoft.svg";
import Microsoft2 from "../../../public/companies/microsoft-2.svg";
import Github from "../../../public/companies/github.svg";
import Linkedin from "../../../public/companies/linkedin.svg";
import Google from "../../../public/companies/google.svg";
export interface CompaniesType {
  name: string;
  alt: string;
  icone: any;
  duration: string;
}

export default function Banner() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [refCompanies, inViewCompanies] = useInView({ threshold: 0.5 });

  const companies: CompaniesType[] = [
    { name: "Microsoft", alt: 'Logo da microsoft', icone: Microsoft, duration: "duration-[1s]" },
    { name: "Microsoft2", alt: 'Logo da microsoft', icone: Microsoft2, duration: "duration-[1.2s]" },
    { name: "Github", alt: 'Logo do github', icone: Github, duration: "duration-[1.4s]" },
    { name: "Linkedin", alt: 'Logo do linkedin', icone: Linkedin, duration: "duration-[1.6s]" },
    { name: "Google", alt: 'Logo do google', icone: Google, duration: "duration-[1.8s]" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-5 py-5 min-h-[calc(100vh_-_164px)]`}
      >
        <div
          className={`flex flex-col justify-center col-span-1 transition-all duration-[1s] ${
            inView ? "animation-show-left" : "animation-hidden-left"
          }`}
        >
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
            <Button>Solicitar orçamento</Button>
            <Button secondary>Saiba mais</Button>
          </div>
        </div>

        <div
          className={`flex flex-col justify-center items-center md:items-end relative col-span-1 transition-all duration-[1.2s] ${
            inView ? "animation-show-left" : "animation-hidden-left"
          }`}
        >
          <Image priority src={HomeBanner} alt="Volo logo" />

          <div className={`hidden lg:flex items-center h-14 absolute top-[150px] left-10 bg-white shadow-2xl p-1 rounded-[36px] transition-all duration-[1.5s]
            ${inView ? "animation-show-left" : "animation-hidden-left"}`}>
            <Image
              className="h-12 w-auto rounded-full"
              priority
              src={Avatar}
              alt="Volo logo"
            />
            <div className="flex flex-col px-4">
              <span className="text-neutral-800 text-sm">Barbara</span>
              <span className="text-neutra-600 text-sm">Ótimo trabalho</span>
            </div>
          </div>

          <div className={`hidden lg:flex items-center h-14 absolute bottom-[150px] left-0 bg-[#F39568] shadow-2xl p-1 rounded-[36px] transition-all duration-[1.8s]
            ${inView ? "animation-show-left" : "animation-hidden-left"}`}>
            <Image
              className="h-12 w-auto rounded-full"
              priority
              src={Avatar}
              alt="Volo logo"
            />
            <div className="flex flex-col px-4">
              <span className="text-neutral-800 text-sm">Barbara</span>
              <span className="text-neutra-200 text-sm">
                Equipe de alta qualidade👏
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={refCompanies}
        className="grid grid-cols-2 md:grid-cols-5 gap-y-2 gap-x-10 md:gap-5 mb-9"
      >
        {companies.map((item: CompaniesType) => (
          <div
            key={item.name}
            className={`flex justify-center col-span-1 transition-all ${
              item.duration
            } ${inViewCompanies ? "animation-show-left" : "animation-hidden-left"}`}
          >
            <Image
              className="w-4/6"
              priority
              src={item.icone}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
