'use client';

import Image from 'next/image';
import StatusBar from '../../components/global-components/statusbar/Statusbar';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


export default function Onboarding04Page() {
  const ellipseSrc = '/images/onboardingEllipse.png';
  const router = useRouter();

  const handleNextClick = () => {
    router.push('/sign-in/sign-in01');
  };

  // State to hold the fetched data for this specific page
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOnboardingData = async () => {
      try {
        const response = await fetch('/onboarding.json'); // Fetch from public directory
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Find the data for this specific page (onboarding04)
        const currentPageData = data.find(page => page.id === 'onboarding04');
        if (currentPageData) {
          setPageData(currentPageData);
        } else {
          setError("Data for onboarding04 not found in JSON.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOnboardingData();
  }, []); // Empty dependency array means this runs once on mount

  // Render loading or error state while data is fetching
  if (loading) {
    return <div style={{ backgroundColor: '#E0E8FF', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#066051', fontSize: '24px' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ backgroundColor: '#E0E8FF', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'red', fontSize: '24px' }}>Error loading onboarding data: {error}</div>;
  }

  return (
    <div
      style={{
        backgroundColor: '#E0E8FF',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: '80px',
      }}
    >
      <StatusBar />

      <div style={{
        position: 'absolute',
        top: '-105px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        width: '120%',
        height: 'auto',
      }}>
         <Image src={ellipseSrc} alt="Background Ellipse" layout="responsive" width={500} height={500} objectFit="contain" />
      </div>

      <div style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '0 30px',
          paddingTop: '150px',
          position: 'relative',
          zIndex: 2,
          justifyContent: 'space-between',
      }}>

          <div style={{
              flexShrink: 0,
              marginBottom: '40px',
              alignSelf: 'center',
          }}>
             <Image src={pageData.visualImage} alt="Onboarding Visual" width={220} height={220} objectFit="contain" />
          </div>

          <div style={{
              textAlign: 'center',
              marginTop: '100px',
              alignSelf: 'center',
              width: '100%',
          }}>
            <h2
              style={{
                color: '#066051',
                fontSize: '26px',
                fontWeight: 'bold',
                marginBottom: '15px',
              }}
            >
              {pageData.title}
            </h2>
            <p
              style={{
                color: '#5D5D5D',
                fontSize: '20px',
                fontWeight: 'normal',
                lineHeight: '1.5',
              }}
            >
              {pageData.description}
            </p>
          </div>

           <div style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               marginTop: '40px',
               alignSelf: 'center',
           }}>
               {pageData.indicator.map((type, index) => (
                 <div
                   key={index}
                   style={{
                     width: type === 'green-dash' ? '25px' : '8px',
                     height: '8px',
                     backgroundColor: type === 'green-dash' ? '#066051' : '#D3D3D3',
                     borderRadius: type === 'green-dash' ? '4px' : '50%',
                     marginRight: index < pageData.indicator.length - 1 ? '8px' : '0',
                   }}
                 ></div>
               ))}
           </div>

      </div>

       <button
         style={{
           position: 'absolute',
           bottom: '40px',
           right: '30px',
           backgroundColor: '#066051',
           color: 'white',
           width: '50px',
           height: '50px',
           borderRadius: '50%',
           border: 'none',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           fontSize: '24px',
           cursor: 'pointer',
           paddingLeft: '4px',
           zIndex: 3,
         }}
         onClick={handleNextClick}
       >
          →
       </button>
    </div>
  );
} 