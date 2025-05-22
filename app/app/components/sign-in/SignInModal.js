'use client'; // Needed for conditional rendering and potentially animations

import React from 'react';
import Image from 'next/image';

// Simple spinning loader component (optional, you can replace with a library)
const Spinner = () => (
  <div
    style={{
      border: '4px solid rgba(0, 0, 0, 0.1)',
      borderLeftColor: '#066051', // Dark green color
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      animation: 'spin 1s linear infinite',
      marginTop: '20px',
      marginLeft: 'auto', // Center horizontally
      marginRight: 'auto', // Center horizontally
    }}
  >
    {/* Basic CSS for spin animation - usually in global styles or styled components */}
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);


export default function SignInModal({ isOpen }) {
  if (!isOpen) {
    return null; // Don't render anything if not open
  }

  const loginIconSrc = '/images/loginIcon.png'; // Path to the green profile icon

  return (
    // Overlay background
    <div
      style={{
        position: 'fixed', // Fixed position to cover the whole screen
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Ensure it's on top of other content
      }}
    >
      {/* Modal content box */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '40px 30px', // Adjust padding as needed
          borderRadius: '20px', // Rounded corners
          textAlign: 'center',
          maxWidth: '300px', // Adjust max width
          width: '90%', // Responsive width
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional subtle shadow
        }}
      >
        {/* Green Circle with Icon */}
        <div
          style={{
            backgroundColor: '#066051', // Dark green background
            width: '100px', // Circle size
            height: '100px', // Circle size
            borderRadius: '50%', // Make it round
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto 20px auto', // Center the circle and add space below
            position: 'relative', // Needed for dot positioning
            overflow: 'hidden', // Hide dots outside the circle if needed
          }}
        >
          {/* Placeholder for dots (basic styling, could be refined) */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap', // Allow dots to wrap
             padding: '5px', // Padding inside the circle area
          }}>
             {[...Array(10)].map((_, i) => ( // Render several small dots
                <div key={i} style={{
                   width: '6px',
                   height: '6px',
                   backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white dots
                   borderRadius: '50%',
                }}></div>
             ))}
          </div>


           {/* Profile Icon */}
           <Image
             src={loginIconSrc}
             alt="Success Icon"
             width={40} // Icon size
             height={40}
             objectFit="contain"
             style={{ zIndex: 1 }} // Ensure icon is above dots
           />
        </div>

        {/* Success Message */}
        <h2
          style={{
            fontSize: '24px', // Adjust size
            fontWeight: 'bold', // Bold text
            color: '#066051', // Dark green color
            marginBottom: '10px', // Space below title
          }}
        >
          Sign In
          <br/> {/* Line break */}
          Successful
        </h2>

        {/* Waiting Text */}
        <p style={{ fontSize: '14px', color: '#5D5D5D', marginBottom: '5px' }}>
          Please wait...
        </p>
        <p style={{ fontSize: '14px', color: '#5D5D5D' }}>
          You will be directed to the homepage soon.
        </p>

        {/* Loading Indicator */}
        <Spinner /> {/* Use the Spinner component */}

      </div>
    </div>
  );
} 