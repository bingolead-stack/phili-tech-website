import { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Infralyft LLC",
  description: "Get in touch with Infralyft LLC. Have a project in mind? We'd love to hear from you.",
  openGraph: {
    title: "Contact Us - Infralyft LLC",
    description: "Get in touch with Infralyft LLC. Have a project in mind? We'd love to hear from you.",
  },
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
