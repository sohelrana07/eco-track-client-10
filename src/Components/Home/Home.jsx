import React from "react";
import LiveStatistics from "../LiveStatistics/LiveStatistics";
import ActiveChallenges from "../ActiveChallenges/ActiveChallenges";
import WhyGoGreen from "../WhyGoGreen/WhyGoGreen";
import HowItWorks from "../HowItWorks/HowItWorks";
import RecentTips from "../RecentTips/RecentTips";

const Home = () => {
  return (
    <div>
      <LiveStatistics></LiveStatistics>
      <ActiveChallenges></ActiveChallenges>
      <RecentTips></RecentTips>
      <WhyGoGreen></WhyGoGreen>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
