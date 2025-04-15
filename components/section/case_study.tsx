"use client";

import { useState } from "react";
import Image from "next/image";

const cases = [
  {
    title: "Digital\nCampaign",
    image: "/images/case/case1.png",
  },
  {
    title: "Product\nLaunch",
    image: "/images/case/case2.jpeg",
  },
  {
    title: "Social Media\nStrategy",
    image: "/images/case/case3.jpg",
  },
];

export function Case() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCase = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const nextCase = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const currentCase = cases[currentIndex];

  return (
    <section id="case-study" className="py-24 bg-black flex flex-col items-center justify-center">
      {/* Centered "CASE STUDY" Label */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-block">
      CASE STUDY
      </div>
      <br />
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          {/* Left Column - Text Section */}
          <div className="flex flex-col justify-center relative text-white text-center">
            {/* Title with Arrows */}
            <div className="flex items-center justify-between mb-6">
              {/* Left Arrow */}
              <button
                onClick={prevCase}
                className="bg-black border border-white/20 rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold whitespace-pre-line text-center flex-1 mx-4">
                {currentCase.title}
              </h2>

              {/* Right Arrow */}
              <button
                onClick={nextCase}
                className="bg-black border border-white/20 rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Image Section */}
          <div className="flex justify-center">
            <div className="w-[600px] h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src={currentCase.image}
                alt="Case Study"
                width={600}
                height={400}
                className="w-full h-full object-cover opacity-70 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
