import React from "react";
import { GiRecycle } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
const About = () => {
  return (
    <div className="bg-white rounded py-16 px-8">
      {/* header section */}
      <div className="text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary font-salsa mb-3">
          About EcoTrack
        </h1>
        <p className="text-sm md:text-base text-accent text-justify max-w-3xl">
          EcoTrack is a vibrant community platform for eco-conscious
          individuals. Our mission is to empower people to live sustainably,
          track their environmental impact, and participate in measurable,
          community-driven challenges that make a real difference.
        </p>
      </div>

      {/* tabs */}
      <div className="tabs tabs-lift">
        {/* Sustainability Story */}
        <label className="tab">
          <input type="radio" name="eco_tabs" defaultChecked />
          <GiRecycle size={20} />
          <span className="font-medium ms-1.5">Our Sustainability Story</span>
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-accent text-justify">
            EcoTrack started with a simple idea: small, consistent actions can
            create measurable environmental change. Users can discover
            sustainability challenges, share practical tips, and monitor their
            personal impact over time.
          </p>
          <p className="text-accent text-justify mt-4">
            From reducing single-use plastics to conserving energy at home, our
            community has grown into a hub of eco-conscious individuals,
            attending events, joining challenges, and celebrating shared
            milestones.
          </p>
        </div>

        {/* Community Impact */}
        <label className="tab">
          <input type="radio" name="eco_tabs" />
          <IoStatsChart size={20} />
          <span className="font-medium ms-1.5">Community Impact</span>
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-accent text-justify">
            Our mission is to turn intentions into measurable actions. EcoTrack
            allows members to join challenges, track their progress, and see
            real statistics such as total CO₂ saved, kilograms of plastic
            reduced, and collective community achievements.
          </p>
          <p className="text-accent text-justify mt-4">
            By visualizing impact, we motivate individuals to stay engaged and
            contribute to a greener planet, one challenge at a time.
          </p>
        </div>

        {/* Community Engagement */}
        <label className="tab">
          <input type="radio" name="eco_tabs" />
          <LuUsers size={20} />
          <span className="font-medium ms-1.5">Community Engagement</span>
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-accent text-justify">
            EcoTrack thrives on active participation. Members can share tips,
            join local events, connect with other eco-advocates, and celebrate
            achievements together. The platform fosters collaboration, support,
            and recognition for eco-friendly actions.
          </p>
          <p className="text-accent text-justify mt-4">
            Whether it's completing a challenge, volunteering at a cleanup, or
            posting a tip, every contribution strengthens the community and
            amplifies its collective impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
