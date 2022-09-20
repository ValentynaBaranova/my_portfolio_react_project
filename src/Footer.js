import React from "react";
import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaViber,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="social_links row">
        <h3>You can contact me 😉</h3>
        <a
          href="mailto:valentynabaranova5@gmail.com"
          title="Send me email"
          target="_blank"
          rel="noreferrer"
          className="col-1"
        >
          <FaRegEnvelope />
        </a>
        <a
          href="https://tinyurl.com/2p8z86u6"
          title="You can contact with Baranova in Viber"
          target="_blank"
          rel="noreferrer"
          className="col-1"
        >
          <FaViber />
        </a>
        <a
          href="https://t.me/ValentynaBaranova"
          title="You can contact with Baranova in Telegram"
          target="_blank"
          rel="noreferrer"
          className="col-1"
        >
          <FaTelegram />
        </a>
        <a
          href="https://www.linkedin.com/in/valentyna-baranova-5a9b74245/"
          target="_blank"
          rel="noreferrer"
          title="My profile on Linkedin"
          className="col-1"
        >
          <FaLinkedin size="25" />
        </a>
        <a
          href="https://www.github.com/baranova"
          target="_blank"
          rel="noreferrer"
          title="My profile on GitHab"
          className="col-1"
        >
          <FaGithub size="25" />
        </a>
      </div>
      <p className="text-center mt-5">
        This project was coded{" "}
        <a
          href="https://github.com/ValentynaBaranova/my_portfolio_react_project"
          target="_blank"
          rel="noreferrer"
        >
          Valentyna Baranova
        </a>
      </p>
    </footer>
  );
}
