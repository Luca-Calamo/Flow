export default function Home() {
    return (
        <div className='flex items-center justify-center min-h-screen bg-white'>
            <a
                href='/camera'
                className='px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition'
            >
                Go to Camera
            </a>
        </div>
    );
}
