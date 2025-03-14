import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import aulasAmigasLogo from '../assets/images/aulas-icon.png';
import wompiIcon from '../assets/images/wompi-icon.png';
import tomi1 from '../assets/images/tomi-1.jpg';
import tomi2 from '../assets/images/tomi-2.png';
import tomi3 from '../assets/images/tomi-3.jpg';
import tomi4 from '../assets/images/tomi-4.png';
import tomi5 from '../assets/images/tomi-5.jpg';
import tomi6 from '../assets/images/tomi-6.png';
import tomi7 from '../assets/images/tomi-7.jpg';
import tomi8 from '../assets/images/tomi-8.png';
import tomi9 from '../assets/images/tomi-9.jpg';

function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState('STD');

  const productImages = [
    tomi1,
    tomi2,
    tomi3,
    tomi4,
    tomi5,
    tomi6,
    tomi7,
    tomi8,
    tomi9,
  ];

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="max-w-[1140px] mx-auto px-[15px] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 border-b boder-[#A6A7B0] ">
        {/* Galeria de imagenes */}
        <div className="flex flex-col">
          <div className="flex relative items-center justify-center border border-[#E8E8EB] rounded-[5px] overflow-hidden mb-[20px] mx-auto md:h-[470px] max-w-[600px] ">
            <img
              src={productImages[selectedImage]}
              alt={`Product view ${selectedImage + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              className="btn btn-ghost btn-active absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6" color="#5801FF" />
            </button>
            <button
              className="btn btn-ghost btn-active absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" color="#5801FF" />
            </button>
          </div>

          {/* Navegacion */}
          <div className="mt-4 flex justify-center gap-2 overflow-x-auto">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                className={`size-[12px] border rounded-full overflow-hidden md:size-auto md:rounded-[5px] ${
                  selectedImage === idx ? 'bg-purple-600' : 'border-[#E8E8EB]'
                }`}
                onClick={() => setSelectedImage(idx)}
              >
                <img
                  src={img}
                  alt={`Product view ${idx + 1}`}
                  className="hidden md:block"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Producto Info */}
        <div className="shrink-0 text-blue-black  lg:block">
          <div className="border-0 border-[#A6A7B0] lg:border rounded-[10px] pt-[45px] pb-[20px] md:px-[20px] lg:px-[35px] lg:min-w-[460px] ">
            <h1 className="text-4xl font-bold mb-6">
              TOMi8, todo en uno para la educación
            </h1>
            <div className="text-5xl font-medium">$990.000 ARS</div>
            <p className="text-sm text-gray-600 mb-6">IVA Incluido</p>
            <div className="flex items-center gap-5 mb-8">
              <div className="flex items-center gap-2 rounded-lg bg-blue-100 p-1 ">
                <ShoppingCart className="w-6 h-6" />
                <span>Envío gratis</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="https://flagcdn.com/w20/ar.png"
                  alt="Argentina flag"
                  className="w-5"
                />
                <span className="font-bold text-[#5800FF]">ARG</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-4">
                Almacenamiento. ¿Cuánto espacio necesitas?
              </h3>
              <div className="space-y-3">
                <button
                  className={`w-full py-3 px-4 rounded-lg border ${
                    selectedStorage === 'LT'
                      ? 'border-purple-600'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedStorage('LT')}
                >
                  TOMi8 LT 4GB / 64GB
                </button>
                <button
                  className={`w-full py-3 px-4 rounded-lg border ${
                    selectedStorage === 'STD'
                      ? 'border-purple-600'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedStorage('STD')}
                >
                  TOMi8 STD 4GB / 128GB
                </button>
              </div>
            </div>
            <div className="border-t border-[#A6A7B0] pt-[25px] mb-[20px]">
              <div className="flex flex-col items-center border border-[#A6A7B0] rounded-[10px] p-[25px] max-w-full mx-auto border-t ">
                <div className="flex gap-2 items-center justify-center px-[25px] mb-[25px]">
                  <div className="translate-0">Distribuidor autorizado:</div>
                  <img
                    src={aulasAmigasLogo}
                    alt="Aulas Amigas Logo"
                    className="h-13"
                  />
                </div>
                <button className="rounded-4xl min-w-[250px] md:min-w-[335px] bg-[#5800FF] text-white py-2 font-medium hover:bg-[#4600CB] transition-colors">
                  Comprar ahora
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-5 justify-center items-center mb-[35px] md:flex-row lg:mb-[0px] lg:gap-2 ">
              <div className="flex items-center">
                <Lock className="inline h-4" />

                <span className="text-gray-600">Compra segura</span>
              </div>
              <img src={wompiIcon} alt="Wompi Logo" className="h-4 inline " />
              <a href="#" className="text-purple-600 font-bold underline">
                ¿Necesitas asesoría?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
