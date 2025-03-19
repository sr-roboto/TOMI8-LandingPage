import React from 'react';
import { ShoppingCart, Lock, Info, MessageCircleMore } from 'lucide-react';

const ProductInfo = ({
  selectedStorage,
  setSelectedStorage,
  wompiIcon,
  authorizedDistributors,
}) => {
  return (
    <div className="shrink-0 text-blue-black">
      <div className="border-0 border-gray-400 lg:border rounded-lg pt-11 pb-5 md:px-5 lg:px-9 lg:min-w-[460px]">
        <h1 className="text-4xl font-bold mb-6">
          TOMi8, todo en uno para la educación
        </h1>
        <div className="text-5xl font-medium">
          {selectedStorage === 'LT' ? (
            <span className="flex gap-2 items-center">
              $790.000 ARS <span className="text-2xl">($590 US)</span>
            </span>
          ) : (
            <span>
              $990.000 ARS <span className="text-2xl">($750 US)</span>
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-6">IVA Incluido</p>
        <div className="flex items-center gap-5 mb-8">
          {/* <div className="flex items-center gap-2 rounded-lg bg-blue-100 p-1">
            <ShoppingCart className="w-6 h-6" />
            <span>Envío gratis</span>
          </div> */}
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
              className={`btn-ghost cursor-pointer w-full py-3 px-4 rounded-lg border ${
                selectedStorage === 'LT'
                  ? 'border-purple-600'
                  : 'border-gray-300'
              }`}
              onClick={() => setSelectedStorage('LT')}
            >
              TOMi8 LT 4GB / 64GB
            </button>
            <button
              className={`btn-ghost cursor-pointer w-full py-3 px-4 rounded-lg border ${
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
          <div className="flex flex-col items-center border border-[#A6A7B0] rounded-[10px] p-[25px] max-w-full mx-auto">
            <div className="w-full mb-[25px]">
              <div className="text-center mb-3">
                Distribuidores autorizados:
              </div>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                {authorizedDistributors.map((distributor) => (
                  <div
                    key={distributor.id}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={distributor.logo}
                      alt={`${distributor.name} Logo`}
                      className="max-h-[60px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button className="btn-ghost cursor-pointer rounded-4xl min-w-[250px] md:min-w-[335px] bg-[#5800FF] text-white py-2 font-medium hover:bg-[#4600CB] transition-colors">
              Comprar ahora
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-5 justify-center items-center mb-[35px] md:flex-row lg:mb-[0px] lg:gap-2">
          <div className="flex items-center">
            <a
              href="https://www.tomiargentina.com.ar/"
              target="_blank"
              className="text-blue-600 hover:text-blue-700 font-bold underline"
            >
              <Info className="inline h-5" />
              <span className="">Mas información</span>
            </a>
          </div>
          <a
            href="https://wa.me/5491143000057"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 cursor-pointer hover:text-green-700 font-bold underline"
          >
            <MessageCircleMore className="inline h-5" />
            <span>+54911-4300-0057</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
