import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import pantrid from "./../../assets/products/pantrid.png";
import seltra from "./../../assets/products/seltra.png";
import trilev from "./../../assets/products/trilev.png";

export default function OurProducts() {
    const images = [pantrid, trilev, seltra];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);

    // Update visible slides based on screen size
    useEffect(() => {
        const updateVisibleSlides = () => {
            if (window.innerWidth >= 1280) {
                setVisibleSlides(3); // xl and above
            } else if (window.innerWidth >= 768) {
                setVisibleSlides(2); // md and above
            } else {
                setVisibleSlides(1); // small screens
            }
        };

        updateVisibleSlides(); // Initialize on load
        window.addEventListener("resize", updateVisibleSlides); // Update on resize

        return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);

    // Calculate total slides
    const totalSlides = Math.ceil(images.length / visibleSlides);

    // Handlers for navigation
    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="relative w-full overflow-hidden flex items-center justify-center">
            {/* Left Arrow */}
            <button
                onClick={handlePrevSlide}
                className="absolute left-1 md:left-2 xl:left-10 top-1/2 transform -translate-y-1/2 p-3 rounded-full z-10"
            >
                <IoIosArrowBack size={30} />
            </button>

            {/* Image Container */}
            <div
                className="flex transition-transform duration-500 w-full max-w-7xl"
                style={{
                    transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 flex justify-center w-full px-6 ${visibleSlides === 2 ? "md:w-1/2" : ""
                            } ${visibleSlides === 3 ? "xl:w-1/3" : ""} `}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={`w-60 h-auto rounded-md ${index===1?"xl:w-[4]":"" }`}
                        />
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={handleNextSlide}
                className="absolute right-1 md:right-4 xl:right-10  top-1/2 transform -translate-y-1/2 p-3 rounded-full z-10"
            >
                <IoIosArrowForward size={30} />
            </button>
        </div>
    );
}