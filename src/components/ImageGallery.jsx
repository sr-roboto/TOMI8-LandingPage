import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const ImageGallery = ({
  productImages,
  selectedImage,
  setSelectedImage,
  handlePrev,
  handleNext,
}) => {
  // Referencias y estados para el deslizamiento
  const scrollContainerRef = useRef(null);
  const thumbnailRefs = useRef([]); // Array de referencias para cada miniatura
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Inicializar array de refs
  useEffect(() => {
    thumbnailRefs.current = Array(productImages.length)
      .fill()
      .map((_, i) => thumbnailRefs.current[i] || React.createRef());
  }, [productImages.length]);

  // Desplazar automáticamente a la miniatura seleccionada
  useEffect(() => {
    if (thumbnailRefs.current[selectedImage]?.current) {
      thumbnailRefs.current[selectedImage].current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedImage]);

  // Funciones para manejar el deslizamiento con mouse/táctil
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidad
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Limpiar eventos cuando se desmonta el componente
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col">
      <div className="flex relative items-center justify-center border border-[#E8E8EB] rounded-[5px] overflow-hidden mb-[20px] mx-auto md:h-[470px] max-w-[600px]">
        {/* Código existente sin cambios */}
        {productImages[selectedImage].type === 'image' ? (
          <img
            src={productImages[selectedImage].src}
            alt={`Product view ${selectedImage + 1}`}
            className="w-[600px] h-[468px] object-cover rounded-lg"
          />
        ) : (
          <div className="relative w-[600px] h-[468px]">
            <video
              controls
              muted
              preload="metadata"
              className="w-full h-full object-cover rounded-lg"
              poster={productImages[selectedImage].src}
            >
              <source
                src={productImages[selectedImage].videoSrc}
                type="video/mp4"
              />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        )}

        <button
          className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-6 h-6" color="#5801FF" />
        </button>
        <button
          className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg"
          onClick={handleNext}
        >
          <ChevronRight className="w-6 h-6" color="#5801FF" />
        </button>
      </div>

      {/* Contenedor de miniaturas modificado */}
      <div
        ref={scrollContainerRef}
        className="mt-4 flex gap-2 overflow-x-auto pb-2 max-w-full scrollbar-hide cursor-grab"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {productImages.map((item, idx) => (
          <button
            key={idx}
            ref={thumbnailRefs.current[idx]} // Asignar referencia a cada botón
            className={`
              border rounded-md overflow-hidden flex-shrink-0
              w-16 h-16 flex items-center justify-center
              ${
                selectedImage === idx
                  ? 'border-2 border-purple-600'
                  : 'border border-[#E8E8EB]'
              }
            `}
            onClick={() => setSelectedImage(idx)}
          >
            <div className="w-full h-full aspect-square relative">
              <img
                src={item.src}
                alt={`Product view ${idx + 1}`}
                className="w-full h-full object-cover"
                draggable="false"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <Play className="text-white" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
