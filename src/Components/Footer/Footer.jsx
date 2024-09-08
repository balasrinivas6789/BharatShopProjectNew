import React from "react";
import { footerData } from "../../data";

const Footer = () => {
  return (
    <div className="flex items-center gap-[52px] self-stretch mb-3 mt-[30px] mx-[120px]">
      {footerData.map((item) => {
        return (
          <div>
            <img src={item.imageUrl} alt="bharatShopLogo" />
          </div>
        );
      })}
    </div>
  );
};

export default Footer;