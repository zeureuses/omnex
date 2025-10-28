'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black p-0 w-full">
        {/* Mobile Footer */}
        <div className="block md:hidden">
          <div className="p-6 text-white bg-black">
            <div className="flex flex-col gap-6">
              {/* Logo and Description */}
              <div className="flex flex-col gap-4">
                <img
                  src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AL7HQ6tCvAoAAAAAQMAAAAgADlxJAQFr/original"
                  alt="Omnex"
                  className="w-[80px] h-auto"
                />
                <div className="text-sm opacity-50 leading-relaxed">
                  Enabling global RWA tokenization via a secure and interoperable Layer 2 framework uniting Web2 and Web3.
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3 items-center">
                <a href="https://t.me/OmnexLayer" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10 text-white"
                    aria-label="Telegram"
                  >
                    <path fill="currentColor" d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"/>
                  </svg>
                </a>
                <a href="https://x.com/OmnexLayer" target="_blank" rel="noopener noreferrer">
                  <img
                    className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                    src="https://cdn.simpleicons.org/x/ffffff"
                    alt="X"
                  />
                </a>
                <a href="https://omnex-layer.gitbook.io/omnex-layer" target="_blank" rel="noopener noreferrer">
                  <img
                    className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                    src="https://cdn.simpleicons.org/gitbook/ffffff"
                    alt="GitBook"
                  />
                </a>
                <a href="https://github.com/Omnex-Layer" target="_blank" rel="noopener noreferrer">
                  <img
                    className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                    src="https://cdn.simpleicons.org/github/ffffff"
                    alt="GitHub"
                  />
                </a>
                <a href="https://t.me/OmnexLayerAnn" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10 text-white"
                    aria-label="Telegram Announcements"
                  >
                    <path fill="currentColor" d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"/>
                  </svg>
                </a>
              </div>

              {/* Navigation - headers and sublinks */}
              <div className="w-full flex flex-row justify-between gap-8 md:gap-16 py-6">
                {/* Developer */}
                <Link
                  href="https://omnex-layer.gitbook.io/omnex-layer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start gap-2 min-w-[120px]"
                >
                  <span className="font-semibold text-white text-base mb-1">
                    Developer
                  </span>
                  <span className="text-white/70 text-sm hover:text-[#6effff] transition">
                    Docs
                  </span>
                  <span
                    className="text-white/70 text-sm hover:text-[#6effff] transition"
                    onClick={e => {
                      e.preventDefault();
                      window.open('https://github.com/Omnex-Layer', '_blank', 'noopener,noreferrer');
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    Github
                  </span>
                </Link>
                {/* Ecosystem */}
                <Link
                  href="/ecosystem"
                  className="flex flex-col items-start gap-2 min-w-[120px]"
                >
                  <span className="font-semibold text-white text-base mb-1">
                    Ecosystem
                  </span>
                  <span className="text-white/70 text-sm hover:text-[#6effff] transition">
                    Featured Projects
                  </span>
                  <span className="text-white/70 text-sm hover:text-[#6effff] transition">
                    Web3 Partners
                  </span>
                </Link>
                {/* RWA */}
                <Link
                  href="/rwa"
                  className="flex flex-col items-start gap-2 min-w-[120px]"
                >
                  <span className="font-semibold text-white text-base mb-1">
                    RWA
                  </span>
                  <span className="text-white/70 text-sm hover:text-[#6effff] transition">
                    RWA Solution
                  </span>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Link
                  href="https://t.me/OmnexLayer"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="bg-gradient-to-r from-[#326cff] to-[#6effff] rounded-full border-none text-white px-6 py-3 text-sm hover:opacity-90 transition-opacity w-full">
                    Community
                  </button>
                </Link>
                <Link
                  href="https://t.me/OmnexLayerAnn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-1 rounded-full bg-gradient-to-r from-[#326CFF] to-[#6effff] w-full"
                >
                  <div className="inline-flex items-center justify-center bg-black rounded-full text-[#326cff] px-6 py-3 text-sm relative w-full">
                    <span className="relative z-10 text-[#326CFF]">
                      Announcements
                    </span>
                  </div>
                </Link>
              </div>

              {/* Divider */}
              <div className="h-px bg-white opacity-20"></div>

              {/* Legal Links */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    className="text-white hover:text-white text-sm"
                    href="https://omnex-layer.gitbook.io/omnex-layer/terms-privacy-and-policy/terms-of-services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Services
                  </Link>
                  <Link
                    className="text-white hover:text-white text-sm"
                    href="https://omnex-layer.gitbook.io/omnex-layer/terms-privacy-and-policy/privacy-and-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-xs opacity-70 text-center pt-2">
                @2025 Copyright by Omnex Layer All rights reserved.
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="p-4.5 lg:px-0 lg:py-16 text-white bg-black flex justify-center items-center">
            <div className="w-[1160px] flex flex-col gap-8">
              <div className="flex flex-wrap items-start justify-between gap-16 lg:gap-24 xl:gap-32">
                <div className="flex flex-col gap-4">
                  <img
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AL7HQ6tCvAoAAAAAQMAAAAgADlxJAQFr/original"
                    alt="Omnex"
                    className="w-[100px] h-auto"
                  />
                  <div className="w-[300px] text-base opacity-50">
                    Enabling global RWA tokenization via a secure and interoperable Layer 2 framework uniting Web2 and Web3.
                  </div>
                  <div className="flex gap-3 items-center">
                    <a href="https://t.me/OmnexLayer" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10 text-white"
                        aria-label="Telegram"
                      >
                        <path fill="currentColor" d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"/>
                      </svg>
                    </a>
                    <a href="https://x.com/OmnexLayer" target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                        src="https://cdn.simpleicons.org/x/ffffff"
                        alt="X"
                      />
                    </a>
                    <a href="https://omnex-layer.gitbook.io/omnex-layer" target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                        src="https://cdn.simpleicons.org/gitbook/ffffff"
                        alt="GitBook"
                      />
                    </a>
                    <a href="https://github.com/Omnex-Layer" target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                        src="https://cdn.simpleicons.org/github/ffffff"
                        alt="GitHub"
                      />
                    </a>
                    <a href="https://t.me/OmnexLayerAnn" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10 text-white"
                        aria-label="Telegram Announcements"
                      >
                        <path fill="currentColor" d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex-1 flex justify-end gap-8">
                  <div className="flex gap-12">
                    
 
                    <div>
                      <div className="font-bold text-white mb-2">Quantum Tools</div>
                      <div className="flex flex-col gap-1">
                        <Link
                          className="font-medium text-base text-[rgba(255,255,255,0.80)] hover:text-[#326CFF] transition-colors"
                          href="/quantum-dashboard"
                        >
                          Dashboard
                        </Link>
                        <Link
                          className="font-medium text-base text-[rgba(255,255,255,0.80)] hover:text-[#326CFF] transition-colors"
                          href="/quantum-analytics"
                        >
                          Analytics
                        </Link>
                        <Link
                          className="font-medium text-base text-[rgba(255,255,255,0.80)] hover:text-[#326CFF] transition-colors"
                          href="/quantum-api"
                        >
                          API Access
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div className="font-bold text-white mb-2">Starship Center</div>
                      <div className="flex flex-col gap-1">
                        <Link
                          className="font-medium text-base text-[rgba(255,255,255,0.80)] hover:text-[#326CFF] transition-colors"
                          href="/starship-launches"
                        >
                          Launches
                        </Link>
                        <Link
                          className="font-medium text-base text-[rgba(255,255,255,0.80)] hover:text-[#326CFF] transition-colors"
                          href="/starship-crew"
                        >
                          Crew
                        </Link>
                        <Link
                          className="font-medium text-base text-[rgba(255,255,255,0.80)] hover:text-[#326CFF] transition-colors"
                          href="/starship-gallery"
                        >
                          Gallery
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div className="font-bold text-white mb-2">Pixel Forge</div>
                      <div className="flex flex-col gap-1">
                        <Link
                          className="font-medium text-base text-[rgba(255,255,255,0.80)] hover:text-[#326CFF] transition-colors"
                          href="/pixel-generator"
                        >
                          Generator
                        </Link>
                        <Link
                          className="font-medium text-base text-[rgba(255,255,255,0.80)] hover:text-[#326CFF] transition-colors"
                          href="/pixel-market"
                        >
                          Marketplace
                        </Link>
                        <Link
                          className="font-medium text-base text-[rgba(255,255,255,0.80)] hover:text-[#326CFF] transition-colors"
                          href="/pixel-tutorials"
                        >
                          Tutorials
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-4 flex gap-6">
                <Link
                  href="https://t.me/OmnexLayer"
                  target="_blank"
                  rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-[#326cff] to-[#6effff] rounded-full border-none text-white px-6 py-1.5 md:py-[10px] text-xs md:text-base hover:opacity-90 transition-opacity">
                  Community
                </button>
                </Link>
                <Link
                  href="https://t.me/OmnexLayerAnn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-1 rounded-full bg-gradient-to-r from-[#326CFF] to-[#6effff]"
                >
                  <div className="inline-flex items-center justify-center bg-black rounded-full text-[#326cff] px-6 py-[10px] text-base relative">
                    <span className="relative z-10 text-[#326CFF] ">
                      Announcements
                    </span>
                  </div>
                </Link>
              </div>

              <div className="h-px bg-white opacity-20 mb-0"></div>

              <div className="flex items-center justify-between bg-black">
                <div className="flex items-center gap-2">
                  <Link
                    className="text-white hover:text-white"
                    href="https://omnex-layer.gitbook.io/omnex-layer/terms-privacy-and-policy/terms-of-services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Services
                  </Link>
                  <div className="w-px h-[18px] bg-white opacity-40"></div>
                  <Link
                    className="text-white hover:text-white"
                    href="https://omnex-layer.gitbook.io/omnex-layer/terms-privacy-and-policy/privacy-and-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm opacity-70">
                  @2025 Copyright by Omnex Layer All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}