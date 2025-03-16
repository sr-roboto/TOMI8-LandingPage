import React from 'react';

const ProductDescription = ({ openSections, toggleCollapse }) => {
  return (
    <div
      className={`collapse collapse-arrow cursor-pointer bg-base-100 rounded-none border-t border-gray-400 pt-6 mb-5 ${
        openSections['descripcion'] ? 'collapse-open' : 'collapse-close'
      }`}
    >
      <input
        type="radio"
        name="my-accordion-2"
        onClick={() => toggleCollapse('descripcion')}
      />
      <div className="collapse-title font-medium text-lg md:text-2xl">
        Descripción
      </div>
      <div className="collapse-content text-base">
        TOMi8 es una computadora que permite convertir cualquier pantalla o
        proyector en una superficie interactiva (conexión HDMI), es portable e
        integra un Access Point para conectar simultáneamente hasta 80
        dispositivos inteligentes y navegar por el servidor de contenidos local.
        Gracias a su tecnología de reconocimiento óptico permite escanear y
        procesar códigos QR, automatizando el llamado a lista, facilitando el
        acceso a encuestas, cuestionarios interactivos; así como la calificación
        automática de tests con preguntas de selección múltiple y la
        visualización de contenido de realidad aumentada.
      </div>
    </div>
  );
};

export default ProductDescription;
