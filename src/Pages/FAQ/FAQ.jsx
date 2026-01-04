import React, { useState } from "react";
import { IoHelpCircleOutline } from "react-icons/io5";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="bg-white rounded py-16 px-8">
      {/* header section */}
      <div className="text-center md:text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary font-salsa mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-sm md:text-base text-accent text-center md:text-justify max-w-2xl">
          Find answers to common questions about EcoTrack, challenges, tips, and
          community engagement.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {/* FAQ 1 */}
        <div
          className="border border-base-300 rounded-lg p-4 cursor-pointer"
          onClick={() => setOpen(open === 1 ? null : 1)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-accent font-medium">
              How do I join a challenge?
            </h3>
            <IoHelpCircleOutline
              className={`text-primary transition-transform duration-300 ${
                open === 1 ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
          {open === 1 && (
            <p className="text-accent text-justify mt-3">
              Log in to EcoTrack, browse challenges, and click 'Join Challenge'.
              Your progress will be tracked automatically.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div
          className="border border-base-300 rounded-lg p-4 cursor-pointer"
          onClick={() => setOpen(open === 2 ? null : 2)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-accent font-medium">
              Can I track my environmental impact?
            </h3>
            <IoHelpCircleOutline
              className={`text-primary transition-transform duration-300 ${
                open === 2 ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
          {open === 2 && (
            <p className="text-accent text-justify mt-3">
              Yes! EcoTrack shows metrics like CO₂ saved, plastic reduced, and
              challenge progress for your personal and community impact.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div
          className="border border-base-300 rounded-lg p-4 cursor-pointer"
          onClick={() => setOpen(open === 3 ? null : 3)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-accent font-medium">How do I share tips?</h3>
            <IoHelpCircleOutline
              className={`text-primary transition-transform duration-300 ${
                open === 3 ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
          {open === 3 && (
            <p className="text-accent text-justify mt-3">
              Go to 'Eco Tips' and submit your tip. Make sure it follows
              sustainability and community guidelines.
            </p>
          )}
        </div>

        {/* FAQ 4 */}
        <div
          className="border border-base-300 rounded-lg p-4 cursor-pointer"
          onClick={() => setOpen(open === 4 ? null : 4)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-accent font-medium">
              Who can see my activity?
            </h3>
            <IoHelpCircleOutline
              className={`text-primary transition-transform duration-300 ${
                open === 4 ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
          {open === 4 && (
            <p className="text-accent text-justify mt-3">
              Challenge progress and tips are visible to the community. Your
              personal account info stays private.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
