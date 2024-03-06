'use client'
import { Player } from '@lottiefiles/react-lottie-player'
import { useInView } from 'react-intersection-observer'
import AnimationDiv from '@/components/Shared/AnimationDiv'
import Error404 from '@/public/error-404.json'
export default function NotFoundCatchAll() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <div ref={ref}>
      <AnimationDiv
        duration="duration-[1s]"
        inView={inView}
        className="flex justify-center items-center h-[calc(100vh_-_64px)]"
      >
        <Player
          autoplay={true}
          loop={true}
          src={Error404}
          className="w-full h-auto"
        />
      </AnimationDiv>
    </div>
  )
}
