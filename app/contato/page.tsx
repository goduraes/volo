import Button from '@/components/Shared/Button'

export default function Contact() {
  return (
    <div className="contact mx-auto max-w-2xl px-1">
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

      <form className="contact-form">
        <div className="mb-5">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Setor
          </label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="x">X</option>
            <option value="y">Y</option>
          </select>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Setor
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Setor
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John"
              required
            />
          </div>
        </div>

        <Button className="w-full" aria-label="Enviar">
          Enviar
        </Button>
      </form>
    </div>
  )
}
