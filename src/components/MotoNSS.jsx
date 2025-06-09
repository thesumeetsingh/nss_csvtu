import { useState, useEffect } from 'react';
import mottoBackground1 from '../assets/moto-background-1.jpg';
import mottoBackground2 from '../assets/moto-background-2.jpg';
import mottoBackground3 from '../assets/moto-background-3.jpg';

const backgroundImages = [mottoBackground1, mottoBackground2, mottoBackground3];

function MottoNSS() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 1000); // Match this duration with the CSS transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-96 bg-gray-900">
      {/* Background Image Slideshow */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isTransitioning ? 'translateX(-100%)' : 'translateX(0)',
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>

      {/* Heading */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl text-white">OUR MOTTO</h1>
          <p className="text-4xl sm:text-5xl font-bold text-white mb-4">"Not Me, But You"</p>
        </div>
      </div>
    </section>
  );
}

export default MottoNSS;