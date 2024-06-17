import Companies from "@/components/companies";
import { Container } from "@/components/container";
import GlareCards from "@/components/glare-cards";
import { HeroSection } from "@/components/hero-section";
import { Stars } from "@/components/icons/stars";
import YouBelong from "@/components/youbelong";
import classNames from "classnames";


export default function Home() {
  return (
    <>
    <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
    <Container>
      <HeroSection/>
    </Container>
    <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-28.8rem] lg:my-[-18.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.2]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[100%] lg:after:h-[500%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
      <Stars />
      </div>
     <Container className="pt-[6.4rem]">
        <GlareCards />
      </Container>
      <div
          className={classNames(
            "mask-radial-faded pointer-events-none relative z-[-1] my-[-10.8rem] lg:my-[-10.8rem] h-[60rem] overflow-hidden",
            "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.2]",
            "after:absolute after:top-1/2 after:-left-1/2 after:h-[100%] lg:after:h-[500%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background",
            "transform rotate-180"
          )}
        >
        <Stars />
       </div>
       <Container>
        <Companies/>
       </Container>
       <Container className="py-[200px] md:pt-[200px] bg-you-belong bg-cover bg-center opa">
          <YouBelong />
      </Container>
    </div>
      </>
  );
}
