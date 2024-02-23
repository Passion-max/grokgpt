import Link from "next/link";
import React, { useState, useRef } from 'react';
import Image from "next/image";

import logoImage from "../../assets/logo.png";
import barsIconImage from "../../assets/barsIcon.svg";
import xIconImage from "../../assets/xicon.svg";
import telegramImage from "../../assets/Telegram.png";
import twitterImage from "../../assets/twitter.png";
import youtubeImage from "../../assets/youtube.png";
import redditImage from "../../assets/Reddit.png";
import facebookImage from "../../assets/FACEBOOK.png";
import mediumImage from "../../assets/Mediume.png";
import etherscanImage from "../../assets/Etherscan.png";
import gitbookImage from "../../assets/Gitbook.png";
import copyicon from "../../assets/copy.png";

export default function Navigation() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);

  const handleScrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const walletAddress = '0xf2a95690A311602834023Bd6735F9D739fF1C1B1';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      alert('Wallet address copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <>
      <nav className="flex-col flex-center stickyNav">
        <div className="flex-center px-5 py-4 w-full">
          <div className="nav flex-between w-[90%] mx-auto max-w-[1250px]">
            <Image
              src={logoImage}
              alt="logo"
              className="w-32 md:w-40 object-contain"
            />
            <div className="hidden items-center justify-center gap-5 text-xs lg:flex">
              <Link
                href="https://app.uniswap.org/#/swap?chainName=ethereum&amp;outputCurrency=0xc3168B1B4807684A2b0650C4b292f901bF27173A"
                className="monts link"
              >
                Buy $GROKGPT
              </Link>
              <Link
                href="#partnersSection"
                className="npartners monts link cursor-pointer"
                onClick={() => handleScrollToSection(partnersRef)}
              >
                Partners
              </Link>

              <Link
                href="#contactSection"
                className="ncontact cursor-pointer monts link"
                onClick={() => handleScrollToSection(contactRef)}
              >
                Contact
              </Link>
              <Link
                href="#faqSection"
                className="nfaq cursor-pointer monts link"
                onClick={() => handleScrollToSection(faqRef)}
              >
                Faq
              </Link>

              <Link
                target="_blank"
                rel="noopener"
                href="https://doc.grokgpt.com/"
                className="monts link"
              >
                Document
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                href="https://doc.grokgpt.com/usdtex-token/roadmap"
                className="monts link"
              >
                Roadmap
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                href="https://doc.grokgpt.com/usdtex-token/tokenomics"
                className="monts link"
              >
                Tokenomics
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                href="https://doc.grokgpt.com/regulatory-and-risk-compliance/audits"
                className="monts link"
              >
                Audits
              </Link>
            </div>
            <div className="flex-center gap-2">
              <button
                onClick={handleCopy}
                className="grey-grad nav-btn px-2 md:px-5 py-3 rounded-lg grey-grad cont link-btn turner hidden md:flex"
              >
                <p className="turn-child text-xs sm:text-md">0xf2a9569...1C1B1 
                
                </p>
              </button>

              <div
                onClick={toggleMobileNav}
                className="cursor-pointer lg:hidden"
              >
                <Image
                  src={barsIconImage}
                  alt="bars-icon"
                  className="mobileBar h-7 sm:h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMobileNavOpen && (
        <section className="mobileNav" style={{ flexDirection: "column" }}>
          {/* Close Button for Mobile Nav */}
          <div
            onClick={toggleMobileNav}
            className="cursor-pointer absolute top-2 right-5"
          >
            <Image
              src={xIconImage}
              alt="x-icon"
              className="mobileX h-10 animate animate-pulse"
            />
          </div>

          <div className="nav-links !items-start !justify-start gap-5 text-lg flex flex-col">
            <Link
              href="https://app.uniswap.org/#/swap?chainName=ethereum&amp;outputCurrency=0xc3168B1B4807684A2b0650C4b292f901bF27173A"
              className="monts link"
            >
              Buy $GROKGPT
            </Link>
            <Link
              href="#partners"
              className="mnpartners monts link cursor-pointer"
              onClick={() => {
                toggleMobileNav();
                handleScrollToSection(partnersRef);
              }}
            >
              Partners
            </Link>

            <Link
              href="#contact"
              className="mncontact cursor-pointer monts link"
              onClick={() => {
                toggleMobileNav();
                handleScrollToSection(contactRef);
              }}
            >
              Contact
            </Link>
            <Link
              href="#faq"
              className="mnfaq cursor-pointer monts link"
              onClick={() => {
                toggleMobileNav();
                handleScrollToSection(faqRef);
              }}
            >
              Faq
            </Link>

            <Link
              target="_blank"
              rel="noopener"
              href="https://doc.grokgpt.com/"
              className="monts link"
            >
              Document
            </Link>

            <Link
              target="_blank"
              rel="noopener"
              href="https://doc.grokgpt.com/usdtex-token/tokenomics"
              className="monts link"
            >
              Tokenomics
            </Link>
            <Link
              target="_blank"
              rel="noopener"
              href="https://doc.grokgpt.com/regulatory-and-risk-compliance/audits"
              className="monts link"
            >
              Audits
            </Link>
          </div>

          <div className="!items-start mt-10 !pl-[45px] !justify-start w-full flex flex-col gap-5">
            <div className="!items-start !justify-start gap-7 flex flex-wrap !w-full">
              <Link href="https://t.me/GrokGPT">
                <Image
                  src={telegramImage}
                  alt="telegram"
                  className="w-6 object-contain"
                />
              </Link>
              <Link href="https://twitter.com/grokgpt">
                <Image
                  src={twitterImage}
                  alt="twitter"
                  className="w-6 object-contain"
                />
              </Link>
              <Link href="https://www.youtube.com/@grokgptDeFi">
                <Image
                  src={youtubeImage}
                  alt="youtube"
                  className="w-6 object-contain"
                />
              </Link>
              <Link href="https://www.reddit.com/u/grokgpt">
                <Image
                  src={redditImage}
                  alt="reddit"
                  className="w-6 object-contain"
                />
              </Link>
            </div>
            <div className="!items-start !justify-start gap-7 flex flex-wrap !w-full">
              <Link href="https://web.facebook.com/102093109639949">
                <Image
                  src={facebookImage}
                  alt="facebook"
                  className="w-6 object-contain"
                />
              </Link>
              <Link href="https://medium.com/@grokgpt">
                <Image
                  src={mediumImage}
                  alt="medium"
                  className="w-6 object-contain"
                />
              </Link>
              <Link href="https://etherscan.io/token/0xc3168b1b4807684a2b0650c4b292f901bf27173a">
                <Image
                  src={etherscanImage}
                  alt="etherscan"
                  className="w-6 object-contain"
                />
              </Link>
              <Link href="https://doc.grokgpt.com/grokgpt/introduction">
                <Image
                  src={gitbookImage}
                  alt="gitbook"
                  className="w-6 object-contain"
                />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
