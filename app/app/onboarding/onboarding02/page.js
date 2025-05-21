import Image from 'next/image';
import StatusBar from '../../components/global-components/statusbar/Statusbar';

export default function Onboarding02Page() {
  const ellipseSrc = '/images/onboardingEllipse.png';
  const visualSrc = '/images/onboarding2visual.png';

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

      {/* Skip Button */}
      <button
        style={{
          position: 'absolute',
          top: '75px', 
          right: '25px',
          backgroundColor: '#066051',
          color: 'white',
          padding: '15px 15px',
          borderRadius: '12px',
          border: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 3, // Ensure it's on top
        }}
      >
        Skip
      </button>

      {/* Ellipse Image */}
      <div style={{
        position: 'absolute',
        top: '-105px', 
        left: '50%',
        transform: 'translateX(-50%)', // Center horizontally
        zIndex: 1, // Place below other content
        width: '120%', 
        height: 'auto',
      }}>
         <Image src={ellipseSrc} alt="Background Ellipse" layout="responsive" width={500} height={500} objectFit="contain" />
      </div>

      {/* Content Area (Visual, Text, Indicators) */}
      <div style={{
          flexGrow: 1, 
          display: 'flex',
          flexDirection: 'column',
          width: '100%', 
          padding: '0 30px', 
          
          paddingTop: '150px', // Added padding to push content below ellipse visually
          position: 'relative', 
          zIndex: 2, // Ensure content is above ellipse
          justifyContent: 'space-between', 
      }}>

          {/* Main Visual Image */}
          <div style={{
              flexShrink: 0, 
              marginBottom: '40px',
              alignSelf: 'center', 
          }}>
             <Image src={visualSrc} alt="Onboarding Visual" width={220} height={220} objectFit="contain" />
          </div>

          {/* Text Sections */}
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
              Get Styled Daily – Effortlessly
            </h2>
            <p
              style={{
                color: '#5D5D5D',
                fontSize: '20px',
                fontWeight: 'normal',
                lineHeight: '1.5',
              }}
            >
              Let Fits suggest outfits tailored to your closet, plans, and the weather. Dressing up just got easier.
            </p>
          </div>

          {/* Page Indicator - Now centered within the content area */}
           <div style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center', 
               marginTop: '40px', 
               alignSelf: 'center', 
           }}>
               <div style={{ width: '25px', height: '8px', backgroundColor: '#066051', borderRadius: '4px', marginRight: '8px' }}></div> {/* Green dash */}
               <div style={{ width: '8px', height: '8px', backgroundColor: '#D3D3D3', borderRadius: '50%', marginRight: '8px' }}></div> {/* Grey dot */}
               <div style={{ width: '8px', height: '8px', backgroundColor: '#D3D3D3', borderRadius: '50%' }}></div> {/* Grey dot */}
           </div>

      </div>

       {/* Next Button */}
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
           zIndex: 3, // Ensure it's on top
         }}
       >
          →
       </button>
    </div>
  );
}