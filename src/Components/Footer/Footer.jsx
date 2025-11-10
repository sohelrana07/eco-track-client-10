import React from "react";
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
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Challenges</a>
            <a className="link link-hover">Events</a>
            <a className="link link-hover">Eco Tips</a>
          </nav>
          <nav>
            <h6 className="footer-title">Community</h6>
            <a className="link link-hover">About EcoTrack</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">My Activities</a>
            <a className="link link-hover">Share Your Tip</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Accessibility</a>
          </nav>
        </footer>
        {/* copyright */}
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-around gap-3 mt-8 md:mt-20 border-t border-gray-500 pt-3">
          <p className="text-sm">© 2025 EcoTrack. All rights reserved.</p>

          {/* social links */}
          <div className="flex items-center gap-4">
            <Link to="" className="p-2 rounded-md hover:bg-white/10">
              <FaFacebookF size={18} />
            </Link>
            <Link to="" className="p-2 rounded-md hover:bg-white/10">
              <FaInstagram size={18} />
            </Link>
            <Link to="" className="p-2 rounded-md hover:bg-white/10">
              <FaLinkedinIn size={18} />
            </Link>
            <Link to="" className="p-2 rounded-md hover:bg-white/10">
              <FaXTwitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
