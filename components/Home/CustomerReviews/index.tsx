'use client'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Button from '@/components/Shared/Button'
import Carousel from 'react-multi-carousel'
import AnimationDiv from '@/components/Shared/AnimationDiv'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import 'react-multi-carousel/lib/styles.css'
import CustomerReviewsImg from '@/public/customer-reviews.jpg'
import Avatar from '@/public/avatar.jpg'

export interface ReviewCardType {
  title: string
  text: string
  name: string
  date: string
  avatar: any
}

export default function CustomerReviews() {
  const [refContact, inViewContact] = useInView({ threshold: 0.3 })
  const [refCarousel, inViewCarousel] = useInView({ threshold: 0.3 })

  const reviewCards: ReviewCardType[] = [
    {
      title: '“Incrível o trabalho, pretendo contrair mais vezes”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nisi tempus, tristique odio id, placerat metus.',
      name: 'Carlos Eduardo',
      date: '20/07/2023',
      avatar: Avatar
    },
    {
      title: '“Teste 1”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nisi tempus, tristique odio id, placerat metus.',
      name: 'Carlos Eduardo',
      date: '20/07/2023',
      avatar: Avatar
    },
    {
      title: '“Teste 2”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nisi tempus, tristique odio id, placerat metus.',
      name: 'Carlos Eduardo',
      date: '20/07/2023',
      avatar: Avatar
    },
    {
      title: '“Teste 3”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nisi tempus, tristique odio id, placerat metus.',
      name: 'Carlos Eduardo',
      date: '20/07/2023',
      avatar: Avatar
    },
    {
      title: '“Teste 4”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nisi tempus, tristique odio id, placerat metus.',
      name: 'Carlos Eduardo',
      date: '20/07/2023',
      avatar: Avatar
    },
    {
      title: '“Teste 5”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nisi tempus, tristique odio id, placerat metus.',
      name: 'Carlos Eduardo',
      date: '20/07/2023',
      avatar: Avatar
    },
    {
      title: '“Teste 6”',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nisi tempus, tristique odio id, placerat metus.',
      name: 'Carlos Eduardo',
      date: '20/07/2023',
      avatar: Avatar
    }
  ]

  const ActionsBtns = (actions: any) => {
    const nextDisabled: boolean =
      actions.carouselState.slidesToShow +
        actions.carouselState.currentSlide ===
      actions.carouselState.totalItems
    const prevDisabled: boolean = actions.carouselState.currentSlide === 0

    return (
      <div className="flex absolute top-0 right-0 gap-4">
        <button
          type="button"
          disabled={prevDisabled}
          className={`flex justify-center items-center w-9 h-9 shadow-lg rounded-full ${
            prevDisabled ? 'bg-neutra-500' : 'bg-semantica-1'
          }`}
          onClick={() => actions.previous()}
        >
          <ArrowLeftIcon className="text-white h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          disabled={nextDisabled}
          className={`flex justify-center items-center w-9 h-9 shadow-lg rounded-full ${
            nextDisabled ? 'bg-neutra-500' : 'bg-semantica-1'
          }`}
          onClick={() => actions.next()}
        >
          <ArrowRightIcon className="text-white h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center bg-services">
      <div ref={refCarousel} className="w-full mx-auto max-w-7xl py-20 px-2">
        <AnimationDiv duration="duration-[1s]" inView={inViewCarousel}>
          <h3 className="font-medium mb-4">
            Comentários dos <br /> nossos clientes
          </h3>
        </AnimationDiv>

        <AnimationDiv duration="duration-[1s]" inView={inViewCarousel}>
          <Carousel
            customButtonGroup={<ActionsBtns />}
            arrows={false}
            centerMode={false}
            className="relative pt-12"
            containerClass="container overflow-hidden mx-auto"
            sliderClass="flex"
            minimumTouchDrag={80}
            draggable
            partialVisible
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1290 },
                items: 3,
                slidesToSlide: 1,
                partialVisibilityGutter: 70
              },
              tablet: {
                breakpoint: { max: 1290, min: 768 },
                items: 2,
                slidesToSlide: 1,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 1,
                slidesToSlide: 1,
                partialVisibilityGutter: 40
              }
            }}
            slidesToSlide={1}
          >
            {reviewCards.map((item: ReviewCardType, i: number) => (
              <AnimationDiv
                key={item.name + item.title}
                duration={`duration-[1.${i * 2}s]`}
                inView={inViewCarousel}
                className="carousel-card flex mx-2 flex-col justify-between min-w-[300px] h-[350px] bg-white shadow-lg rounded-lg p-6"
              >
                <h2 className="text-xl py-2 font-medium text-neutra-700">
                  {item.title}
                </h2>
                <p className="py-2 text-neutra-600">{item.text}</p>

                <div className="flex items-center gap-5">
                  <Image
                    className="w-14 h-14 rounded-full shadow-lg"
                    priority
                    src={item.avatar}
                    alt={`Avatar de ${item.name}`}
                  />
                  <footer className="flex flex-col author-info">
                    <span className="font-montserrat font-medium text-2xl text-neutra-700">
                      {item.name}
                    </span>
                    <p className="font-montserrat text-xl text-neutra-500">
                      {item.date}
                    </p>
                  </footer>
                </div>
              </AnimationDiv>
            ))}
          </Carousel>
        </AnimationDiv>
      </div>

      <div
        ref={refContact}
        className="flex flex-col justify-center items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-7xl pb-20 px-2">
          <AnimationDiv
            duration="duration-[1s]"
            inView={inViewContact}
            className="col-span-1"
          >
            <h2 className="font-medium text-neutra-700 mb-4">
              Quer conhecer mais
            </h2>
            <p className="text-neutra-600 mb-5">
              Venha conversar com a nossa equipe incrível e esclareça todas as
              suas dúvidas! Estamos aqui para ajudar e tornar sua experiência
              ainda mais incrível. Não hesite em entrar em contato conosco, será
              um prazer atendê-lo(a)!
            </p>
            <Button aria-label="Entrar em contato">Entrar em contato</Button>
          </AnimationDiv>

          <AnimationDiv
            duration="duration-[1.2s]"
            inView={inViewContact}
            className="flex justify-end col-span-1"
          >
            <Image
              className="w-full h-auto"
              priority
              src={CustomerReviewsImg}
              alt="Homem trabalhando no notebook"
            />
          </AnimationDiv>
        </div>
      </div>
    </div>
  )
}
