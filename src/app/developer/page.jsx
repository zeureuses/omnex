'use client';

import React, { useState } from 'react';

const developerResources = [
  {
    title: "Quick Start",
    description: "Get started quickly with our step-by-step guides and tools.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/1zSlSbfCus0AAAAAQrAAAAgADlxJAQFr/original",
    url: "https://omnex-layer.gitbook.io/omnex-layer/guides/developer-quickstart"
  },
  {
    title: "Blockchain Explorer",
    description: "Explore transactions, addresses, and blocks on the Omnex Layer.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/zFtwTKmSNkgAAAAAQsAAAAgADlxJAQFr/original",
    url: "https://omnex-layer.gitbook.io/omnex-layer/guides/omnex-explorer"
  },
  {
    title: "Omnex JSON-RPC API Method ",
    description: "Connect to our JSON-RPC API to develop your dapps.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/As1KSqfT7FoAAAAAQsAAAAgADlxJAQFr/original",
    url: "https://omnex-layer.gitbook.io/omnex-layer/developers/omnex-json-rpc-api-method"
  },
  {
    title: "X (Twitter)",
    description: "Join our growing community of developers.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/VXukT5YyrwIAAAAAQtAAAAgADlxJAQFr/original",
    url: "https://x.com/OmnexLayer"
  },
  {
    title: "Developer Docs",
    description: "Comprehensive documentation to help you build and deploy applications efficiently.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/4iI1SKza4oQAAAAAQoAAAAgADlxJAQFr/original",
    url: "https://omnex-layer.gitbook.io/omnex-layer"
  },
  {
    title: "GitHub",
    description: "Explore our open-source projects and contribute to the Omnex ecosystem.",
    icon: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/cffZSp20DqUAAAAAQrAAAAgADlxJAQFr/original",
    url: "https://github.com/Omnex-Layer"
  }
];

const transactionTypes = [
  { gas: "21,000 Gas", type: "Simple transfers" },
  { gas: "110,000 Gas", type: "NFT minting" },
  { gas: "55,000 Gas", type: "ERC20 transfers" },
  { gas: "100,000 Gas", type: "Complex contract calls" },
  { gas: "150,000 Gas", type: "DEX trading" }
];

export default function DeveloperPage() {
  const [congestion, setCongestion] = useState(50);
  const [selectedTx, setSelectedTx] = useState(0);

  const getCongestionLabel = () => {
    if (congestion < 33) return "Low";
    if (congestion < 66) return "Medium";
    return "High";
  };

  return (
    <div className="transition-all duration-300 bg-white">
      <div className="flex flex-col gap-16">
        {/* Hero Section */}
        <div 
          className="pt-24 md:pt-52 pb-16 md:pb-36 bg-cover bg-no-repeat flex flex-col items-center gap-4 px-4"
          style={{ backgroundImage: "url(https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/j2Z7QIOplnQAAAAAQ9AAAAgADlxJAQFr/original)" }}
        >
          <h2 className="text-3xl md:text-5xl text-center font-semibold text-black">
            Join The Developer Community
          </h2>
          <div className="text-[#666F8D] text-center text-sm md:text-base max-w-2xl">
            Collaborate, share knowledge, and stay updated on the latest Web3 innovations.
          </div>
          <a
            href="https://omnex-layer.gitbook.io/omnex-layer/guides/developer-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-16 px-6 py-3 text-base rounded-full border-none text-white bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 transition-opacity"
          >
            Documentation
          </a>
        </div>

        {/* Developer Center Section */}
        <div className="w-full px-4 flex flex-col gap-2 items-center">
          <div className="w-full max-w-[1160px] flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 px-4">
              <h2 className="text-2xl md:text-4xl text-black text-center font-medium">Developer Center</h2>
              <div className="text-[#666F8D] text-center text-sm md:text-base max-w-3xl">
                Built on Omnex Layer2, a developer-friendly ecosystem to accelerate the efficient deployment and iteration of Web3 applications.
              </div>
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full px-4 pb-24">
              {developerResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="rounded-xl bg-gradient-to-b from-transparent from-45% to-[#F5FFF7] to-99% border border-[#DEDEDE] shadow-sm w-full h-[280px] md:h-[340px] p-6 md:p-8 flex flex-col items-center justify-between gap-3 hover:bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/Bu2ZTolrvBcAAAAAQOAAAAgADlxJAQFr/original')] hover:bg-cover hover:bg-no-repeat transition-all">
                    <div className="flex flex-col items-center gap-3">
                      <img src={resource.icon} alt={`${resource.title} icon`} className="w-16 h-16 md:w-20 md:h-20" />
                      <h3 className="text-[#191919] text-lg md:text-2xl font-medium text-center">{resource.title}</h3>
                      <div className="text-[#7C7E7A] text-sm md:text-lg text-center">
                        {resource.description}
                      </div>
                    </div>
                    <button className="rounded-full text-black py-1 px-3 text-sm md:text-base border border-gray-300 bg-white hover:border-blue-500 hover:text-blue-500 transition-all">
                      Enter
                    </button>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}