"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import Microsoft from '../../../public/companies/microsoft.svg';
import Microsoft2 from '../../../public/companies/microsoft-2.svg';
import Github from '../../../public/companies/github.svg';
import Linkedin from '../../../public/companies/linkedin.svg';
import Google from '../../../public/companies/google.svg';

export default function Companies() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const companies: any[] = [
    { name: 'Microsoft', icone: Microsoft, duration: 'duration-[1s]' },
    { name: 'Microsoft2', icone: Microsoft2, duration: 'duration-[1.2s]' },
    { name: 'Github', icone: Github, duration: 'duration-[1.4s]' },
    { name: 'Linkedin', icone: Linkedin, duration: 'duration-[1.6s]' },
    { name: 'Google', icone: Google, duration: 'duration-[1.8s]'},
  ]

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-5 gap-y-2 gap-x-10 md:gap-5 mb-9">
      {companies.map((item) => (
        <div key={item.name} className={`flex justify-center col-span-1 transition-all ${item.duration} ${inView ? "animation-show-left" : "animation-hidden-left"}`}>
          <Image
            className="h-auto"
            priority
            src={item.icone}
            alt="Volo logo"
          />
        </div>
      ))}
    </div>
  );
}
