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
                <img
                  className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                  src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/zH4qQ5bC0igAAAAAHHAAAAgADlxJAQFr/original"
                  alt="Email"
                />
                <img
                  className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                  src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/5TiPRa_GIz4AAAAAAAAAAAAADlxJAQFr/original"
                  alt="Discord"
                />
                <img
                  className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                  src="https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*M6r5R7zmbawAAAAAAAAAAAAADiOMAQ/original"
                  alt="X"
                />
                <img
                  className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                  src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/NAabSbq6MMwAAAAAAAAAAAAADlxJAQFr/original"
                  alt="Telegram"
                />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  className="font-semibold text-white hover:opacity-100 hover:bg-gradient-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                  href="/developer"
                >
                  Developer
                </Link>
                <Link
                  className="font-semibold text-white hover:opacity-100 hover:bg-gradient-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                  href="/ecosystem"
                >
                  Ecosystem
                </Link>
                <Link
                  className="font-semibold text-white hover:opacity-100 hover:bg-gradient-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                  href="/rwa"
                >
                  RWA
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
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/zH4qQ5bC0igAAAAAHHAAAAgADlxJAQFr/original"
                      alt="Email"
                    />
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/5TiPRa_GIz4AAAAAAAAAAAAADlxJAQFr/original"
                      alt="Discord"
                    />
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_hsbbrh/afts/img/A*M6r5R7zmbawAAAAAAAAAAAAADiOMAQ/original"
                      alt="X"
                    />
                    <img
                      className="w-8 h-8 object-contain cursor-pointer hover:opacity-100 rounded-md p-1.5 bg-white/10"
                      src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/NAabSbq6MMwAAAAAAAAAAAAADlxJAQFr/original"
                      alt="Telegram"
                    />
                  </div>
                </div>

                <div className="flex-1 flex justify-end gap-8">
                  <Link
                    className="font-semibold text-white hover:opacity-100 hover:bg-gradient-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                    href="/developer"
                  >
                    Developer
                  </Link>

                  <Link
                    className="font-semibold text-white hover:opacity-100 hover:bg-gradient-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                    href="/ecosystem"
                  >
                    Ecosystem
                  </Link>

                  <Link
                    className="font-semibold text-white hover:opacity-100 hover:bg-gradient-to-r hover:from-[#326CFF] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent transition-all"
                    href="/rwa"
                  >
                    RWA
                  </Link>
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