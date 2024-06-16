import { Hero, HeroIndicator, HeroSubtitle, HeroTitle } from "./ui/hero";

export const HeroSection = () => (
  <Hero>
    <HeroIndicator>
        The Linear Orbit
    </HeroIndicator>
    <HeroTitle className="">
        Meet our customers
    </HeroTitle>
    <HeroSubtitle className="">
    Linear powers thousands of high-impact product 
      <br className="hidden md:block" /> teams. From next-gen startups who reach for the stars 
      <br className="hidden md:block"/>to established greats who change the world.
    </HeroSubtitle>
  </Hero>
);
