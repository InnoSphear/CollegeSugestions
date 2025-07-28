import React from "react";

const Carousel = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlreeesJYmPuzOTKbekKaF2eZyWF5OFg4eNg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1pPr2axnHATYO8isiXhq9L56J6Fp1uQWgA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlreeesJYmPuzOTKbekKaF2eZyWF5OFg4eNg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1pPr2axnHATYO8isiXhq9L56J6Fp1uQWgA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlreeesJYmPuzOTKbekKaF2eZyWF5OFg4eNg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1pPr2axnHATYO8isiXhq9L56J6Fp1uQWgA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlreeesJYmPuzOTKbekKaF2eZyWF5OFg4eNg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1pPr2axnHATYO8isiXhq9L56J6Fp1uQWgA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlreeesJYmPuzOTKbekKaF2eZyWF5OFg4eNg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlreeesJYmPuzOTKbekKaF2eZyWF5OFg4eNg&s",
  ];

  const stream = [
    {
      name: "Medical",
      colleg: "Colleges",
      icon: "https://collegesuggest.com/_next/image?url=%2Fassets%2Fimages%2Fstreams%2Fmedical.webp&w=96&q=75",
    },
    {
      name: "Dental",
      colleg: "Colleges",
      icon: "https://collegesuggest.com/_next/image?url=%2Fassets%2Fimages%2Fstreams%2Fdental.webp&w=96&q=75",
    },
    {
      name: "Pharma",
      colleg: "Colleges",
      icon: "https://collegesuggest.com/_next/image?url=%2Fassets%2Fimages%2Fstreams%2Fpharmacy.webp&w=96&q=75",
    },
    {
      name: "Agriculture",
      colleg: "Colleges",
      icon: "https://logo-icons.com/cdn/shop/files/2734-logo-1713637722.559color-00a3e4.svg?v=1713643548&width=416",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-white py-10">
      {/* ✅ Custom Animation */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .scroll-left {
          animation: marquee-left 25s linear infinite;
        }
        .scroll-right {
          animation: marquee-right 25s linear infinite;
        }
      `}</style>

      {/* Container with consistent margins */}
      <div className="mx-auto px-6 lg:px-24 max-w-[1920px]">
        {/* ✅ Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide">
            Explore Top Colleges
          </h2>
          <p className="text-gray-500 mt-2 text-base">
            Discover the best colleges and courses for your future
          </p>
        </div>

        {/* TOP SCROLLING CAROUSEL (Right → Left) */}
        <div className="relative w-full overflow-hidden rounded-xl mb-16">
          <div className="flex scroll-right w-[200%]">
            {[...images, ...images].map((img, index) => (
              <a
                key={index}
                href="/some-page"
                className="flex-shrink-0 w-[20%] sm:w-[15%] md:w-[12.5%] lg:w-[10%] px-2"
              >
                <img
                  src={img}
                  alt="carousel"
                  className="w-full h-24 md:h-28 lg:h-32 object-cover rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ✅ MIDDLE STREAM CARDS */}
        <div className="w-full bg-[rgb(242,244,245)] p-6 rounded-lg shadow-lg mb-16">
          <h1 className="text-2xl md:text-3xl text-black font-bold mb-8 text-center">
            Explore By Stream
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {stream.map((item, index) => (
              <a
                key={index}
                href={`/stream/${item.name.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md flex flex-col items-center p-4 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <p className="mt-3 text-base font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-xs text-blue-600">{item.colleg}</p>
              </a>
            ))}
          </div>
        </div>

        {/* ✅ BOTTOM SCROLLING CAROUSEL (Left → Right) */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-md">
          <div className="flex scroll-left w-[200%]">
            {[...images, ...images].map((img, index) => (
              <a
                key={index}
                href="/another-page"
                className="flex-shrink-0 w-[20%] sm:w-[15%] md:w-[12.5%] lg:w-[10%] px-2"
              >
                <img
                  src={img}
                  alt="carousel"
                  className="w-full h-24 md:h-28 lg:h-32 object-cover rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;