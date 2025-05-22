'use client'; 

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SignInModal from '../../components/sign-in/SignInModal';


export default function SignIn01Page() { // Component name
  const darkLogoSrc = '/images/darkLogo.png';
  const googleIconSrc = '/images/googleIcon.png';
  const facebookIconSrc = '/images/facebookIcon.png';
  const appleIconSrc = '/images/appleIcon.png';
  const router = useRouter();

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSocialSignIn = () => {
    // Show the modal
    setIsModalOpen(true);

    // Simulate a delay and then navigate to the home page
    const homeRoute = '/home';
    setTimeout(() => {
      setIsModalOpen(false);
      router.push(homeRoute);
    }, 2000);
  };

  const handlePasswordSignIn = () => {
    router.push('/sign-in/sign-in02');
  };

  return (
    <div
      style={{
        backgroundColor: '#E0E8FF', // Page background color
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px', // Add padding around content
        paddingTop: '100px', // Space from the top (assuming a status bar or top area)
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: '20px', // Font size 20
          fontWeight: 'normal', // Regular weight
          color: '#59606E', // Color 59606E
          textAlign: 'center',
          marginBottom: '60px', // Space below title
        }}
      >
        Let's Get You Started With Your Fits!
      </h1>

      {/* Logo */}
      <div style={{ marginBottom: '60px' }}> {/* Space below logo */}
         <Image
            src={darkLogoSrc}
            alt="App Logo"
            width={268} 
            height={99} 
            objectFit="contain"
         />
      </div>

      {/* Social Sign-in Options */}
      <div style={{ width: '100%', maxWidth: '330px' }}> {/* Container for social buttons */}
        {/* Google Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '20px 20px', 
            marginBottom: '20px', // Standardized space between social buttons
            backgroundColor: 'white', // Button background
            borderRadius: '12px', 
            border: '1.25px solid #8CB6AF', 
            cursor: 'pointer',
          }}
          onClick={handleSocialSignIn}
        >
          <Image src={googleIconSrc} alt="Google Icon" width={24} height={24} />
          <span style={{ flexGrow: 1, textAlign: 'center', fontSize: '16px', color: 'black' }}> {/* Text */}
            Sign In Using Google Account
          </span>
        </button>

        {/* Facebook Button */}
        <button
           style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '20px 20px', // Increased vertical padding
            marginBottom: '20px', // Standardized space between social buttons
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1.25px solid #8CB6AF',
            cursor: 'pointer',
          }}
          onClick={handleSocialSignIn}
        >
           <Image src={facebookIconSrc} alt="Facebook Icon" width={24} height={24} />
           <span style={{ flexGrow: 1, textAlign: 'center', fontSize: '16px', color: 'black' }}>
             Sign In Using Facebook Account
           </span>
        </button>

        {/* Apple Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '18px 18px', // Increased vertical padding
            marginBottom: '40px', 
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1.25px solid #8CB6AF',
            cursor: 'pointer',
          }}
          onClick={handleSocialSignIn}
        >
          <Image src={appleIconSrc} alt="Apple Icon" width={24} height={24} />
          <span style={{ flexGrow: 1, textAlign: 'center', fontSize: '16px', color: 'black' }}>
            Sign In Using Apple Account
          </span>
        </button>
      </div>


      {/* Sign In Using Password Button */}
      <button
        style={{
          width: '100%',
          maxWidth: '330px',
          backgroundColor: '#066051',
          color: 'white',
          padding: '15px 20px',
          borderRadius: '12px',
          border: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
        onClick={handlePasswordSignIn}
      >
        Sign In Using Password
      </button>

      {/* Register Now Text */}
      <p style={{ fontSize: '16px', color: 'black', textAlign: 'center' }}>
        New To Fits?{' '}
        <span style={{ color: '#388074', fontWeight: 'bold', cursor: 'pointer' }}> {/* Apply color to Register Now */}
          Register Now
        </span>
      </p>

      {/* Add the SignInModal component */}
      <SignInModal isOpen={isModalOpen} />
    </div>
  );
} 