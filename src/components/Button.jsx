import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    <a href='https://charming-sunburst-e24314.netlify.app/'>Get Started</a>
  </button>
);

export default Button;