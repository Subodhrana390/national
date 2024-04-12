import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import MenuBar from "../assets/bar.svg";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full bg-[rgb(82,30,133)] h-35 flex flex-col items-center ${
        sticky ? "sticky top-0 z-[100]" : ""
      }`}
    >
      <div className="container relative mx-auto px-5 py-2 flex items-center justify-between gap-6">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-16 h-16" />

          <div className="ml-2">
            <a href="/" className="text-xl md:text-2xl font-semibold">
              National Service Scheme
            </a>
            <p className="text-sm">
              <a
                href="https://gndec.ac.in/"
                target="_blank"
                className=" text-[10px] md:text-[14px] text-white"
                rel="noreferrer"
              >
                Guru Nanak Dev Engineering College, Ludhiana
              </a>
            </p>
          </div>
          <div
            className="block md:hidden absolute top-8 right-8 z-10"
            onClick={() => setIsOpened(!isOpened)}
          >
            <img src={MenuBar} alt="" width={20} height={20} />
          </div>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li className="nav-item">
            <a
              href="/"
              className={`nav-a ${
                window.location.pathname === "/" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/teams"
              className={`nav-a ${
                window.location.pathname === "/teams" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Team
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/events"
              className={`nav-a ${
                window.location.pathname === "/events" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Event
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/contact"
              className={`nav-a ${
                window.location.pathname === "/contact" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/join"
              className={`nav-a ${
                window.location.pathname === "/join" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Join
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <ul
        className={`${
          !isOpened ? "h-0" : "h-10"
        } md:hidden flex-grow items-center justify-end transition-all duration-300 ease-in-out `}
      >
        <ul
          className={`${
            isOpened ? "block" : "hidden"
          }  transition-all duration-300 ease-in-out flex space-x-4`}
        >
          <li className="nav-item">
            <a
              href="/"
              className={`nav-a ${
                window.location.pathname === "/" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/teams"
              className={`nav-a ${
                window.location.pathname === "/teams" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Team
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/events"
              className={`nav-a ${
                window.location.pathname === "/events" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Event
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/contact"
              className={`nav-a ${
                window.location.pathname === "/contact" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/join"
              className={`nav-a ${
                window.location.pathname === "/join" ? "active" : ""
              }`}
              onClick={() => {
                setIsOpened(!setIsOpened);
              }}
            >
              Join
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Header;
