import React from "react";
import LiveStatistics from "../LiveStatistics/LiveStatistics";
import ActiveChallenges from "../ActiveChallenges/ActiveChallenges";
import WhyGoGreen from "../WhyGoGreen/WhyGoGreen";
import HowItWorks from "../HowItWorks/HowItWorks";
import RecentTips from "../RecentTips/RecentTips";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import HeroBanner from "../HeroBanner/HeroBanner";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <LiveStatistics></LiveStatistics>
      <ActiveChallenges></ActiveChallenges>
      <RecentTips></RecentTips>
      <UpcomingEvents></UpcomingEvents>
      <WhyGoGreen></WhyGoGreen>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
