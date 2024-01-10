import Link from "next/link";
import Image from "next/image";
import renderImage from "../../assets/Render.png";
import pinksaleImage from "../../assets/PINKSALE.png";
import solidproofImage from "../../assets/Solid proof.png";
import dextoolsImage from "../../assets/Dextools.png";
import coingeckoImage from "../../assets/Coingecko.png";
import dexviewImage from "../../assets/Dexview.png";
import boldImage from "../../assets/Bold.png";
import etherscanImage from "../../assets/Etherscan.png";
import uniswapImage from "../../assets/Uniswap.png";
import cmcImage from "../../assets/CMC.png";

export default function Partners() {
  return (
    <section id="partners" className="md:mt-40 md:py-20 py-10 pb-5 backers" style={{ minHeight: "auto" }}>
      <h1 className="cont text-[1.5em] md:text-4xl blue-text text-center flex-center flex-col md:flex-row">
        Partners &amp; Backers
      </h1>
      <p className="monts text-sm md:text-md text-center mx-4 text-gray-400">
        At GrokGPT, we are honored to be supported by a distinguished
        <br />
        network of collaborators and benefactors, each contributing 
        <br />
       to the advancement of our pioneering initiatives
       <br />
       in AI and blockchain technology.
      </p>
      <div className="w-[90%] mx-auto">
        <div className="flex-center xl:flex-col w-full mt-10">
          <PartnerRow>
            <PartnerLink href="https://render.com/" image={renderImage} alt="Render" />
            <PartnerLink href="https://www.pinksale.finance/launchpad/0x622a3771C4693FBDEc9fab61378e16E8b9BF0b87?chain=ETH" image={pinksaleImage} alt="Pinksale" />
            <PartnerLink href="https://github.com/solidproof/projects/blob/main/2023/GrokGPT/SmartContract_Audit_Solidproof_Texilix.pdf" image={solidproofImage} alt="Solidproof" />
            <PartnerLink href="https://www.dextools.io/app/en/ether/pair-explorer/0x60a5bf044a6dddbda663b79e7a1ea16f6b368e05" image={dextoolsImage} alt="DexTools" />
            <PartnerLink href="#" image={coingeckoImage} alt="Bold" />
          </PartnerRow>
          <PartnerRow>
            <PartnerLink href="https://www.dexview.com/eth/0xc3168B1B4807684A2b0650C4b292f901bF27173A" image={dexviewImage} alt="Dexview" />
            <PartnerLink href="https://x.com/texilix/status/1687738700187217920?s=46&amp;t=RIOxep13vpVd7m10Eg7Upw" image={boldImage} alt="Coingecko" />
            <PartnerLink href="https://etherscan.io/token/0xc3168b1b4807684a2b0650c4b292f901bf27173a" image={etherscanImage} alt="Trust Wallet" />
            <PartnerLink href="https://app.uniswap.org/#/swap?chainName=ethereum&amp;outputCurrency=0xc3168B1B4807684A2b0650C4b292f901bF27173A" image={uniswapImage} alt="Uniswap" />
            <PartnerLink href="#" image={cmcImage} alt="CMC" />
          </PartnerRow>
        </div>
      </div>
    </section>
  );
}

function PartnerRow({ children }) {
  return <div className="flex items-center justify-start flex-col xl:flex-row">{children}</div>;
}

function PartnerLink({ href, image, alt }) {
  return (
    <Link href={href}  className="w-[70%] max-w-[200px] opacity-70 m-2 md:m-4 object-contain cursor-pointer">
        <Image src={image} alt={alt} className="aos-init" data-aos="fade-up" data-aos-duration="1500" />
     
    </Link>
  );
}
