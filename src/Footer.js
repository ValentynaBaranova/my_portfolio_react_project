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
      <div className="social_links">
        <h3>You can contact me in any convenient way 😉</h3>
        <a
          href="mailto:valentynabaranova5@gmail.com"
          title="Send me email"
          target="_blank"
          rel="noreferrer"
        >
          <FaRegEnvelope />
        </a>
        <a
          href="mailto:valentynabaranova5@gmail.com"
          title="You can contact with Baranova in Viber"
          target="_blank"
          rel="noreferrer"
        >
          <FaViber />
        </a>
        <a
          href="https://t.me/ValentynaBaranova"
          title="You can contact with Baranova in Telegram"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram />
        </a>
        <a
          href="https://www.linkedin.com/in/valentyna-baranova-5a9b74245/"
          target="_blank"
          rel="noreferrer"
          title="My profile on Linkedin"
        >
          <FaLinkedin size="25" />
        </a>
        <a
          href="https://www.github.com/baranova"
          target="_blank"
          rel="noreferrer"
          title="My profile on GitHab"
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
