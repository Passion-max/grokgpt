import Link from "next/link";
import Image from "next/image";
import flareImage from '../../assets/Flare.png';
import backgroundImage from '../../assets/BACKGROUND.jpg';
import heroai from '../../assets/fancy.png';
// import animationImage from '../../assets/Second animation.gif';
import AIImage from '../../assets/flipped_AI_training_bot.png';
// Import other images in a similar manner

export default function Hero() {
  return (
    <section className="mt-10 md:mt-0 md:pt-40 hero flex-center md:min-h-[90vh]">
      {/* <Image src={flareImage} alt="hero flare" className="heroflare-bg hidden md:block" /> */}
      <Image src={heroai} alt="background" className="backgroundhero" />

      <div className="flex-between md:items-center w-[95%] mx-auto max-w-[1200px] flex-col-reverse md:flex-row">
        <div className="flex items-center justify-center md:items-start md:justify-start flex-col gap-5 md:gap-5 z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl blue-text cont text-center md:text-start">The Ultimate Toolkit
            <br /> for all Defi Investors</h1>
          <p className="monts text-md sm:text-3xl text-center md:text-start">Welcome to GrokGPT, where AI ais trading. <br />
          Dive into a world where our cutting-edge AI empowers your trading decisions.</p>
          <div className="flex items-center justify-center md:justify-start gap-5">
            <div className="space-y-2">
              <Link href="https://app.grokgpt.com/" className="blue-grad md:px-10 px-5 md:py-3 py-3 rounded-lg cont link-btn turner" >
              <p class="turn-child text-sm md:text-lg">Launch App</p>
              </Link>
              <Link href="https://app.uniswap.org/#/swap?chainName=ethereum&amp;outputCurrency=0xc3168B1B4807684A2b0650C4b292f901bF27173A" className="border-grad md:px-10 px-5 md:py-3 py-3 rounded-lg cont link-btn text-sm md:text-lg turner flex-center gap-3">
              <p class="turn-child text-sm md:text-lg">Buy $GROKGPT</p>
              </Link>
            </div>
            <div className="space-y-2">
              <Link href="https://doc.grokgpt.com/" className="border-grad md:px-10 px-5 md:py-3 py-3 rounded-lg cont link-btn text-sm md:text-lg turner">
              <p className="turn-child text-sm md:text-lg">Document</p>
              </Link>
              <Link href="https://t.me/texilix" className="blue-grad md:px-10 px-5 md:py-3 py-3 rounded-lg cont link-btn turner flex-center gap-3">
              <p class="turn-child text-sm md:text-lg">Telegram</p>
              </Link>
            </div>
          </div>
        </div>
        {/* <Image src={AIImage} alt="hero animation" className="gif w-[85%] max-w-[450px] my-2 md:my-0 md:mt-0 object-contain" /> */}
      </div>
    </section>
  );
}
