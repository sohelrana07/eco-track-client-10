import React from "react";
import { GiPadlock } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

const Terms = () => {
  return (
    <div className="bg-white rounded py-16 px-8">
      {/* header section */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary font-salsa mb-3">
          Terms of Use Overview
        </h1>
        <p className="text-sm md:text-base text-accent text-center md:text-justify max-w-3xl">
          EcoTrack's Terms of Use outline rules for maintaining a safe,
          productive, and fair environment for all members. Explore key areas of
          responsibility, platform usage, and community engagement below.
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">
        {/* Account & Security */}
        <label className="tab">
          <input type="radio" name="eco_tabs" defaultChecked />
          <GiPadlock size={20} />
          <span className="font-medium ms-1.5">Account & Security</span>
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-accent text-justify">
            Users are responsible for providing accurate account information and
            maintaining the security of their login credentials. Any activity
            under your account is your responsibility.
          </p>
        </div>

        {/* Content & Usage */}
        <label className="tab">
          <input type="radio" name="eco_tabs" />
          <IoDocumentTextOutline size={20} />
          <span className="font-medium ms-1.5">Content & Usage</span>
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-accent text-justify">
            EcoTrack content, including challenges, tips, and media, belongs to
            the platform or contributors. Users must not redistribute or use
            content commercially without authorization. The platform is intended
            for eco-friendly actions only. Activities that harm system integrity
            or community experience are prohibited.
          </p>
        </div>

        {/* Community & Engagement */}
        <label className="tab">
          <input type="radio" name="eco_tabs" />
          <LuUsers size={20} />
          <span className="font-medium ms-1.5">Community & Engagement</span>
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-accent text-justify">
            Participation in challenges, sharing tips, and attending events must
            follow platform rules. EcoTrack encourages respectful collaboration
            and recognition of eco-friendly actions. The platform provides
            measurable insights and statistics, but users are responsible for
            their own participation outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
