"use client";

import Top_Bar from "@/app/components/global-components/top_bar/top_bar";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";

export default function Home() {
    const handleButtonChange = (position, buttonText) => {
        alert(`Button clicked: ${buttonText} (${position})`);
    };

    return (
        <div className='flex flex-col items-center min-h-screen bg-white'>
            <Top_Bar
                title='Title'
                hasBar={true}
                hasIcon={true}
                onButtonChange={handleButtonChange}
                initialActive='left'
            />
            <div className='flex-1 flex items-center justify-center w-full'>
                <a
                    href='/camera'
                    className='px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition'
                >
                    Go to Camera
                </a>
                <a
                    href='/wardrobe'
                    className='px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition'
                >
                    Go to Wardrobe
                </a>
                <a
                    href='/wardrobeHome'
                    className='px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition'
                >
                    Go to Wardrobe Home
                </a>
            </div>
            <Navbar initialActive='home' />
        </div>
    );
}
