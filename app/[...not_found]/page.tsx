'use client'
import { useInView } from 'react-intersection-observer'
import AnimationDiv from '@/components/Shared/AnimationDiv'
import Error404 from '@/public/error-404.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false })

export default function NotFoundCatchAll() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <div ref={ref}>
      <AnimationDiv
        duration="duration-[1s]"
        inView={inView}
        className="flex justify-center items-center h-[calc(100vh_-_64px)]"
      >
        <Lottie animationData={Error404} loop play className="w-1/2 h-auto" />
      </AnimationDiv>
    </div>
  )
}
