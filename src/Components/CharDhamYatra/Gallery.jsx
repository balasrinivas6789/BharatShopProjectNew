import React, { useState } from 'react';
import picture1 from '../CharDhamYatra/galleryImages/Frame 770.png';
import picture2 from '../CharDhamYatra/galleryImages/Frame 771.png';
import picture3 from '../CharDhamYatra/galleryImages/Frame 776.png';
import picture4 from '../CharDhamYatra/galleryImages/Frame 777.png';
import picture5 from '../CharDhamYatra/galleryImages/Frame 778.png';

const Gallery = () => {
  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Click handler to set the selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Array of images for easier management
  const images = [picture1, picture2, picture3, picture4, picture5];

  return (
    <div className='flex flex-row w-[1397px] h-[767px] p-[64px] bg-white  items-center gap-[29px]  mx-auto'>
      <div>
        <img
          src={picture1}
          alt='pic1'
          className='w-[477px] h-[639px] rounded-[8px] cursor-pointer'
          onClick={() => handleImageClick(picture1)}
        />
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row gap-[29px]'>
          <img
            src={picture3}
            alt='pic3'
            className='w-[235px] h-[283px] rounded-[8px] cursor-pointer'
            onClick={() => handleImageClick(picture3)}
          />
          <img
            src={picture4}
            alt='pic4'
            className='w-[235px] h-[283px] rounded-[8px] cursor-pointer'
            onClick={() => handleImageClick(picture4)}
          />
          <img
            src={picture5}
            alt='pic5'
            className='w-[235px] h-[283px] rounded-[8px] cursor-pointer'
            onClick={() => handleImageClick(picture5)}
          />
        </div>
        <img
          src={picture2}
          alt='pic2'
          className='mt-[12px] w-[763px] h-[344px] rounded-[8px] cursor-pointer'
          onClick={() => handleImageClick(picture2)}
        />
      </div>
      

      {/* Conditionally render the preview */}
      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50'>
          <div className='relative w-[80%] h-[100dvh]'>
            <img
              src={selectedImage}
              alt='preview'
              className='max-w-[90vw] min-h-[72vh] max-h-[72vh] left-[50%] transform -translate-x-1/2 rounded-[8px] absolute'
            />
            <button
              className='absolute top-2 right-12 h-[48px] w-[48px] text-black text-2xl bg-white  '
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            
            <div className='flex flex-row justify-center mt-[75dvh] gap-2 overflow-x-auto'>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumbnail ${index}`}
                  className={`w-[235px] h-[186px] rounded-[8px] cursor-pointer border-2 ${img === selectedImage ? 'border-white' : 'border-transparent'}`}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
