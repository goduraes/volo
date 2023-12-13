import Button from "../../Shared/Button";
import Image from "next/image";

import HomeBanner from '../../../public/home-banner.jpg'
import Avatar from '../../../public/avatar.jpg'

export default function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 min-h-[calc(100vh_-_64px)]">
      <div className="flex flex-col justify-center col-span-1">
        <h2 className="font-montserrat text-neutra-800 leading-[65px] text-[54px]">
          <span className="text-semantica-1">Turbinando sua empresa</span> com
          as tecnologias de ponta
        </h2>
        <p className="text-neutra-700 leading-7 my-10">
          Uma fábrica de software líder no mercado! Contamos com uma equipe de
          especialistas altamente qualificados que combinam tecnologia de ponta
          com criatividade excepcional.
        </p>

        <div className="btns flex gap-5">
          <Button>Solicitar orçamento</Button>
          <Button secondary>Saiba mais</Button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center md:items-end relative col-span-1">
        <Image priority src={HomeBanner} alt="Volo logo" />

        <div className="hidden lg:flex items-center h-14 absolute top-[150px] left-10 bg-white shadow-2xl p-1 rounded-[36px]">
          <Image className="h-12 w-auto rounded-full" priority src={Avatar} alt="Volo logo" />
          <div className="flex flex-col px-4">
            <span className="text-neutral-800 text-sm">Barbara</span>
            <span className="text-neutra-600 text-sm">Ótimo trabalho</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center h-14 absolute bottom-[150px] left-0 bg-[#F39568] shadow-2xl p-1 rounded-[36px]">
          <Image className="h-12 w-auto rounded-full" priority src={Avatar} alt="Volo logo" />
          <div className="flex flex-col px-4">
            <span className="text-neutral-800 text-sm">Barbara</span>
            <span className="text-neutra-200 text-sm">Equipe de alta qualidade👏</span>
          </div>
        </div>
      </div>
    </div>
  );
}
