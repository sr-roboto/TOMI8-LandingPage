import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      <div className="mt-4 flex justify-center gap-2 overflow-x-auto">
        {productImages.map((img, idx) => (
          <button
            key={idx}
            className={`size-[12px] border rounded-full overflow-hidden md:size-auto md:rounded-md ${
              selectedImage === idx ? 'border-purple-600' : 'border-[#E8E8EB]'
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
  );
};

export default ImageGallery;
