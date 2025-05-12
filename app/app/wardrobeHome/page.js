import WardrobeCard from '@/app/components/wardrobeHome-comp/warHomeCard';
import SmallButton from '@/app/components/buttons/smallButton';
import CircleButton from '@/app/components/buttons/circleButton';

export default function WarCard() {
    return (
        <div>
            <WardrobeCard src='/images/outfit01.png' />
            <WardrobeCard src='/images/outfit2.png' />
            <WardrobeCard src='/images/outfit03.png' />
            <WardrobeCard src='/images/outfit04.png' />
            <WardrobeCard src='/images/outfit05.png' />
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
