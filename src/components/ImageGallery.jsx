import React from 'react';

import { ChevronLeft, ChevronRight, Play } from 'lucide-react'; // Añadir ícono de Play

const ImageGallery = ({
  productImages,
  selectedImage,
  setSelectedImage,
  handlePrev,
  handleNext,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex relative items-center justify-center border border-[#E8E8EB] rounded-[5px] overflow-hidden mb-[20px] mx-auto md:h-[470px] max-w-[600px]">
        {/* Mostrar imagen o video según el tipo */}
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

        {/* Botones de navegación */}
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

      {/* Miniaturas */}
      <div className="mt-4 flex justify-center gap-2 overflow-x-auto">
        {productImages.map((item, idx) => (
          <button
            key={idx}
            className={`
        border rounded-md overflow-hidden aspect-square
        md:w-16 md:h-16 flex items-center justify-center
        ${selectedImage === idx ? 'border-purple-600' : 'border-[#E8E8EB]'}
      `}
            onClick={() => setSelectedImage(idx)}
          >
            <div className="w-full h-full aspect-square relative">
              <img
                src={item.src}
                alt={`Product view ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Mostrar ícono de play en miniaturas de video */}
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
