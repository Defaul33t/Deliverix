import React from "react";

const Information = () => {
  return (
    <div className="lg:w-1/2">
      <div className="lg:ml-60 flex flex-col gap-10 text-xl font-semibold">
        <address className="text-main-orange">
          DeliveriX <br />
          Púpavová 27/A <br />
          841 04 Bratislava
        </address>
        <p className="text-main-orange">
          Telefón: 0948 484 900 <br />
          mail: deliverix@gmail.com
        </p>
        <p className="text-main-orange">
          Prevádzkovateľ: <br />
          TriX Production s.r.o. <br />
          Silvánska 6, Bratislava 84104 <br />
          IČO: 36803197
        </p>
      </div>
    </div>
  );
};

export default Information;
