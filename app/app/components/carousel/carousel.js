'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const Carousel = () => {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         fetch('carousel.json')
//             .then((res) => res.json())
//             .then((data) => setItems(data));
//     }, []);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//     };

//     return (
//         <div className='carousel-container'>
//             <Slider {...settings}>
//                 {items.map((item) => (
//                     <div key={item.id}>
//                         <img
//                             src={item.image}
//                             alt={item.title}
//                             style={{ width: '100%' }}
//                         />
//                         <h3>{item.title}</h3>
//                         <p>{item.description}</p>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default Carousel;
