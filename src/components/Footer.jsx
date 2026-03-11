import React from "react";
import "./Footer.css"; // separiamo lo stile

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 The Luciano Times</p>
      <div className="footer-links">
        <a href="#">Contact Us</a>
        <a href="#">Accessibility</a>
        <a href="#">Work with us</a>
        <a href="#">Advertise</a>
        <a href="#">Brand Studio</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Site Map</a>
      </div>
    </footer>
  );
}