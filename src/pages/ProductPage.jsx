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
  const [selectedStorage, setSelectedStorage] = useState('LT');
  const [openSection, setOpenSection] = useState(null);

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

  const toggleCollapse = (section) => {
    setOpenSection(openSection === section ? null : section);
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

          {/* Navegacion */}
          <div className="mt-4 flex justify-center gap-2 overflow-x-auto">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                className={`size-[12px] border rounded-full overflow-hidden md:size-auto md:rounded-md ${
                  selectedImage === idx
                    ? 'border-purple-600'
                    : 'border-[#E8E8EB]'
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
          {/* Descripción */}
          <div className="mt-6 flex flex-col ">
            <div
              className={`collapse collapse-arrow bg-base-100 rounded-none border-t border-[#A6A7B0] pt-[25px] mb-[20px] ${
                openSection === 'descripcion'
                  ? 'collapse-open'
                  : 'collapse-close'
              }`}
              onClick={() => toggleCollapse('descripcion')}
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-medium text-md md:text-2xl">
                Descripción
              </div>
              <div className="collapse-content text-base">
                TOMi8 es una computadora que permite convertir cualquier
                pantalla o proyector en una superficie interactiva (conexión
                HDMI), es portable e integra un Access Point para conectar
                simultáneamente hasta 80 dispositivos inteligentes y navegar por
                el servidor de contenidos local. Gracias a su tecnología de
                reconocimiento óptico permite escanear y procesar códigos QR,
                automatizando el llamado a lista, facilitando el acceso a
                encuestas, cuestionarios interactivos; así como la calificación
                automática de tests con preguntas de selección múltiple y la
                visualización de contenido de realidad aumentada.
              </div>
            </div>
            <div
              className={`collapse collapse-arrow bg-base-100 rounded-none border-t border-[#A6A7B0] pt-[25px] mb-[20px] ${
                openSection === 'especificaciones'
                  ? 'collapse-open'
                  : 'collapse-close'
              }`}
              onClick={() => toggleCollapse('especificaciones')}
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-medium text-lg md:text-2xl">
                Especificaciones técnicas
              </div>
              <div className="collapse-content text-base">
                <div className="flex flex-1 pt-6">
                  <table className="flex-1 rounded-[5px] text-blue-black overflow-hidden">
                    <tbody>
                      <tr className="bg-gray-200">
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Especificaciones eléctricas
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          Adaptador de corriente 5V - 6A - Consumo máximo 30
                          vatios
                        </td>
                      </tr>
                      <tr>
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Cámara incorporada
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          13 Megapíxeles 30fps, enfoque automático
                        </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Pizarra interactiva incorporada
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          Puntero infrarrojo de última generación basado en
                          visión artificial
                        </td>
                      </tr>
                      <tr>
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Sistema operativo
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          Android 12L
                        </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Puerto USB
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">1x 2.0</td>
                      </tr>
                      <tr>
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Puerto HDMI
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">HDMI 2.1</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Procesador
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          Octa core de 64 bit a 2.4 Ghz
                        </td>
                      </tr>
                      <tr>
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Memoria RAM
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          4GB LPDDR4X
                        </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          GPU
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          GPU de video Mali con soporte de IA y códecs de vídeo
                          8k
                        </td>
                      </tr>
                      <tr>
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Almacenamiento
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          64GB uSD / 128GB SSD
                        </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Tamaño
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          107mm (diámetro) x 133mm (Altura)
                        </td>
                      </tr>
                      <tr>
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Peso
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          440 gr dispositivo - 970 gr dentro de la caja,
                          incluyendo accesorios
                        </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Wifi
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          Chipset: RTL8821CU, USB2 0, 2,4 GHz + 5 GHz. 600 Mbps
                          (11N: 150 Mbps, 11AC: 433 Mbps). IEEE 802.11AC…
                          802.11b 802,11g 802.11n, WEP, WPA-PSK, WPA2-PSK,
                          cifrado WPA/WPA2 64/128 bit.
                        </td>
                      </tr>
                      <tr>
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Punto de Acceso Wifi
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          IEEE 802.11a/b/g/n/ac/ax WLAN 2.4 Ghz con velocidad de
                          hasta 573+1201 Mbps, CPU RISC de 32 bits de alto
                          rendimiento dedicada, externa e interna
                        </td>
                      </tr>

                      <tr className="bg-gray-200">
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Bluetooth
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">
                          Bluetooth 4.2
                        </td>
                      </tr>
                      <tr>
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Ethernet LAN/WAN
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">NO</td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Interfaz móvil 3G/4G
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">NO</td>
                      </tr>
                      <tr>
                        <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                          Batería
                        </td>
                        <td className="py-4 px-2 md:px-3 lg:px-5">NO</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className={`collapse collapse-arrow bg-base-100 rounded-none border-t border-[#A6A7B0] pt-[25px] mb-[20px] ${
                openSection === 'preguntas' ? 'collapse-open' : 'collapse-close'
              }`}
              onClick={() => toggleCollapse('preguntas')}
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-medium text-lg md:text-2xl">
                Preguntas más frecuentes
              </div>
              <div className="collapse-content text-base">
                <div
                  className={`collapse collapse-plus bg-base-100 border border-base-300${
                    openSection === 'pregunta-1'
                      ? 'collapse-open'
                      : 'collapse-close'
                  }`}
                  onClick={() => toggleCollapse('pregunta-1')}
                >
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold">
                    How do I create an account?
                  </div>
                  <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and
                    follow the registration process.
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold">
                    I forgot my password. What should I do?
                  </div>
                  <div className="collapse-content text-sm">
                    Click on "Forgot Password" on the login page and follow the
                    instructions sent to your email.
                  </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title font-semibold">
                    How do I update my profile information?
                  </div>
                  <div className="collapse-content text-sm">
                    Go to "My Account" settings and select "Edit Profile" to
                    make changes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Producto Info */}
        <div className="shrink-0 text-blue-black lg:block">
          <div className="border-0 border-[#A6A7B0] lg:border rounded-[10px] pt-[45px] pb-[20px] md:px-[20px] lg:px-[35px] lg:min-w-[460px] ">
            <h1 className="text-4xl font-bold mb-6">
              TOMi8, todo en uno para la educación
            </h1>
            <div className="text-5xl font-medium">
              {selectedStorage === 'LT' ? '$790.000 ARS' : '$990.000 ARS'}
            </div>
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
              <div className="flex flex-col items-center border border-[#A6A7B0] rounded-[10px] p-[25px] max-w-full mx-auto border-t ">
                <div className="flex gap-2 items-center justify-center px-[25px] mb-[25px]">
                  <div className="translate-0">Distribuidor autorizado:</div>
                  <img
                    src={aulasAmigasLogo}
                    alt="Aulas Amigas Logo"
                    className="h-13"
                  />
                </div>
                <button className="btn-ghost cursor-pointer rounded-4xl min-w-[250px] md:min-w-[335px] bg-[#5800FF] text-white py-2 font-medium hover:bg-[#4600CB] transition-colors">
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
