import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import './Contacts.css'
const Contacts = () => {
  return (
    <div className="Contacts">
      <div className="ContactItem phone">
        <h1 className="ContactsH1">
          <strong>
            <FaPhone /> Number
          </strong>
        </h1>
        <p>
          <FaPhone />
          0502332643
        </p>
      </div>
      <div className="ContactItem instagram">
        <h1>
          <strong>
            <FaInstagram /> Instagram
          </strong>
        </h1>
        <p>
          <FaInstagram /> @ronn_i69
        </p>
      </div>
      <div className="ContactItem tiktok">
        <h1>
          <strong>
            <FaTiktok /> Tik Tok
          </strong>
        </h1>
        <p>
          <FaTiktok /> @himia07.8
        </p>
      </div>
      <div className="ContactItem email">
        <h1>
          <strong>
            <MdEmail /> Email
          </strong>
        </h1>
        <p>
          <MdEmail /> nusupzhanovaamina79@gmail.com
        </p>
      </div>
      <div className="ContactItem github">
        <h1>
          <strong>
            <FaGithub /> GitHub
          </strong>
        </h1>
        <p>
          <FaGithub /> @AminaCrush
        </p>
      </div>
    </div>
  );
};

export default Contacts;
