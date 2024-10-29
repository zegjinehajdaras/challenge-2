import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FooterList from "./FooterList";
const FooterSection = () => {
  return (
    <div className="">
      <div className="row footer ">
        <div className="col-sm-3 px-3">
          <h2>Social Share</h2>
          <div className="social-icons ">
            <span className="font-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="font-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="font-icon">
              {" "}
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className="font-icon">
              {" "}
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </div>
        </div>
        <div className="col-sm-3">
          <FooterList header="Event Info" list={["Enter Now","Event Info","Course Maps","Race Pack","Results","Faqs","Am I Registered" ]}/>
        </div>
        <div className="col-sm-3">
          <FooterList header="Registration" list={["Volunteers","Gallery","Press","Results","Privacy Policy","Service Plus","Contact"]} />
        </div>
        <div className="col-sm-3">
          <FooterList header="Schedule"list={["Gllery","About","Videos","Results","FAQs","Results","Volunteers"]} />
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
