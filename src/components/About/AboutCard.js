import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Ankit Borgohain </span>
            from <span className="purple"> Assam, India.</span>
            <br />I'm a 2020 passout with Bachelors degree in Software Development, pursued from at <a>Kazirana University Jorhat</a>.
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{fontSize: 25  ,marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Clean code always looks like it was written by someone who cares."{" "}
          </p>
          <footer className="blockquote-footer">Robert C. Martin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
