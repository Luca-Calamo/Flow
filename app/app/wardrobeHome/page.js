import WardrobeCard from '../components/wardrobeHome-comp/warHomeCard';
import SmallButton from '../components/buttons/smallButton';
import CircleButton from '../components/buttons/circleButton';

export default function WarCard() {
    return (
        <div>
            <div className='container'>
                <img className='img' src='/images/outfit01.png'></img>
                <img className='img' src='/images/outfit2.png'></img>
                <img className='img' src='/images/outfit03.png'></img>
                <img className='img' src='/images/outfit04.png'></img>
                <img className='img' src='/images/outfit05.png'></img>
            </div>
            {/* ------------------------------------------ */}
            <div className='sm__btn'>
                <p className='btnText'>Tags</p>
            </div>
            <br></br> {/* remove this line */}
            <div className='sm__btn'>
                <p className='btnText'>Build</p>
            </div>
            <br></br> {/* remove this line */}
            {/* ------------------------------------------ */}
            <div className='cr__btn-right'>
                <img className='arrow' src='images/arrow.png'></img>
            </div>
            <br></br>
            <div>
                <WardrobeCard />
            </div>
            <CircleButton />
        </div>
    );
}

// export default function SmallButton() {
//     return (
//         <div className='container'>
//             <SmallButton />
//         </div>
//     );
// }
