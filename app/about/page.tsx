import { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import Story from "@/components/Story";
import MissionVisionValues from "@/components/MissionVisionValues";
import Leadership from "@/components/Leadership";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "About Us - Infralyft LLC",
  description: "Learn about Infralyft LLC's mission, vision, values, and leadership team. Pioneering the future of technology.",
  openGraph: {
    title: "About Us - Infralyft LLC",
    description: "Learn about Infralyft LLC's mission, vision, values, and leadership team.",
  },
};

export default function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <MissionVisionValues />
      <Leadership />
      <Team />
    </>
  );
}
