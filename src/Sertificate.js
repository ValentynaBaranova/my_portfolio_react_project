import React from "react";
import s1 from "./img/s1.png";
import s2 from "./img/s2.png";
import s3 from "./img/s3.png";
import s4 from "./img/s4.jpg";

export default function Sertificate() {
  return (
    <div>
      <h3>My training certificates 🏆</h3>
      <div className="slider">
        <div className="l_block">
          <a
            href="https://www.shecodes.io/certificates/d22fe54dfca830b44e3bfea2e9cafe89"
            target="_blank"
            title="Click if  see more"
            rel="noreferrer"
          >
            <img src={s1} alt="Responsive" className="img-fluid" />
          </a>
          <a
            href="https://www.shecodes.io/certificates/9bd2ca4c155c196d59b75a76f909d097"
            target="_blank"
            title="Click if you want more"
            rel="noreferrer"
          >
            <img src={s2} alt="Front_end" className="img-fluid" />
          </a>
        </div>
        <div className="r_block">
          <a
            href="https://www.shecodes.io/certificates/bf9273a55b13e3f2e055ca527dae84f9"
            target="_blank"
            title="Click if you want more"
            rel="noreferrer"
          >
            <img src={s3} alt="React" className="img-fluid" />
          </a>
          <a
            href={s4}
            target="_blank"
            title="Click if you want more"
            rel="noreferrer"
          >
            <img src={s4} alt="Intermediate" className="img-fluid" />
          </a>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
