import Link from "next/link";
import DeveloperSlider from "./components/DeveloperSlider";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen bg-white overflow-x-hidden">
      <main className="flex flex-col items-center sm:items-start">
        <section className="w-full flex items-center justify-center bg-[url('/new_webp-mobile.png')] md:bg-[url('/new_webp.webp')] bg-cover bg-center bg-no-repeat p-[84px_24px_40px] md:p-[210px_100px_150px]">
          <div className="w-full md:w-[1160px] flex flex-col items-stretch gap-4">
            <h1 className="text-[#1D1E1E] text-2xl md:text-[48px] font-semibold flex flex-col items-center md:items-start">
              <span className="text-center md:text-left">
                Omnex Layer
              </span>
              {/* <span>Infrastructure</span> */}
            </h1>

            <div className="md:w-[600px] text-[#1D1E1E] text-sm md:text-lg text-center md:text-left">
              Omnex Layer is a fast and easy-to-use Layer 2 solution that solves blockchain scalability issues while ensuring a smooth experience and high performance for real-world use.
            </div>

            <div className="mt-4 flex justify-center md:justify-start gap-6">
              <Link
                href="https://omnex-layer.gitbook.io/omnex-layer"
                target="_blank"
                rel="noopener noreferrer"
                className="border py-2 px-4 bg-gradient-to-r from-[#326cff] to-[#6effff] rounded-full border-none text-white text-xs md:text-base flex items-center justify-center"
              >
                View developer docs
              </Link>

              <Link
                href="https://github.com/Omnex-Layer"
                target="_blank"
                rel="noopener noreferrer"
                className="border py-2 px-4 border-[#326cff] text-[#326cff] rounded-full text-xs md:text-base flex items-center justify-center"
              >
                Explore Github
              </Link>
            </div>
          </div>
        </section>

        <section className="w-screen overflow-hidden flex flex-col items-center justify-center bg-white py-8 md:py-16">
          <h2 className="text-black text-center text-xs md:text-base font-medium mb-6">
            Web3 Partners
          </h2>

          <div className="relative w-full overflow-hidden">
            <div className="flex whitespace-nowrap animate-slide-slow">
              {/* Partner logos */}

              {[
                {
                  name: "Aave",
                  url: "https://aave.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/lkPlSJaEArkAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-[24px]",
                },
                {
                  name: "Centrifuge",
                  url: "https://centrifuge.io/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/LN79S4P3ePkAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-[34px]",
                },
                {
                  name: "ChainIDE",
                  url: "https://chainide.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/9CjqQoXI7QUAAAAAQEAAAAgADlxJAQFr/original",
                  h: "h-[34px]",
                },
                {
                  name: "Chainlink",
                  url: "https://chain.link/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/v5psQrSElJwAAAAAQCAAAAgADlxJAQFr/original",
                  h: "h-[30px]",
                },
                {
                  name: "Ethereum Foundation",
                  url: "https://ethereum.org/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/VBTGRIQgz7gAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-9",
                },
                {
                  name: "Fireblocks",
                  url: "https://www.fireblocks.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/ahinSphThpYAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-7",
                },
                {
                  name: "Okx Wallet",
                  url: "https://www.okx.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/rep6SarWLskAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-8",
                },
                {
                  name: "OpenZeppelin",
                  url: "https://www.openzeppelin.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/ELtjS7VXTosAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-[26px]",
                },
                {
                  name: "Plume",
                  url: "https://www.plume.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/TQAkRZ1kIXIAAAAAQEAAAAgADlxJAQFr/original",
                  h: "h-[34px]",
                },
                {
                  name: "Slowmist",
                  url: "https://www.slowmist.com/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KaYiSqFeMGoAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-8",
                },
                {
                  name: "Zellic",
                  url: "https://www.zellic.io/",
                  src: "https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/8Cv9S5YU50oAAAAAQDAAAAgADlxJAQFr/original",
                  h: "h-8",
                },
              ].map((partner) => (
                <Link
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-6 flex items-center justify-center shrink-0"
                >
                  <img
                    alt={partner.name}
                    src={partner.src}
                    width={60}
                    height={40}
                    className={`w-[90px] h-[20px] md:w-[130px] md:h-[25px] grayscale hover:grayscale-0 transition-all duration-300 object-contain`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full flex items-center justify-center pt-4 md:pt-8 mb-6 md:mb-[86px]">
          <div className="w-full md:w-[1160px] flex flex-col items-center gap-4 md:gap-8 px-6 md:px-0">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-black text-2xl md:text-[38px] font-medium text-center">
                Why Omnex Layer?
              </h2>

              <div className="text-[#666F8D] text-sm md:text-lg text-center leading-[22px] md:leading-[27px] w-full md:w-[890px]">
Omnex Layer is specifically optimized for real-world assets, applications, and users. It goes beyond simple scalability by introducing data-driven trust, AI-enhanced analytics, and modular interoperability that empower developers, enterprises, and end-users alike.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:gap-14">
              <div className="relative group w-full md:w-[645px] h-auto">
                <video
                  src="/omnex_vid.mp4"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 flex gap-1 md:gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <button
                    className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
                    title="Unmute"
                  >
                    <div className="relative">
                      <svg
                        viewBox="64 64 896 896"
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="currentColor"
                      >
                        <path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-0.5 md:w-5 md:h-0.5 bg-white rotate-45 transform origin-center"></div>
                      </div>
                    </div>
                  </button>
                  <button
                    className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
                    title="Fullscreen"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="currentColor"
                    >
                      <path d="M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-5 md:gap-0">
                <div className="flex items-start gap-4">
                  <img
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/NBKGSYvO_osAAAAATZAAAAgADlxJAQFr/original"
                    alt="why-omnex"
                    className="w-9"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black text-base md:text-2xl font-medium leading-6 md:leading-9">
                      Developer-Centric Workflow
                    </h3>
                    <div className="text-[#666F8D] text-sm md:text-base leading-[22px] md:leading-6">
                      Built for Developers: Accelerate Development, Optimize Deployment
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KSpcS64E-rUAAAAATYAAAAgADlxJAQFr/original"
                    alt="why-omnex"
                    className="w-9"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black text-base md:text-2xl font-medium leading-6 md:leading-9">
                      Compliance Framework
                    </h3>
                    <div className="text-[#666F8D] text-sm md:text-base leading-[22px] md:leading-6">
                      All-Inclusive Compliance Framework for Institutional Clients
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/CJyiR5m3DgQAAAAATOAAAAgADlxJAQFr/original"
                    alt="why-omnex"
                    className="w-9"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black text-base md:text-2xl font-medium leading-6 md:leading-9">
                      AI-Accelerated ZK System
                    </h3>
                    <div className="text-[#666F8D] text-sm md:text-base leading-[22px] md:leading-6">
                      Scalable Enterprise Performance, Zero-Trust Protection, and AI-Enhanced Precision
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[url(https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/16FRRaXA4VQAAAAASqAAAAgADlxJAQFr/fmt.webp)] bg-no-repeat bg-cover py-6 md:py-[79px] w-full flex items-center justify-center mb-0 md:mb-24">
          <div className="w-full md:w-[1160px] flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-[60px]">
            <div className="w-full md:w-[30%] flex flex-col items-center md:items-start px-4 md:px-0 gap-4">
              <h1 className="text-black text-2xl md:text-[38px] font-medium">
                Omnex Layer Dashboard
              </h1>
              <div className="text-[#666F8D] text-sm md:text-lg text-center md:text-left">
                Real-time metrics for the Omnex Layer2 mainnet, including throughput, gas costs, locked assets, and transaction volume.
              </div>
              <div className="my-4 py-1 px-1 bg-gradient-to-r from-[#326cff] to-[#6effff] rounded-full">
                <Link
                  href="https://github.com/Omnex-Layer/omnex-dapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white rounded-full px-3 md:px-6 py-[15px] h-8 md:h-[52px] text-xs md:text-base relative"
                >
                  <span className="relative z-10 text-black">
                    dAPP (under construction)
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-[85%] md:w-[70%] flex flex-wrap items-center gap-y-6 md:gap-y-20">
              {/* Block Height */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-2xl md:text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-xl md:text-5xl font-semibold md:font-medium">
                    1,029,595
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm min-h-[40px] md:h-5 md:max-w-[160px]">
                  Block Height
                </div>
              </div>

              {/* Peak TPS */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-2xl md:text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-xl md:text-5xl font-semibold md:font-medium">
                    1.2000
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm min-h-[40px] md:h-5 md:max-w-[160px]">
                  Peak TPS (Transactions Per Second)
                </div>
              </div>

              {/* TVL */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-2xl md:text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-xl md:text-5xl font-semibold md:font-medium">
                    0.00
                  </span>
                  <span className="text-sm md:text-lg font-normal relative top-[-2px] md:top-[-10px]">
                    
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm min-h-[40px] md:h-5 md:max-w-[160px]">
                  TVL(USD)
                </div>
              </div>

              {/* Total Transactions */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-2xl md:text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-xl md:text-5xl font-semibold md:font-medium">
                    0.00
                  </span>
                  <span className="text-sm md:text-lg font-normal relative top-[-2px] md:top-[-10px]">
                    
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm min-h-[40px] md:h-5 md:max-w-[160px]">
                  Total Transactions
                </div>
              </div>

              {/* Avg Block Time */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-2xl md:text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-xl md:text-5xl font-semibold md:font-medium">
                    2.7597
                  </span>
                  <span className="text-sm md:text-lg font-normal relative top-[-2px] md:top-[-10px]">
                    S
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm min-h-[40px] md:h-5 md:max-w-[160px]">
                  Avg. Block Time
                </div>
              </div>

              {/* Current Gas Price */}
              <div className="w-1/2 md:w-1/3 flex flex-col justify-end gap-1.5 md:gap-4">
                <div className="text-[#326CFF] text-2xl md:text-5xl font-medium flex items-end gap-1 md:gap-3">
                  <span className="text-xl md:text-5xl font-semibold md:font-medium">
                    0.0010
                  </span>
                  <span className="text-sm md:text-lg font-normal relative top-[-2px] md:top-[-10px]">
                    Gwei
                  </span>
                </div>
                <div className="text-black/65 md:text-[#1D1E1E] text-xs md:text-sm min-h-[40px] md:h-5 md:max-w-[160px]">
                  Current Gas Price
                </div>
              </div>
            </div>
          </div>
        </section>

        <DeveloperSlider></DeveloperSlider>

        <div className="w-full flex items-center justify-center">
          <div className="w-full md:w-[1160px] px-4 py-8 md:px-0 md:py-24 flex flex-col items-stretch gap-4">
            <h1 className="text-[#1D1E1E] text-2xl md:text-[38px] font-semibold text-center leading-tight">
              Omnex Layer 2 Architecture Overview
            </h1>

            <p className="text-[#666F8D] text-sm md:text-base text-center">
              Omnex delivers a powerful and intuitive Layer 2 scaling solution that tackles blockchain’s scalability bottlenecks using advanced innovations, maintaining seamless compatibility.
            </p>


            {/* Desktop image */}
            <img
              className="w-full h-auto mt-4"
              src="/images/info.png"
              alt="Layer2 Architecture Overview"
            />
          </div>
        </div>

        {/* <section className="w-full px-4 md:px-0 pt-6 md:pt-0 pb-12 md:pb-24 flex items-center justify-center bg-[url(https://mdn.alipayobjects.com/huamei_lc6ihc/afts/img/eA3zS4F7AZYAAAAAgBAAAAgADltnAQFr/original)] bg-[length:100%_auto] bg-[position:center_200px] sm:bg-[position:center_100px] md:bg-[position:center_-200px] bg-no-repeat">
          <div className="p-4 md:p-8 w-full md:w-[1160px] bg-black bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/gjPdQa52ZDQAAAAAULAAAAgADlxJAQFr/original')] md:bg-[url('https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/gPj7QYA9ZIgAAAAARPAAAAgADlxJAQFr/fmt.webp')] bg-[length:100%_100%] md:bg-cover bg-center bg-no-repeat rounded-2xl flex flex-col gap-4">
            <h2 className="text-white text-2xl md:text-[38px] font-medium w-full md:w-[675px]">
              Tokenize Real-World Assets. Unlock Global Value.
            </h2>

            <div className="text-white opacity-85 text-sm md:text-lg">
              The compliant, high-performance Layer 2 for connecting real assets
              to global liquidity.
            </div>

            <div className="mt-4 flex flex-col-reverse md:flex-row items-start md:items-center gap-2.5 md:gap-9">
              <div className="flex flex-col items-start justify-start gap-4">
                <Link
                  href="/institutions-retention"
                  className="bg-gradient-to-r from-[#326cff] to-[#6effff] rounded-full border-none text-white px-3 md:px-6 py-[15px] h-8 md:h-12 text-xs md:text-sm flex items-center gap-2 relative left-px hover:opacity-90 transition-opacity"
                >
                  Book a demo
                </Link>
              </div>

              <Link
                href="/rwa"
                className="text-sm md:text-base font-medium text-white opacity-85 border-b border-white whitespace-nowrap hover:opacity-100 transition-opacity"
              >
                Explore RWA Solution
              </Link>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
