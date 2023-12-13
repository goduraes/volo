"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "@/components/Button";

import CustomerReviewsImg from "../../../public/customer-reviews.jpg";

export default function CustomerReviews() {
  const [refContact, inViewContact] = useInView({ threshold: 0.3 });
  const [refCarousel, inViewCarousel] = useInView({ threshold: 0.3 });

  return (
    <div className="flex flex-col justify-center min-h-screen bg-services">
      <div ref={refCarousel} className="w-full mx-auto max-w-7xl py-10 px-2">
        <h3>Comentários dos <br /> nossos clientes</h3>
      </div>

      <div
        ref={refContact}
        className="flex flex-col justify-center items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-7xl py-10 px-2">
          <div
            className={`col-span-1 transition-all duration-[1.2s] ${
              inViewContact ? "animation-show-left" : "animation-hidden-left"
            }`}
          >
            <h2 className="text-neutra-700 mb-4">Quer conhecer mais</h2>
            <p className="text-neutra-600 mb-5">
              Venha conversar com a nossa equipe incrível e esclareça todas as
              suas dúvidas! Estamos aqui para ajudar e tornar sua experiência
              ainda mais incrível. Não hesite em entrar em contato conosco, será
              um prazer atendê-lo(a)!
            </p>
            <Button>Entrar em contato</Button>
          </div>

          <div
            className={`flex justify-end col-span-1 transition-all duration-[1s] ${
              inViewContact ? "animation-show-left" : "animation-hidden-left"
            }`}
          >
            <Image
              className="w-auto h-auto"
              priority
              src={CustomerReviewsImg}
              alt="Homem trabalhando no notebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
