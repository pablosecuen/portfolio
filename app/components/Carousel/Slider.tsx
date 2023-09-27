import React, { useState, useRef } from "react";
import "./Slider.css";
import Link from "next/link";
import Button from "../button/Button";

function Slider(language: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const numImagesVisible = 3;

  const slides = [
    { image: "bg-meduxafull", url: "https://birthday-ruddy.vercel.app/", projectName: "Meduxa" },
    { image: "bg-meduxamb", url: "https://birthday-ruddy.vercel.app/", projectName: "Meduxa" },
    {
      image: "bg-primherofull",
      url: "https://primhero-pablosecuen.vercel.app/",
      projectName: "Primhero",
    },
    {
      image: "bg-primheromb",
      url: "https://primhero-pablosecuen.vercel.app/",
      projectName: "Primhero",
    },
    { image: "bg-comexfull", url: "https://comex.vercel.app/", projectName: "Parana Comex" },
    { image: "bg-comexmb", url: "https://comex.vercel.app/", projectName: "Parana Comex" },
    {
      image: "bg-petfull",
      url: "https://petfriendlyuniverse.vercel.app/",
      projectName: "Pet Friendly",
    },
    {
      image: "bg-petmb",
      url: "https://petfriendlyuniverse.vercel.app/",
      projectName: "Pet Friendly",
    },
  ];
  const dotsToRender = slides.slice(0, 6);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);

    if (carouselRef.current) {
      // Calcular la posición de desplazamiento para mostrar la imagen correspondiente
      const scrollLeft = index * (carouselRef.current.clientWidth / numImagesVisible);

      // Aplicar el desplazamiento
      carouselRef.current.scrollLeft = scrollLeft;
      carouselRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="carousel relative">
      <div className="carousel__viewport" ref={carouselRef}>
        {slides.map((slide, index) => (
          <div className="carousel__slide" key={index}>
            <Link href={slide.url} target="_blank" rel="noopener noreferrer">
              <div className={`carousel__snapper relative ${slide.image}`}>
                <Button
                  string={slide.projectName}
                  className="absolute z-50 bottom-10 left-1/2 -translate-x-1/2 "
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="carousel__dots">
        {dotsToRender.map((_, index) => (
          <span
            key={index}
            className={`carousel__dot text-black bg-green-300 z-50 ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Slider;
