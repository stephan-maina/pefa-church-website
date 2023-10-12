import React, { useState, useEffect, useMemo } from "react";
import "./ImageSlider.css"; // Import the provided CSS styles

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use useMemo to initialize the slides array
  const slides = useMemo(
    () => [
      {
        imageSrc:
          "https://scontent.fnbo16-1.fna.fbcdn.net/v/t39.30808-6/370362209_354783246873314_6358290866975557455_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y9tyrt1ZDSQAX9bAJGn&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfCWLzDJAjNIVahtc2eZswC497dVFSPpT60YZ1JWx9eSEw&oe=652CE0EB",
        title: "VISION",
        content: "Clarity, Consistency, Creativity, and Living Out What We Believe",
        duration: 3000, // Display for 3 seconds
      },
      

      {
        imageSrc:
          "https://scontent.fnbo16-1.fna.fbcdn.net/v/t1.6435-9/64406208_624432581392380_4256591015885930496_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=LfRy32rx0l4AX9HvuIm&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfAcyynYbnsfh9OAisUGjFspcWayWOPuEGAKlKIhfVdlvg&oe=654F310F",
        title: "OUR PHILOSOPHY",
        content: "Nurturing Potential Building Character",
        duration: 5000, // Display for 5 seconds
      },
      
      {
        imageSrc:
        "https://scontent.fnbo16-1.fna.fbcdn.net/v/t39.30808-6/312631718_1523292228173073_1833915569087969370_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=813123&_nc_ohc=VEQv7UWKi6QAX-73-iD&_nc_ht=scontent.fnbo16-1.fna&oh=00_AfBNa5VGNNoWaMkEdYOrhl8tmgi6GFeqjBt2AvSRXAoXew&oe=652CE589",
      title: "MISSION",
      content:
        "Sanctifying, Teaching, Serving, and Making Disciples Through Gospel Proclamation.",
      duration: 4000, // Display for 5 seconds
      },
      
      // Add more images and durations as needed
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, slides[currentSlide].duration);

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="block relative">
      <div className="h-[70vh]">
        <div className="carousel-root">
          <div className="carousel carousel-slider" style={{ width: "100%" }}>
            <button
              type="button"
              aria-label="previous slide / item"
              className="control-arrow control-prev"
              onClick={prevSlide}
            />
            <div
              className="slider-wrapper axis-horizontal"
              style={{ height: "auto" }}
            >
              <ul
                className="slider animated"
                style={{
                  transform: `translate3d(-${currentSlide * 100}%,0,0)`,
                }}
              >
                {slides.map((slide, index) => (
                  <li
                    key={index}
                    className={`slide ${
                      index === currentSlide ? "selected" : ""
                    }`}
                  >
                    <div className="relative h-[70vh]">
                      <img
                        className="h-[70vh] object-top object-cover"
                        src={slide.imageSrc}
                        alt={`img-${index + 1}`}
                      />
                      <div
                        className="w-full absolute top-0 bottom-0 right-0 left-0 z-20 flex"
                        data-aos="fade-up"
                      >
                        <div className="mt-[65%] md:mt-[10%] px-4 md:px-10 flex-1">
                          <div className="w-52 bg-c-red py-3 font-bold text-center">
                            <span className="font-bold text-white">
                              {slide.title}
                            </span>
                          </div>
                          <div className="bg-[#ffffffd0] px-3 py-6 md:p-6 md:max-w-[60vw]">
                            <p className="text-lg md:text-2xl font-semibold md:font-bold text-black">
                              {slide.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              aria-label="next slide / item"
              className="control-arrow control-next"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;