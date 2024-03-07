import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../Button'

type Inputs = {
  email: string
}

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <form
      className={`flex border-2 bg-white p-1 rounded-lg ${
        errors.email && 'border-semantica-4'
      }`}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="email"
        {...register('email', {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: ''
          }
        })}
        placeholder="Digite seu e-mail..."
        className="flex-1 text-neutra-600 focus:ring-transparent focus:outline-none focus-visible:outline-none placeholder:text-neutra-600 px-2"
      />
      <Button type="submit" aria-label="Enviar" className="px-7">
        Enviar
      </Button>
    </form>
  )
}
