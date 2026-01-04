import React from "react";
import { GiPadlock } from "react-icons/gi";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white rounded py-16 px-8">
      {/* header section */}
      <div className="text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary font-salsa mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-accent text-justify max-w-3xl">
          At EcoTrack, protecting your privacy is a top priority. Explore key
          details about how we collect, use, and safeguard your personal
          information on our platform.
        </p>
      </div>

      {/* Tab */}
      <div className="tabs tabs-lift">
        <label className="tab">
          <input type="radio" name="privacy_tab" defaultChecked />
          <GiPadlock size={20} />
          <span className="font-medium ms-1.5">Privacy Overview</span>
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <section className="space-y-4">
            <h2 className="font-semibold text-accent">
              1. Information Collection
            </h2>
            <p className="text-accent text-justify">
              We collect only necessary information such as account details,
              participation in challenges, and activity data. No personal
              information is shared without your consent.
            </p>

            <h2 className="font-semibold text-accent">2. Data Usage</h2>
            <p className="text-accent text-justify">
              Your data helps personalize your experience, track challenge
              progress, and provide meaningful community insights.
            </p>

            <h2 className="font-semibold text-accent">
              3. Data Sharing & Security
            </h2>
            <p className="text-accent text-justify">
              EcoTrack does not sell, trade, or rent personal information. We
              implement strong measures to protect your data from unauthorized
              access or misuse.
            </p>

            <h2 className="font-semibold text-accent">4. Cookies & Tracking</h2>
            <p className="text-accent text-justify">
              Cookies and similar technologies enhance user experience and
              platform performance. You can manage cookies in your browser
              settings.
            </p>

            <h2 className="font-semibold text-accent">5. User Rights</h2>
            <p className="text-accent text-justify">
              You can access, correct, or delete your personal information by
              contacting
              <span className="font-semibold"> support@ecotrack.com</span>.
            </p>

            <h2 className="font-semibold text-accent">6. Updates to Policy</h2>
            <p className="text-accent text-justify">
              Privacy Policy updates may occur occasionally. Continued use of
              EcoTrack indicates acceptance of any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
