import React from "react";
import "./index.scss";

const AuthorizeAge = () => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heading">BUD LIGHT</div>
        <div className="sub-heading">
          We Need To Check <span>Your Id</span>
        </div>
        <div className="para">
          You must be of legal drinking age to enter this site
        </div>
        <div className="date-input">
          <input type={"number"} placeholder="MM"></input>
          <input type={"number"} placeholder="DD"></input>
          <input type={"number"} placeholder="YYYY"></input>
          <input type={"submit"}>ENTER</input>
        </div>
        <div>Enjoy Responsibly</div>
        <div className="para2">
          © 2022 A-B, BUD LIGHT ® BEER, ST. LOUIS, MO.By submitting this form,
          you agree to be bound by the Terms of Service and Privacy Policy. Do
          Not Sell My Personal Information
        </div>
      </div>
    </div>
  );
};

export default AuthorizeAge;
