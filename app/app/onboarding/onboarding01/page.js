'use client';

import Image from 'next/image';

export default function WelcomePage() {
  const logoSrc = '/images/whiteLogoBig.png';

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#066051',
        overflow: 'hidden',        // just in case
      }}
    >
      {/* Logo always centered in viewport */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Image
          src={logoSrc}
          alt="App Logo"
          width={298}
          height={102}
          unoptimized    
          
        />
      </div>

      {/* Button always at bottom, horizontally centered */}
      <div
        style={{
          position: 'absolute',
          bottom: '60px',      
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '0 20px',   
        }}
      >
        <button
          style={{
            backgroundColor: '#E6EFEE',
            color: 'black',
            padding: '15px 80px',
            borderRadius: '18px',
            border: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

