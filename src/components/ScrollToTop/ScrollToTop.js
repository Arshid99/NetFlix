import React, { useState, useEffect } from 'react'
import "./ScrollToTop.css"

const ScrollToTop = () => {
    const [isVisible, setIsvisible] = useState(false);

    const toggleVisiblility = () => {
        if (window.pageXOffset > 300) {
            setIsvisible(true)
        } else {
            setIsvisible(false)
        }
    }

    const ScrollToTop = () => {
        window.ScrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", toggleVisiblility);

        return () => {
            window.removeEventListener("scroll", toggleVisiblility)
        }
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={ScrollToTop}>
                    <i className="fas fa-arrow-circle-up fa-3x"></i>
                </div>
            )}
        </div>
    )
}

export default ScrollToTop
