'use client'
import { useContext, useEffect, useState } from 'react'
import { MenuContext } from '@/contexts/MenuContext'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '@/components/Shared/Button'

import './style.css'
import { toast } from 'react-toastify'
import Loading from '@/components/Shared/Loading'
import { useInView } from 'react-intersection-observer'
import AnimationDiv from '@/components/Shared/AnimationDiv'

type Inputs = {
  setor: string
  nome: string
  empresa?: string
  email: string
  telefone: string
  orcamentoPrevio?: string
  mensagem: string
  comoNosEncontrou: string
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const [loading, setLoading] = useState<boolean>(false)
  const { setMenuActive } = useContext(MenuContext)

  useEffect(() => {
    setMenuActive('')
  }, [setMenuActive])

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true)
    try {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/contato`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      toast.success('E-mail de contato enviado com sucesso!')
      reset()
    } catch (error) {
      toast.error('Ops, algo de errado aconteceu!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div ref={ref} className="contact mx-auto max-w-2xl px-1 pb-10">
      <AnimationDiv
        duration="duration-[1s]"
        inView={inView}
        className="col-span-1"
      >
        <div className="contact-header md:px-16 mt-8 md:mt-16 mb-11">
          <h4 className="text-center font-medium">
            Entre em contato e descubra como podemos
            <span className="text-semantica-1"> ajudar você</span>!
          </h4>
          <p className="text-center mt-6">
            Entre em contato e agende uma visita para que possamos analisar e
            identificar a melhor solução para seu negócio.
          </p>
        </div>

        <form
          className="contact-form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input mb-4">
            <label htmlFor="setor" className="block required mb-1">
              Setor
            </label>
            <select
              id="setor"
              defaultValue=""
              {...register('setor', { required: true })}
              className={`border border-neutra-400 rounded-lg w-full
              ${errors.setor && 'border-semantica-4'}
              ${!watch('setor') && 'text-neutra-600'}
            `}
            >
              <option value="" disabled>
                Selecione
              </option>
              <option value="x">X</option>
              <option value="y">Y</option>
            </select>
          </div>

          <div className="grid gap-4 mb-4 md:grid-cols-2">
            <div className="input">
              <label htmlFor="nome" className="block required mb-1">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                {...register('nome', { required: true })}
                className={`border border-neutra-400 rounded-lg w-full ${
                  errors.nome && 'border-semantica-4'
                }`}
                placeholder="Digite aqui..."
              />
            </div>
            <div className="input">
              <label htmlFor="empresa" className="block mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                {...register('empresa')}
                className="border border-neutra-400 rounded-lg w-full"
                placeholder="Digite aqui..."
              />
            </div>
          </div>

          <div className="grid gap-4 mb-4 md:grid-cols-2">
            <div className="input">
              <label htmlFor="email" className="block required mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: ''
                  }
                })}
                className={`border border-neutra-400 rounded-lg w-full ${
                  errors.email && 'border-semantica-4'
                }`}
                placeholder="Digite aqui..."
              />
            </div>
            <div className="input">
              <label htmlFor="telefone" className="block required mb-1">
                Telefone
              </label>
              <input
                type="text"
                id="telefone"
                {...register('telefone', { required: true })}
                className={`border border-neutra-400 rounded-lg w-full ${
                  errors.telefone && 'border-semantica-4'
                }`}
                placeholder="Digite aqui..."
              />
            </div>
          </div>

          <div className="input mb-4">
            <label htmlFor="orcamentoPrevio" className="block mb-1">
              Orçamento Prévio
            </label>
            <input
              type="text"
              id="orcamentoPrevio"
              {...register('orcamentoPrevio')}
              className="border border-neutra-400 rounded-lg w-full"
              placeholder="Digite aqui..."
            />
          </div>

          <div className="input mb-2.5">
            <label htmlFor="mensagem" className="block required mb-1">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              {...register('mensagem', { required: true })}
              className={`border border-neutra-400 rounded-lg w-full ${
                errors.mensagem && 'border-semantica-4'
              }`}
              placeholder="Digite aqui..."
            ></textarea>
          </div>

          <div className="input mb-4">
            <label htmlFor="comoNosEncontrou" className="block required mb-1">
              Como você nos encontrou?
            </label>
            <select
              id="comoNosEncontrou"
              defaultValue=""
              {...register('comoNosEncontrou', { required: true })}
              className={`border border-neutra-400 rounded-lg w-full
              ${errors.comoNosEncontrou && 'border-semantica-4'}
              ${!watch('setor') && 'text-neutra-600'}
            `}
            >
              <option value="" disabled>
                Selecione
              </option>
              <option value="x">X</option>
              <option value="y">Y</option>
            </select>
          </div>

          <Button type="submit" className="w-full" aria-label="Enviar">
            {loading ? <Loading /> : 'Enviar'}
          </Button>
        </form>
      </AnimationDiv>
    </div>
  )
}
