import React from 'react';
import { Youtube, Facebook, Instagram } from 'lucide-react';
import tomiLogoWhite from '../assets/images/tomi-logo-white.svg';

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className=" bg-gray-800">
        <div className="px-3 py-8 md:px-0 md:pt-12 md:pb-8 max-w-[1110px] w-full m-auto">
          {/* Main content - logo left, navigation right */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            {/* Logo and tagline - left side */}
            <div className="mb-8 md:mb-0 md:max-w-xs">
              <img
                src={tomiLogoWhite}
                alt=""
                className="h-12 mb-5 relative px-3 md:px-0"
              />
              <p className="text-gray-300">
                Educación divertida y personalizada universalmente accesible
              </p>
            </div>

            {/* Navigation grid - right side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:w-1/2 md:ml-auto">
              {/* About Us */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300 ">
                  Sobre nosotros
                </h3>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Impacto
                    </a>
                  </li>
                </ul>
              </div>

              {/* Help */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Ayuda
                </h3>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Centro de ayudas
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Soporte@tomi.digital
                    </a>
                  </li>
                </ul>
              </div>

              {/* Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Información
                </h3>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Política de garantía
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Quiero ser distribuidor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-gray-700 rounded-lg p-8">
            <p className="text-gray-400 mb-4 md:mb-0">
              Copyright © 2024 TOMi, Inc.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
