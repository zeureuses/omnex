'use client';

import Link from 'next/link';
import React from 'react';

const coreAdvantages = [
  {
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/3736TZXBXlcAAAAAQ1AAAAgADlxJAQFr/original",
    title: "Highly Efficient, Cost-Effective",
    description: "Our Layer2 infrastructure supports high-speed trading and affordable on-chain asset issuance."
  },
  {
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/9be7SqnAaX8AAAAAQ2AAAAgADlxJAQFr/original",
    title: "Multi-Asset Integration",
    description: "Supports asset classes including new energy, supply chain finance, infrastructure revenue rights, and more."
  },
  {
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KAm1TI2ZTxcAAAAAQ0AAAAgADlxJAQFr/original",
    title: "Compliance & Security",
    description: "Powered by Omnex's regulated RWA sandbox with built-in compliance and audit frameworks."
  }
];

const processSteps = [
  {
    title: "Legal and Financial Framework of Assets",
    description: "Translates essential PPM/LPA provisions into on-chain variables",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/TqU2Tppx7AIAAAAASxAAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Decentralized issuance and governance",
    description: "Configure personalized governance structures: roles, actions, and protocol connections",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/qCN1SLd-yJ8AAAAARBAAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Smart Contracts and Legal Documents",
    description: "Automatically integrates business and legal logic into both smart contracts and legal documents.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/ujsXR44ytRwAAAAAQpAAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Final Review & Deployment",
    description: "Collaborative multi-party environment for thorough verification and confirmation.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AX3gQpovSWsAAAAAQ0AAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Investor and Distribution Management",
    description: "Automates investor onboarding and enhances multi-channel distribution efficiency.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/fMQyRoWXh2kAAAAAQzAAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "On-Chain Operations Dashboard",
    description: "Interactive dashboard enabling fund managers to oversee post-investment activities.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/U49jTLL3KIYAAAAAQyAAAAgADlxJAQFr/fmt.webp"
  },
  {
    title: "Secondary Market & DeFi Expansion",
    description: "A liquidity marketplace enabling secondary trading and seamless DeFi protocol integration.",
    image: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/qQIMS4ndezEAAAAAQqAAAAgADlxJAQFr/fmt.webp"
  }
];

