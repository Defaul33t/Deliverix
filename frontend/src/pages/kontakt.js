import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import GoogleMap from "../components/Contact/GoogleMap";

import hero from "../images/kontakt-hero.jpg";

const kontakt = () => {
  return (
    <main>
      <img className="w-full h-60 lg:h-auto object-cover" src={hero} alt="hero image" />
      <section className="px-5 my-16">
        <ContactForm />
      </section>
      <GoogleMap />
    </main>
  );
};

export default kontakt;
