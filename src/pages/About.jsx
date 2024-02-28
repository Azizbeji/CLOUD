import React from "react";

function About() {
  return (
    <div className="About">
      <div className="About-us">
        <h2>Know more obout ussss</h2>
        <p>
          if you whant to know more about us or any questions about our app you
          have all right to contact us
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@GPS Companion.com">
              contact@GPS Companion.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +216 97638683
          </li>
          <li>
            <strong>Address:</strong> jendouba 8100 jendouba
          </li>
        </ul>
        <hr />
        <h2>Connect</h2>
        <p>
          Follow us on social media for the latest updates, travel inspiration,
          and more:
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/">X</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
