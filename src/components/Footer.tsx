import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-content container">
        <p>Thananont Chevaphatrakul &copy; 2021</p>
        <div className="contact">
          <h3>My Contacts</h3>
          <i className="fas fa-map-marker-alt"></i>
          <p>94 Sukhumvit 64</p>
          <p>Bangkok, 10260, Thailand</p>
          <i className="fas fa-phone-square"></i>
          <p>+66-61-568-2281</p>
          <i className="fas fa-envelope"></i>
          <p>jomjom27@gmail.com</p>
        </div>
        <div className="social">
          <h3>My Contacts</h3>
          <br />
          <a
            href="https://www.facebook.com/profile.php?id=1606222588"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://github.com/Thananont"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/thananont27/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
