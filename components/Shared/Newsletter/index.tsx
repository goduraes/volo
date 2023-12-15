import Button from '../Button'

export default function Newsletter() {
  return (
    <div className="flex bg-white p-1 rounded-lg">
      <input
        type="text"
        placeholder="Digite seu e-mail..."
        className="flex-1 text-neutra-600 focus:ring-transparent focus:outline-0  px-2"
      />
      <Button aria-label="Enviar" className="px-7">
        Enviar
      </Button>
    </div>
  )
}
