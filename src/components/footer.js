import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <h4 className="footer1-headline">
          {" "}
          <BiPhoneCall color="grey" size={16} /> Contact:0411111111
        </h4>
        <address className="footer1-address">
          Address: 204, Random House, Melbourne
        </address>
      </div>
      <div className="footer2">
        copyright <FaRegCopyright color="grey" size={20} /> Shriya 2021
      </div>
      <ul className="footer3">
        <li>Docs</li>
        <li>Blog</li>
        <li>Press</li>
      </ul>
    </div>
  );
};

export default Footer;
