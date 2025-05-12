// import WardrobeCardHome from '../components/wardrobe-components/wardrobeCardHome';
import WardrobeCardHome from '@/app/components/wardrobe-components/wardrobeCardHome';

export default function Wardrobe() {
    return (
        <div>
            {/* <WardrobeCardHome /> */}
            <div className='container'>
                <div className='card'>
                    <h2 className='card-title'>Build a Fit</h2>
                    <img
                        className='img'
                        src='/images/apparel.png'
                        alt='Shirt Icon'
                    ></img>
                </div>

                <div className='card'>
                    <h2 className='card-title'>Wardrobe</h2>
                    <img
                        className='img'
                        src='/images/checkroom.png'
                        alt='Shirt Icon'
                    ></img>
                </div>
            </div>{' '}
        </div>
    );
}

// app/
// -wardrobe/
// --page.js
// --wardrobe.module.css

// components/*css*/`
//     - top_bar/
//     - bottomBar/
//     ---bottomBar.module.css
//     ---bottomBar.js
// `
