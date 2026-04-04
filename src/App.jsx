import { useState } from 'react'
import { content } from './content'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="page">
      <section className="card">
        <img
          className="card__image"
          src={content.image}
          alt="Imagen principal"
          onClick={() => setIsOpen(true)}
        />
        <h1 className="card__title">{content.text}</h1>
      </section>

      {isOpen && (
        <button
          className="lightbox"
          type="button"
          aria-label="Cerrar imagen ampliada"
          onClick={() => setIsOpen(false)}
        >
          <img
            className="lightbox__image"
            src={content.image}
            alt="Imagen principal ampliada"
          />
        </button>
      )}
    </main>
  )
}

export default App
