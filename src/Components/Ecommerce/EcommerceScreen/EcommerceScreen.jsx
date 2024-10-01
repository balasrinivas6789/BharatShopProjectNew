import React from "react";
import EcommerceHeader from "../EcommerceHeader/EcommerceHeader";
import { Outlet } from "react-router-dom";

const EcommerceScreen = () => {
  return (
    <div>
      <EcommerceHeader />
      <Outlet />
    </div>
  );
};

export default EcommerceScreen;
