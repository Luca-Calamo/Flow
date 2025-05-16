// components/Carousel.js
'use client';
import { useState } from 'react';

const Carousel = ({ images }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % images.length);
    const prevSlide = () =>
        setCurrent((current - 1 + images.length) % images.length);

    return (
        <div className='relative w-full max-w-xl mx-auto overflow-hidden'>
            <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        className='w-full flex-shrink-0'
                        alt={`Slide ${idx}`}
                    />
                ))}
            </div>
            <button
                onClick={prevSlide}
                className='absolute left-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1'
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className='absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1'
            >
                ❯
            </button>
        </div>
    );
};

export default Carousel;
