import React, { useEffect } from 'react'
import Arrow from "./../arrow.svg";
import './Scroll.scss';

const Scroll = ({ ...props }) => {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        props.setRange(window.scrollY);
        console.log("range", window.scrollY);
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
            {props.range > 100 && <img className="scroll__img" src={Arrow} />}
        </div>
    )
}

export default Scroll