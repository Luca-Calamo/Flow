import styles from "./top_bar.css";

export default function Top_Bar({
    title,
    hasIcon,
    hasBar,
    leftBtn = "Wheel",
    rightBtn = "Canvas",
    activeBtn = "left",
}) {
    return (
        <div className='top-bar'>
            <div className='top-bar__main'>
                {hasIcon && (
                    <div className='top-bar__icon'>
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

                <h1 className='top-bar__title'>{title}</h1>
            </div>
            {hasBar && (
                <div className='top-bar__navbar'>
                    <button
                        className={`btn1 ${
                            activeBtn === "left" ? "active" : ""
                        }`}
                    >
                        {leftBtn}
                    </button>
                    <button
                        className={`btn2 ${
                            activeBtn === "right" ? "active" : ""
                        }`}
                    >
                        {rightBtn}
                    </button>
                </div>
            )}
        </div>
    );
}
