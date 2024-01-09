import Link from "next/link";
import Image from "next/image";
import advancedFilteringAndSorting from "../../assets/Advanced Filtering and Sorting.png";
import dueDiligenceSupport from "../../assets/Due Diligence Support.png";
import investorDashboard from "../../assets/Investor Dashboard.png";
import multiPresaleLaunchpad from "../../assets/Multi-Presale Launchpad.png";
import realTimeInsightsAndAnalytics from "../../assets/Real-Time Insights and Analytics.png";
import starsBackground from "../../assets/stars.png";
import depthBackground from "../../assets/depth.png";

export default function FeaturesSection() {

    function FeatureCard({ image, title, link }) {
        return (
          <div className="w-[300px] p-5 rounded-lg turner black-bg aos-init" data-aos="fade-up" data-aos-duration="1500">
            <div className="flex-center flex-col text-center gap-5 turn-child">
              <Image src={image} alt="feature" className="h-[100px] object-contain" />
              <p className="cont">{title}</p>
              <Link href={link}  className="blue-grad py-2 w-full rounded-lg cont text-sm"> Learn more 
              </Link>
            </div>
          </div>
        );
      }

  return (
    <section className="mt-0 mb-10 relative">
      <Image src={depthBackground} alt="background" className="backgroundhero" />
      <div className="flex-center flex-col text-center gap-5 m-5">
        <h1 className="cont text-2xl md:text-4xl blue-text">Key Features and <br/> Functionalities</h1>
        <p className="monts text-sm md:text-md text-center">
          Step into the future of DeFi trading with GrokGPT. Gain access
          to a wide range of cutting-edge tools <br /> and resources designed to equip you for success in the
          decentralized finance landscape.
        </p>
      </div>
      <div className="w-[95%] mx-auto flex-center mt-10">
        <div className="flex-center flex-col flex-wrap gap-5">
          {/* FIRST LINE */}
          <div className="flex-center gap-5 md:gap-14 flex-wrap">
            <FeatureCard
              image={advancedFilteringAndSorting}
              title="Advanced Filtering and Sorting"
              link="https://doc.grokgpt.com/key-features-and-functionalities/advanced-filtering-and-sorting"
            />
            <FeatureCard
              image={dueDiligenceSupport}
              title="Due Diligence Support"
              link="https://doc.grokgpt.com/key-features-and-functionalities/due-diligence-support"
            />
            <FeatureCard
              image={investorDashboard}
              title="Investor Dashboard"
              link="https://doc.grokgpt.com/key-features-and-functionalities/investor-dashboard"
            />
          </div>
          {/* SECOND LINE */}
          <div className="flex-center gap-5 md:gap-14 flex-wrap">
            <FeatureCard
              image={multiPresaleLaunchpad}
              title="AI AMM"
              link="https://doc.grokgpt.com/key-features-and-functionalities/ai-amm"
            />
            <FeatureCard
              image={realTimeInsightsAndAnalytics}
              title="Real-Time Insights and Analytics"
              link="https://doc.grokgpt.com/key-features-and-functionalities/real-time-insights-and-analytics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


