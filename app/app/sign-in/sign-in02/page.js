'use client'; // Needed for useState and event handlers

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react'; // Import useState
import SignInModal from '../../components/sign-in/SignInModal'; // Import the modal component

// Assuming you are using @next/font/google for Roboto:
// import { Roboto } from 'next/font/google';
// const robotoRegular = Roboto({ subsets: ['latin'], weight: ['400'] });
// const robotoBold = Roboto({ subsets: ['latin'], weight: ['700'] });

export default function SignIn02Page() {
  const darkLogoSrc = '/images/darkLogo.png';
  const router = useRouter();
  // State to manage whether we are in 'login' or 'signup' mode
  const [mode, setMode] = useState('login'); // Default to 'login'
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Add state for input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignIn = () => {
    // ** IMPORTANT: In a real app, you would add your actual authentication logic here **
    // For this task, we'll just simulate success and show the modal

    // Show the modal
    setIsModalOpen(true);

    // Simulate a delay and then navigate to the home page
    const homeRoute = '/home'; // Or '/' if your home is at the root
    setTimeout(() => {
      setIsModalOpen(false); // Optionally hide the modal before navigating
      router.push(homeRoute); // Navigate to home page
    }, 2000); // Show modal for 2 seconds (adjust time as needed)

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
        paddingTop: '120px', // Space from the top (assuming a status bar or top area)
      }}
    >

      {/* Title */}
      <h1
        style={{
          fontSize: '20px',
          fontWeight: 'normal',
          color: '#59606E',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        Let's Get You Started With Your Fits!
      </h1>

      {/* Logo */}
      <div style={{ marginBottom: '60px' }}> {/* Space below logo */}
         <Image
            src={darkLogoSrc}
            alt="App Logo"
            width={235} // Adjust size as needed
            height={91}
            objectFit="contain"
         />
      </div>

      {/* Login/Signup Toggle */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '350px',
          backgroundColor: '#58948A', // Inactive/background color
          borderRadius: '12px', // Rounded corners
          overflow: 'hidden', // Ensures content respects border radius
          marginBottom: '40px', // Space below toggle
        }}
      >
        <button
          style={{
            flex: 1, // Take equal space
            padding: '12px 0',
            border: 'none',
            borderRadius: '12px', // Rounded corners
            backgroundColor: mode === 'login' ? '#066051' : 'transparent', // Dark green if active
            color: mode === 'login' ? 'white' : '#E6EFEE', // White text if active, light grey if inactive
            fontSize: '16px',
            fontWeight: mode === 'login' ? 'bold' : 'normal', // Bold if active
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // Smooth transition
          }}
          onClick={() => setMode('login')} // Set mode to login
        >
          Login
        </button>
        <button
          style={{
            flex: 1, // Take equal space
            padding: '12px 0',
            border: 'none',
            borderRadius: '12px', // Rounded corners
            backgroundColor: mode === 'signup' ? '#066051' : 'transparent', // Dark green if active
            color: mode === 'signup' ? 'white' : '#E6EFEE', // White text if active, light grey if inactive
            fontSize: '16px',
            fontWeight: mode === 'signup' ? 'bold' : 'normal', // Bold if active
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // Smooth transition
          }}
           onClick={() => setMode('signup')} // Set mode to signup
        >
          Signup
        </button>
      </div>

      {/* Input Fields */}
      <div style={{ width: '100%', maxWidth: '350px', marginBottom: '20px' }}> {/* Container for inputs */}
        {/* Email Input */}
        <label
          style={{
            display: 'block',
            fontSize: '22px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '8px',
          }}
        >
          Email
        </label>
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 15px',
              paddingLeft: '40px', // Make space for icon
              borderRadius: '8px',
              border: '1px solid #CDCDCD', // Added stroke
              backgroundColor: '#E6EFEE', // Input background color
              fontSize: '16px',
              color: 'black',
              outline: 'none', // Remove default outline
            }}
          />
           {/* Placeholder for email icon */}
           <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }}>✉️</span> {/* Using text icon placeholder */}
        </div>

        {/* Password Input */}
        <label
          style={{
            display: 'block',
            fontSize: '22px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '8px',
          }}
        >
          Password
        </label>
         <div style={{ position: 'relative', marginBottom: mode === 'login' ? '20px' : '15px' }}> {/* Adjust margin based on mode */}
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 15px',
                paddingLeft: '40px', // Make space for icon
                borderRadius: '8px',
                border: '1px solid #CDCDCD', // Added stroke
                backgroundColor: '#E6EFEE', // Input background color
                fontSize: '16px',
                color: 'black',
                outline: 'none',
              }}
            />
             {/* Placeholder for password icon */}
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }}>🔒</span> {/* Using text icon placeholder */}
        </div>


        {/* Confirm Password Input (only in signup mode) */}
        {mode === 'signup' && (
            <>
                <label
                  style={{
                    display: 'block',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: 'black',
                    marginBottom: '8px',
                  }}
                >
                  Confirm Password
                </label>
                 <div style={{ position: 'relative', marginBottom: '20px' }}>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        paddingLeft: '40px', // Make space for icon
                        borderRadius: '8px',
                        border: '1px solid #CDCDCD', // Added stroke
                        backgroundColor: '#E6EFEE', // Input background color
                        fontSize: '16px',
                        color: 'black',
                        outline: 'none',
                      }}
                    />
                    {/* Placeholder for confirm password icon (using lock again) */}
                    <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }}>🔒</span> {/* Using text icon placeholder */}
                </div>
            </>
        )}
      </div>

      {/* Remember Password / Forgot Password (Only show in login mode) */}
       {mode === 'login' && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '350px',
            marginBottom: '40px', // Space below this section
            fontSize: '14px', // Adjust size
          }}>
            <div>
              <input type="checkbox" id="remember" style={{ marginRight: '5px' }} />
              <label
                 htmlFor="remember"
                 style={{
                    color: 'black',
                    fontSize: '16px', // Font size 16
                    fontWeight: 'normal', // Regular weight
                    // If using @next/font, apply class here
                    // className={robotoRegular.className}
                 }}
              >
                Remember Password
              </label>
            </div>
             <span style={{ color: '#388074', cursor: 'pointer' }}>Forgot Password?</span> {/* Forgot Password link */}
          </div>
      )}


      {/* Continue Button */}
      <button
        style={{
          width: '100%',
          maxWidth: '330px',
          backgroundColor: '#066051',
          color: 'white',
          padding: '15px 20px',
          borderRadius: '18px',
          border: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
            marginTop: '0', 
        }}
        onClick={handleSignIn}
      >
        Continue
      </button>

      {/* Render the SignInModal component */}
      <SignInModal isOpen={isModalOpen} />

    </div>
  );
} 