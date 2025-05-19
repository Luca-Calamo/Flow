"use client";

import styles from "./topBar.css";
import { useState } from "react";
import SmallButton from "../../buttons/smallButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TopBar({
    hasIcon,
    hasBar,
    hasBtn,
    btnTxt,
    btnType,
    btnOnClick,
    initialActive = "left",
}) {
    const [activeBtn, setActiveBtn] = useState(initialActive);
    const router = useRouter();
    const handleButtonClick = (event, whichButton) => {
        event.preventDefault();
        setActiveBtn(whichButton);

        if (whichButton === "left") {
            router.push("/fits");
        } else if (whichButton === "right") {
            router.push("/articles");
        }
    };

    const handleIconClick = () => {
        router.back();
    };

    return (
        <div className='top-bar pt-4'>
            <div className='top-bar__main flex items-center justify-center'>
                {hasIcon && (
                    <div className='top-bar__icon' onClick={handleIconClick}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='25'
                            height='27'
                            viewBox='0 0 25 27'
                            fill='none'
                        >
                            <path
                                d='M8.29161 14.6067L13.7662 20.8989L12.3731 22.4719L4.55225 13.4831L12.3731 4.49438L13.7662 6.06742L8.29161 12.3596H20.194V14.6067H8.29161Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                )}
                {hasBtn && (
                    <div className='top-bar__btn'>
                        <SmallButton
                            text={btnTxt}
                            type={btnType}
                            onClick={btnOnClick}
                            spacing='full'
                        />
                    </div>
                )}

                <Image
                    src="/images/whiteLogo.png"
                    alt="Fits logo"
                    width={90}
                    height={35}
                    priority
                    />
            </div>
            {hasBar && (
                <div className='top-bar__navbar'>
                    <button
                        className={`btn1 ${
                            activeBtn === "left" ? "active" : ""
                        }`}
                        onClick={(e) => handleButtonClick(e, "left")}
                    >
                        {leftBtn}
                    </button>
                    <button
                        className={`btn2 ${
                            activeBtn === "right" ? "active" : ""
                        }`}
                        onClick={(e) => handleButtonClick(e, "right")}
                    >
                        {rightBtn}
                    </button>
                </div>
            )}
        </div>
    );
}
