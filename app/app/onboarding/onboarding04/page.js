'use client';

import Image from 'next/image';
import StatusBar from '../../components/global-components/statusbar/Statusbar';
import { useRouter } from 'next/navigation';

// If you are using @next/font/google for Roboto:
// import { Roboto } from 'next/font/google';
// const robotoBold = Roboto({ subsets: ['latin'], weight: ['700'] });
// const robotoRegular = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function Onboarding04Page() {
  const ellipseSrc = '/images/onboardingEllipse.png';
  const visualSrc = '/images/onboarding4visual.png';
  const router = useRouter();

  const handleNextClick = () => {
    router.push('/home');
  };

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
             <Image src={visualSrc} alt="Onboarding Visual" width={220} height={220} objectFit="contain" />
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
              Designed for Accessibility
            </h2>
            <p
              style={{
                color: '#5D5D5D',
                fontSize: '20px',
                fontWeight: 'normal',
                lineHeight: '1.5',
              }}
            >
              Fits help colorblind users recognize hues and reads item details out loud for users with visual impairments.
            </p>
          </div>

           <div style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               marginTop: '40px',
               alignSelf: 'center',
           }}>
               <div style={{ width: '8px', height: '8px', backgroundColor: '#D3D3D3', borderRadius: '50%', marginRight: '8px' }}></div>
               <div style={{ width: '8px', height: '8px', backgroundColor: '#D3D3D3', borderRadius: '50%', marginRight: '8px' }}></div>
               <div style={{ width: '25px', height: '8px', backgroundColor: '#066051', borderRadius: '4px' }}></div>
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