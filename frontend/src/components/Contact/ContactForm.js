import React from "react";

import Wrapper from "../UI/Wrapper";
import Information from "./Information";
import Input from "./Input";

const ContactForm = () => {
  return (
    <Wrapper>
      <div>
        <h3 className="mb-2 text-5xl text-main-orange font-bold">Napíšte nám</h3>
        <p className="max-w-lg text-xl">
          Podeľte sa s nami o svoje názory a pomôžte nám vylepšiť naše služby.
        </p>
      </div>
      <div className="my-10 flex flex-col lg:flex-row justify-between">
        <form className="lg:w-1/2 mb-5">
          <Input subject="Meno" settings={{ type: "text", name: "meno" }} />
          <Input subject="Email" settings={{ type: "email", name: "email" }} />
          <Input
            subject="Vaša správa"
            settings={{ type: "text", name: "sprava" }}
            style={{ minHeight: "250px" }}
          />
          <button className="mt-2 px-10 py-3 bg-main-orange text-white rounded-md">Odoslať</button>
        </form>
        <Information />
      </div>
    </Wrapper>
  );
};

export default ContactForm;
