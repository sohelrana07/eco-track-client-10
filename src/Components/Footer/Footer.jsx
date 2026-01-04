import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full bg-secondary">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-12 pb-5 text-neutral-content">
        <footer className="footer sm:footer-horizontal">
          <nav>
            <div className="flex justify-center items-center gap-1">
              <a className="">
                <img
                  src="/logo.png"
                  alt=""
                  className="w-10 md:w-12 rounded-full"
                />
              </a>
              <a className="text-xl md:text-3xl">
                <span className=" font-bold">ECO</span>{" "}
                <span className="font-salsa text-primary space-x-2 font-medium">
                  Track
                </span>
              </a>
            </div>
            <p className="font-semibold text-lg w-xs lg:w-fit">
              <span className="lg:block">
                EcoTrack — Sustainable Living Community_{" "}
              </span>

              <span>
                Empowering eco-conscious people to live greener lives.
              </span>
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Explore</h6>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/challenges" className="link link-hover">
              Challenges
            </Link>
            <Link to="/events" className="link link-hover">
              Events
            </Link>
            <Link to="/tips" className="link link-hover">
              Eco Tips
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Community</h6>
            <Link to="/about" className="link link-hover">
              About EcoTrack
            </Link>
            <Link to="/terms" className="link link-hover">
              Terms of Use
            </Link>
            <Link to="/privacy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link to="/faq" className="link link-hover">
              FAQ
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Contact info</h6>
            <p className="flex items-center gap-2 text-sm">
              <FaEnvelope /> support@ecotrack.com
            </p>

            <p className="flex items-center gap-2 text-sm">
              <FaPhoneAlt /> +880 1706154199
            </p>

            <p className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </p>
          </nav>
        </footer>
        {/* copyright */}
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-around gap-3 mt-8 md:mt-20 border-t border-gray-500 pt-3">
          <p className="text-sm">© 2025 EcoTrack. All rights reserved.</p>

          {/* social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/itzmehedii12"
              target="_blank"
              className="p-2 rounded-md hover:bg-white/10"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.instagram.com/itzmehedi12"
              target="_blank"
              className="p-2 rounded-md hover:bg-white/10"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mdsohelrana07"
              target="_blank"
              className="p-2 rounded-md hover:bg-white/10"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://twitter.com/itzmehedi_12"
              target="_blank"
              className="p-2 rounded-md hover:bg-white/10"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
