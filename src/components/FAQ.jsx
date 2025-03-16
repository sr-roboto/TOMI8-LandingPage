import React from 'react';

const FAQ = ({ openSections, toggleCollapse }) => {
  const faqs = [
    {
      id: 'pregunta-1',
      question: '¿TOMi8 funciona como un proyector?',
      answer:
        '¡No! TOMi8 debe estar conectado a un medio de proyección o una pantalla para que con su tecnología infrarroja pueda convertir ese medio en una pizarra digital interactiva. TOMi8 no proyecta directamente sobre una pared.',
    },
    {
      id: 'pregunta-2',
      question:
        '¿Puedo conectar algún tipo de periférico como mouse, teclado, disco duro, USB, entre otros?',
      answer:
        'Sí! Gracias a su tecnología Bluetooth 4.2 y a sus puertos de conexión de USB y HDMI, es posible conectar los periféricos que se ajusten a las necesidades del usuario.',
    },
    {
      id: 'pregunta-3',
      question:
        '¿Cómo funciona la "emulación de navegación a Internet sin conexión" o el "Internet sin Internet" de TOMi8?',
      answer:
        'El dispositivo genera una red local propia que permite conectar los diferentes dispositivos a su red. Esto sirve para navegar en el contenido que TOMi8 tiene pre-cargado en su disco duro, ya sea del que tiene TOMi8 desde fábrica o aquel que el maestro haya agregado desde la sección de recursos sin conexión.',
    },
    {
      id: 'pregunta-4',
      question:
        '¿Cuántos dispositivos de estudiantes se pueden conectar a la red local del dispositivo TOMi8?',
      answer:
        'Es posible conectar simultáneamente hasta 80 dispositivos inteligentes. Los estudiantes podrán conectar sus tabletas, PC, portátiles y teléfonos inteligentes a TOMi8 para navegar en el servidor de contenido local o como puerta de enlace a Internet.',
    },
    {
      id: 'pregunta-5',
      question: '¿Cuál es el rango de cobertura de TOMi8?',
      answer:
        'TOMi8 dispone de dos ranuras externas para conectar extensiones con antenas opcionales para una cobertura de hasta 80 metros.',
    },
    {
      id: 'pregunta-6',
      question: '¿TOMi8 puedo conectarlo a un computador?',
      answer:
        'Podrás conectarlo a un medio de proyección, pero no a un computador. Desde TOMi8 podrás realizar todos los trabajos que normalmente realizas en un computador, pero es mucho más interactivo para ti y tus estudiantes, con herramientas y funciones únicas.',
    },
  ];

  return (
    <div
      className={`collapse collapse-arrow bg-base-100 rounded-none border-t border-[#A6A7B0] pt-[25px] mb-[20px] ${
        openSections['preguntas'] ? 'collapse-open' : 'collapse-close'
      }`}
    >
      <input
        type="radio"
        name="my-accordion-2"
        onClick={() => toggleCollapse('preguntas')}
      />
      <div className="collapse-title font-medium text-lg md:text-2xl">
        Preguntas más frecuentes
      </div>
      <div className="collapse-content text-base flex flex-col gap-4 pt-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`collapse collapse-plus bg-base-100 py-4 border border-[#A6A7B0] ${
              openSections[faq.id]
                ? 'collapse-open border-purple-600'
                : 'collapse-close'
            }`}
          >
            <input
              type="radio"
              name="my-accordion-3"
              onClick={() => toggleCollapse(faq.id)}
            />
            <div
              className={`collapse-title font-medium text-lg ${
                openSections[faq.id] ? 'text-purple-600' : ''
              }`}
            >
              {faq.question}
            </div>
            <div className="collapse-content text-base">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
