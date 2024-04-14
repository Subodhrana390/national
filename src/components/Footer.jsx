import React from "react";

const Footer = () => {
  return (
    <div className="bg-[rgb(82,30,133)] py-4">
      <div className="grid grid-cols-1 md:grid-cols-5 py-3 px-10 gap-10">
        {/* Map */}
        <div className="col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.989921948153!2d75.8593041756761!3d30.858957174523663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83c5bc6cc531%3A0xbe4a6fe42bac9483!2sNational%20Service%20Scheme!5e0!3m2!1sen!2sin!4v1699732694468!5m2!1sen!2sin"
            loading="lazy"
            title="nss"
            height="200"
            className="w-full"
          ></iframe>
        </div>
        {/* Contact info */}
        <div className="contact_info col-span-2">
          <div className="footer_title">
            <h6>CONTACT INFO</h6>
          </div>
          <div className="info_data">
            <div className="address">
              <i className="fa-solid fa-location-dot"></i>
              <p>NSS Office, near workshop, GNDEC Ludhiana, 141006</p>
            </div>
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              <p>nss.gndec56@gmail.com</p>
            </div>
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              <p>+91 81466 16043</p>
            </div>
          </div>
        </div>
        {/* Quick Links */}
        <div className="col-span-1">
          <div>
            <h1 className="text-xl font-bold text-white">Quick Links</h1>
            <ul>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/events">Event</a>
              </li>
              <li>
                <a href="/teams">Team</a>
              </li>
            </ul>
          </div>
          {/* SocialLinks */}
          <div className="social col-span-1">
            <div className="footer_title">
              <h6>CONNECT WITH US</h6>
            </div>
            <div className="links">
              <a
                href="https://www.instagram.com/gndecnss/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyrights */}
      <div className="w-full text-center">
        <p>© NSS | GNDEC Ludhiana. All Rights Reserved.</p>
        <p>
          Designed and Developed by ~{" "}
          <a
            href="https://www.linkedin.com/in/techscript-roshan/"
            className="active"
            target="_blank"
            rel="noreferrer"
          >
            Roshan Kumar
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