export default function AssetsTokenizationPage() {
  return (
    <div className="relative pb-16">
      <div className="flex flex-col gap-24">
        {/* Hero Section */}
        <div className="w-full h-[400px] md:h-[560px] flex items-center justify-center pt-20 md:pt-36 pb-16 md:pb-22 px-4 md:px-24 relative">
          <img
            src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/ktvvS7S_SUoAAAAARnAAAAgADlxJAQFr/fmt.webp"
            alt="assets"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          
          {/* Animated Grid */}
          <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="135" height="135" patternUnits="userSpaceOnUse">
                <path d="M 135 0 L 0 0 0 135" fill="none" stroke="#E5ECFF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {[...Array(14)].map((_, i) => (
              <image
                key={i}
                x={i * 135 - 1.25}
                y="0"
                width="2.5"
                height="72.5"
                href="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KhPZRISjp_EAAAAAQDAAAAgADlxJAQFr/original"
                opacity="0"
              >
                <animate attributeName="opacity" values="0;1;1;0" dur="5s" begin={`${Math.random() * 2}s`} repeatCount="indefinite" />
                <animate attributeName="y" values="0;487.5" dur="5s" begin={`${Math.random() * 2}s`} repeatCount="indefinite" />
              </image>
            ))}
          </svg>

          {/* Hero Content */}
          <div className="w-full max-w-[1160px] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-full pt-20 md:pt-36 z-10 flex flex-col items-center gap-4 px-4">
            <h1 className="text-[#1D1E1E] text-4xl md:text-6xl font-semibold flex flex-col text-center">
              <span>Empower. Tokenize.</span>
              <span>Revolutionize Your Assets.</span>
            </h1>
            <div className="text-[#1D1E1E] text-sm md:text-base text-center max-w-[90%] md:max-w-none">
              Assets owners and investors worldwide leveraging Omnex secure and scalable tokenization platform.
            </div>
            
            {/* Book Demo Button */}
            <div className="mt-4 flex justify-center">
              <Link
                href="https://github.com/Omnex-Layer"
                className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full px-8 py-3 text-sm md:text-base flex items-center gap-2 hover:opacity-90 transition-opacity font-medium"
              >
                Explore Github
                <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Core Advantages Section */}
        <div className="text-white backdrop-blur-sm w-full px-4 flex flex-col gap-2 items-center">
          <div className="w-full max-w-[1160px] flex flex-col items-center">
            <div className="pb-8 md:pb-12 flex flex-col items-center gap-4">
              <h2 className="text-2xl md:text-3xl text-center font-semibold text-black">Core Advantages</h2>
              <div className="text-[#666F8D] max-w-[740px] text-center text-sm md:text-base">
                Your Passport to the Future of Asset Ownership.
              </div>
            </div>
            
            <div className="w-full flex flex-col md:flex-row gap-0">
              {coreAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`flex-1 relative w-full md:w-[236px] h-auto md:h-[280px] px-6 md:px-8 py-6 md:py-3 flex flex-col items-center gap-3 border-2 border-blue-200 ${
                    index % 2 === 0 ? 'md:border-t-2 md:border-l-2 md:border-r-2 md:border-b-0' : 'md:border-b-2 md:border-l-2 md:border-r-2 md:border-t-0'
                  } md:-ml-0.5`}
                >
                  <img src={advantage.icon} alt={advantage.title} className="w-16 h-16 md:w-20 md:h-20" />
                  <h3 className="text-[#3D3D3D] text-xl md:text-2xl font-semibold text-center">
                    {advantage.title}
                  </h3>
                  <div className="text-[#666F8D] text-sm md:text-base text-center mt-0.5">
                    {advantage.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tokenization Process Section */}
        <div className="text-white backdrop-blur-sm w-full px-4 flex flex-col gap-2 items-center">
          <div className="w-full max-w-[1160px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl md:text-3xl text-center font-semibold text-black">
                Detailing The Tokenization Process
              </h2>
              <div className="text-[#666F8D] text-center text-sm md:text-base">
                Your Tokenization Journey: A Streamlined, Transparent Process.
              </div>
            </div>

            <div className="mt-4 flex flex-col md:flex-row gap-2.5">
              {/* First large card */}
              <div className="flex justify-center md:justify-start">
                <div className="relative group rounded-2xl bg-white w-full md:w-[290px] min-h-[190px] p-5 border border-blue-100 shadow-sm overflow-hidden flex flex-col gap-3"
                  style={{ background: 'radial-gradient(69% 69% at 100% 100%, #E3EEFF 0%, #FFFFFF 100%)' }}>
                  <div className="text-base md:text-lg text-black">{processSteps[0].title}</div>
                  <div className="text-xs md:text-sm text-[#7C7E7A]">{processSteps[0].description}</div>
                  <img
                    className="absolute bottom-[-24px] right-[-44px] w-[200px] md:w-[300px] h-auto"
                    src={processSteps[0].image}
                    alt={processSteps[0].title}
                  />
                </div>
              </div>

              {/* Remaining cards in grid */}
              <div className="flex flex-wrap gap-2.5 max-w-full md:max-w-[850px] justify-center md:justify-start">
                {processSteps.slice(1).map((step, index) => (
                  <div
                    key={index}
                    className="relative group rounded-2xl bg-white w-full md:w-[275px] min-h-[190px] p-5 border border-blue-100 shadow-sm overflow-hidden flex flex-col gap-3"
                    style={{ background: 'radial-gradient(69% 69% at 100% 100%, #E3EEFF 0%, #FFFFFF 100%)' }}
                  >
                    <div className="text-base md:text-lg text-black">{step.title}</div>
                    <div className="text-xs md:text-sm text-[#7C7E7A]">{step.description}</div>
                    <img
                      className="absolute right-[-34px] w-[150px] md:w-[130px] h-auto bottom-[-44px]"
                      src={step.image}
                      alt={step.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}