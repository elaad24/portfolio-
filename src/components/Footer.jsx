import React from "react";
import Git from "../icons/github2.png";
import Linkedin from "../icons/linkedin.png";
import ResomePic from "../icons/resomepic.png";
import Whatsup from "../icons/whatsup.png";
import Resome from "../Elad_Dadon_cv_v2.2.1.pdf";
const Footer = () => {
  return (
    <div className="  pt-4 mb-5">
      <div className="  navbar-bg-bottom"></div>
      <div className="navCategorys  d-flex flex-column text-center pt-3">
        <h1 className="title">Elad Dadon</h1>
        <a className="navAncors nav-titles" href="mailto:elaad2408@gmail.com">
          Elaad2408@gmail.com
        </a>
        <div className="d-flex justify-content-center gap-3 mt-2 dark_mode ">
          <a className="" href="https://github.com/elaad24" target="_blank">
            <img className="bottom-nav-icons " src={Git} />
          </a>
          <a
            href="https://www.linkedin.com/in/elad-dadon-62772a1b3/"
            target="_blank"
          >
            <img className="bottom-nav-icons" src={Linkedin} />
          </a>
          <a href={Resome} download>
            <img className="bottom-nav-icons" src={ResomePic} />
          </a>

          <a href="https://wa.me/+972524893127?text=Hey%2C+%0D%0AI+have+been+in+your+site+%2C+%0D%0Avery+nice+site+-+good+job+.+%0D%0A%F0%9F%98%8A">
            <img className="bottom-nav-icons" src={Whatsup} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
