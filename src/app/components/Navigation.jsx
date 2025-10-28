'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-1000 w-full">
        <div className="bg-white/31 backdrop-blur-sm">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0 h-11 md:h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <img
                src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/AL7HQ6tCvAoAAAAAQMAAAAgADlxJAQFr/original"
                alt="logo"
                className="h-4 md:h-7 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/developer"
                className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors"
              >
                Developer
              </Link>

              <Link
                href="/ecosystem"
                className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors"
              >
                Ecosystem
              </Link>

              <Link
                href="/rwa"
                className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors"
              >
                RWA
              </Link>

            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {!mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="20"
                  height="20"
                  className="text-[#326CFF]"
                >
                  <path
                    d="M14.4997078125,11.333334123535156C14.5917078125,11.333334123535156,14.6663078125,11.407954123535156,14.6663078125,11.499994123535156L14.6663078125,12.416664123535156C14.6663078125,12.508714123535157,14.5917078125,12.583334123535156,14.4997078125,12.583334123535156L1.4996748125,12.583334123535156C1.4076271125,12.583334123535156,1.3330078125,12.508714123535157,1.3330078125,12.416664123535156L1.3330078125,11.499994123535156C1.333008422852,11.407954123535156,1.4076275125,11.333334123535156,1.4996748125,11.333334123535156L14.4997078125,11.333334123535156ZM9.8330078125,7.374994123535156C9.9250578125,7.374994123535156,9.9996778125,7.449614123535156,9.9996778125,7.541664123535156L9.9996778125,8.458334123535156C9.9996778125,8.550374123535157,9.9250578125,8.624994123535156,9.8330078125,8.624994123535156L1.4996748125,8.624994123535156C1.4076277125,8.624994123535156,1.333008422852,8.550374123535157,1.333008422852,8.458334123535156L1.333008422852,7.541664123535156C1.333008422852,7.449614123535156,1.4076277125,7.374994123535156,1.4996748125,7.374994123535156L9.8330078125,7.374994123535156ZM14.4997078125,7.374994123535156C14.5917078125,7.374994123535156,14.6663078125,7.449614123535156,14.6663078125,7.541664123535156L14.6663078125,8.458334123535156C14.6663078125,8.550374123535157,14.5917078125,8.624994123535156,14.4997078125,8.624994123535156L11.4997078125,8.624994123535156C11.4076078125,8.624994123535156,11.3330078125,8.550374123535157,11.3330078125,8.458334123535156L11.3330078125,7.541664123535156C11.3330078125,7.449614123535156,11.4076078125,7.374994123535156,11.4997078125,7.374994123535156L14.4997078125,7.374994123535156ZM14.4997078125,3.4166641235351562C14.5917078125,3.4166638183591562,14.6663078125,3.4912832235351563,14.6663078125,3.583331123535156L14.6663078125,4.499994123535156C14.6663078125,4.592044123535157,14.5917078125,4.666664123535156,14.4997078125,4.666664123535156L1.4996748125,4.666664123535156C1.4076271125,4.666664123535156,1.3330078125,4.592044123535157,1.3330078125,4.499994123535156L1.3330078125,3.583331123535156C1.3330078125,3.4912832235351563,1.4076271125,3.4166638183591562,1.4996748125,3.4166641235351562L14.4997078125,3.4166641235351562Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[#326CFF]"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <nav className="max-w-[1160px] mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="/developer"
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors py-2"
              >
                Developer
              </Link>

              <Link
                href="/ecosystem"
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors py-2"
              >
                Ecosystem
              </Link>

              <Link
                href="/rwa"
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-base text-[rgba(0,4,12,0.80)] hover:text-[#326CFF] transition-colors py-2"
              >
                RWA
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}