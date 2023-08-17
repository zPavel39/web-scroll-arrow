import React, { useEffect, useState } from 'react'
import Arrow from "./../arrow.svg";
import './Scroll.scss';

const Scroll = () => {

    const [range, setRange] = useState();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        setRange(window.scrollY);
    };
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className='scroll' onClick={handleClick}>
            {range > 100 && <img className="scroll__img" src={Arrow} />}
        </div>
    )
}

export default Scroll