import React, { useState } from 'react';
// Importar componentes
import ImageGallery from '../components/ImageGallery';
import ProductInfo from '../components/ProductInfo';
import ProductDescription from '../components/ProductDescription';
import TechnicalSpecifications from '../components/TechnicalSpecifications';
import FAQ from '../components/FAQ';
import ComparisonTable from '../components/ComparisonTable';

// Importar imágenes
import tomi1 from '../assets/images/tomi-1.jpg';
import tomi2 from '../assets/images/tomi-2.png';
import tomi3 from '../assets/images/tomi-3.jpg';
import tomi4 from '../assets/images/tomi-4.png';
import tomi5 from '../assets/images/tomi-5.jpg';
import tomi6 from '../assets/images/tomi-6.png';
import tomi7 from '../assets/images/tomi-7.jpg';
import tomi8 from '../assets/images/tomi-8.png';
import tomi9 from '../assets/images/tomi-9.jpg';
import aulasAmigasLogo from '../assets/images/aulas-icon.png';
import wompiIcon from '../assets/images/wompi-icon.png';
import compare from '../assets/images/compare-icon.png';
import tomiLt from '../assets/images/tomi8-lt.png';
import tomiStd from '../assets/images/tomi8-std.png';

function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState('LT');
  const [openSections, setOpenSections] = useState({});

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
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="max-w-[1140px] mx-auto px-[15px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 border-b boder-[#A6A7B0]">
        <div className="flex flex-col">
          <ImageGallery
            productImages={productImages}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />

          <div className="block lg:hidden">
            <ProductInfo
              selectedStorage={selectedStorage}
              setSelectedStorage={setSelectedStorage}
              aulasAmigasLogo={aulasAmigasLogo}
              wompiIcon={wompiIcon}
            />
          </div>

          <div className="grid *:grid-cols-3 gap-2 mt-4 overflow-x-auto">
            <div className="mt-6 flex flex-col order-last lg:order-none">
              <ProductDescription
                openSections={openSections}
                toggleCollapse={toggleCollapse}
              />

              <TechnicalSpecifications
                openSections={openSections}
                toggleCollapse={toggleCollapse}
              />

              <FAQ
                openSections={openSections}
                toggleCollapse={toggleCollapse}
              />
            </div>
          </div>
        </div>

        <div className="shrink-0 text-blue-black lg:block hidden">
          <ProductInfo
            selectedStorage={selectedStorage}
            setSelectedStorage={setSelectedStorage}
            aulasAmigasLogo={aulasAmigasLogo}
            wompiIcon={wompiIcon}
          />
        </div>
      </div>

      <ComparisonTable
        compare={compare}
        tomiLt={tomiLt}
        tomiStd={tomiStd}
        selectedStorage={selectedStorage}
      />
    </section>
  );
}

export default ProductPage;
