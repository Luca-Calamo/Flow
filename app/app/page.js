import Top_Bar from "@/global-components/top_bar/top_bar";

export default function Home() {
    return (
        <div className='flex flex-col items-center min-h-screen bg-white'>
            <Top_Bar
                title='Title'
                hasBar={true}
                leftBtn='Wheel'
                rightBtn='Canvas'
                activeBtn='left'
                hasIcon={true}
            />
            <div className='flex-1 flex items-center justify-center w-full'>
                <a
                    href='/camera'
                    className='px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition'
                >
                    Go to Camera
                </a>
            </div>
        </div>
    );
}
