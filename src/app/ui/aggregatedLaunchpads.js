import Link from "next/link";
import Image from "next/image";
import chain from "../../assets/chain.png";
import chatgpt from "../../assets/chatgpt.png";
import grok from "../../assets/grok.png";
import vertex from "../../assets/vertexai.png";
import dataroboto from "../../assets/datarobot.png";
import ibmwatson from "../../assets/ibmwatson.png";
import aibg from "../../assets/aibg.png";
import depthBackground from "../../assets/depth.png";

export default function AggregatedLaunchpads() {
  return (
    <section className="mt-10 mb-20 ">
      <h1 className="cont text-[2.1em] md:text-4xl blue-text text-center">AI Solutions</h1>
      <div className="flex-center flex-col xl:flex-row gap-5 md:gap-20 mt-10 max-w-[1200px] w-[95%] mx-auto">
        <div className="flex-center md:gap-20">
          <LaunchpadItem image={chatgpt} title="ChatGPT" />
          <LaunchpadItem image={ibmwatson} title="IBM Watson" />
          <LaunchpadItem image={chain} title="LangChain" />
        </div>
        <div className="flex-center md:gap-20">
          <LaunchpadItem image={grok} title="Grok" isNew />
          <LaunchpadItem image={vertex} title="Vertex" isNew />
          <LaunchpadItem image={dataroboto} title="DataRobot" isNew />
        </div>
      </div>
      <div className="flex-center flex-col mt-20 gap-5">
        <p className="nunito text-lg mx-5 md:text-xl text-center opacity-80 text-white">
          Integrate with Blockchain experience <br /> for enhanced performance and expand your reach.
        </p>
        <Link href="https://www.grokgpt.com/integrate.html"  className="blue-grad px-10 py-5 rounded-lg cont link-btn text-lg turner">
            <p className="turn-child text-xl">Get Started</p>
        
        </Link>
      </div>
    </section>
  );
}

function LaunchpadItem({ image, title, isNew = false }) {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="flex-center flex-col gap-3 m-2 w-[100px] md:w-[50%] sm:w-auto aos-init">
      <Image src={image} alt={title} className="h-[90px] md:h-[130px] object-contain" />
      <p className="cont text-center text-xs md:text-sm text-gray-200 uppercase">{title}</p>
      {isNew && <p className="absolute top-0 right-0 text-[8px] md:text-sm bg-blue text-black p-1 rounded-full">NEW</p>}
    </div>
  );
}
