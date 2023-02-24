import React from "react";
import { LeftSection, RightSection } from "../";

export const Body = () => {
  return (
    <div className="body-section grid grid-cols-[50%_50%]">
      <LeftSection />
      <RightSection />
    </div>
  );
};
