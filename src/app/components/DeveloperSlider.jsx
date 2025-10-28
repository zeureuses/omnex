"use client";

import { useState } from "react";
import Link from "next/link";

export default function DeveloperSlider() {
  const cards = [
    {
      title: "Developer Quickstart",
      description:
        "Get started quickly with our step-by-step guides and tools.",
      img: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/1zSlSbfCus0AAAAAQrAAAAgADlxJAQFr/original",
      link: "https://omnex-layer.gitbook.io/omnex-layer/guides/developer-quickstart",
    },
    {
      title: "Blockchain Explorer",
      description:
        "Explore transactions, addresses, and blocks on the Omnex Layer.",
      img: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/zFtwTKmSNkgAAAAAQsAAAAgADlxJAQFr/original",
      link: "https://omnex-layer.gitbook.io/omnex-layer/guides/omnex-explorer",
    },
    {
      title: "Omnex JSON-RPC API Method",
      description:
        "Use our API and connect your dApps on the Omnex Layer.",
      img: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/As1KSqfT7FoAAAAAQsAAAAgADlxJAQFr/original",
      link: "https://omnex-layer.gitbook.io/omnex-layer/developers/omnex-json-rpc-api-method",
    },
    // {
    //   title: "SDK & APIs",
    //   description: "Integrate with Omnex easily using our SDKs and REST APIs.",
    //   img: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/M0Y6TqC5vQ4AAAAAQDAAAAgADlxJAQFr/original",
    //   link: "https://docs.Omnex.io/api/",
    // },
    // {
    //   title: "Smart Contract Templates",
    //   description:
    //     "Deploy pre-built contract templates to accelerate your launch.",
    //   img: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/oqnVRZUEkMEAAAAAQDAAAAgADlxJAQFr/original",
    //   link: "https://docs.Omnex.io/contracts/",
    // },
  ];

  const [index, setIndex] = useState(0);
  const visibleCards = 3;
  const cardWidth = 216; // 200px + 16px gap

  const next = () => {
    setIndex((prev) => (prev >= cards.length - visibleCards ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? cards.length - visibleCards : prev - 1));
  };

  return (
    <section className="w-full container mx-auto px-4 md:px-20">
      <div className="px-4 mb-24">
        <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-8">
          <div className="w-[80%] md:w-[60%] flex flex-row gap-5 items-center justify-center">
            {/* Left Button */}
            {/* <button
              onClick={prev}
              className="shrink-0 w-14 h-14 flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Previous cards"
            >
              <img
                src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/gNoiQaQkePIAAAAAQYAAAAgADlxJAQFr/original"
                alt="Previous"
                className="w-full h-full"
              />
            </button> */}

            {/* Slider container */}
            <div className="md:w-[640px] w-[280px] overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-700 ease-in-out items-start"
                style={{
                  transform: `translateX(-${index * cardWidth}px)`,
                }}
              >
                {cards.map((card, i) => (
                  <Link
                    key={i}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none group rounded-xl bg-gradient-to-b from-transparent from-45% to-[#F5FFF7] to-99% border border-[#DEDEDE]
                             w-[200px] h-[290px] py-[30px] px-5 shadow-[inset_0px_6px_0px_0px_#326CFF]
                             flex flex-col items-center justify-between gap-3 
                             hover:bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/VD1MSaJm2MsAAAAARAAAAAgADlxJAQFr/original')] 
                             hover:bg-[length:100%_auto] hover:bg-[position:0px_100%] hover:bg-no-repeat"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-20 h-20"
                    />
                    <h3 className="text-[#191919] text-lg font-medium text-center">
                      {card.title}
                    </h3>
                    <p className="text-[#7C7E7A] text-sm text-center">
                      {card.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Button */}
            {/* <button
              onClick={next}
              className="shrink-0 w-14 h-14 flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Next cards"
            >
              <img
                src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/WeY9TaaCA4cAAAAAQSAAAAgADlxJAQFr/original"
                alt="Next"
                className="w-full h-full"
              />
            </button> */}
          </div>

          {/* Right text block */}
          <div className="flex flex-col justify-between gap-4 w-[90%] md:w-[40%]">

            <h1 className="text-black text-2xl md:text-[36px] font-medium flex flex-col text-center md:text-left">
              <span>Made for Builders.</span>
              <span className="bg-gradient-to-r from-[#6effff] to-[#326cff] bg-clip-text text-transparent">
                Optimized To Scale.
              </span>
            </h1>

            <p className="text-[#666F8D] text-base md:text-lg text-center md:text-left">
              Omnex Layer offers a comprehensive suite of tools and resources within a modular Layer2 ecosystem, empowering developers to accelerate the journey from concept to launch.
            </p>

            <div className="flex flex-col gap-5 md:flex-row items-center">
              <div className="my-4 py-1 px-1 bg-gradient-to-r from-[#326cff] to-[#6effff] rounded-full">
                <Link
                  href="https://omnex-layer.gitbook.io/omnex-layer/guides/omnex-explorer"
                  className="inline-flex items-center justify-center bg-white rounded-full px-3 md:px-6 py-[15px] h-8 md:h-[52px] text-xs md:text-base relative"
                >
                  <span className="relative z-10 text-black">
                    Explore Developer Center
                  </span>
                </Link>
              </div>

              <Link
                href="https://t.me/OmnexLayerAnn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium opacity-85 border-b border-[#326cff] text-[#326cff] whitespace-nowrap hover:opacity-100 transition-opacity"
              >
                Announcements Channel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
