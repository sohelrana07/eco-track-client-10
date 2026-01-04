import React from "react";
import LiveStatistics from "../LiveStatistics/LiveStatistics";
import ActiveChallenges from "../ActiveChallenges/ActiveChallenges";
import WhyGoGreen from "../WhyGoGreen/WhyGoGreen";
import HowItWorks from "../HowItWorks/HowItWorks";
import RecentTips from "../RecentTips/RecentTips";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import HeroBanner from "../HeroBanner/HeroBanner";
import Categories from "../Categories/Categories";
import Testimonials from "../Testimonials/Testimonials";
import CallToAction from "../CallToAction/CallToAction";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <LiveStatistics></LiveStatistics>
      <ActiveChallenges></ActiveChallenges>
      <Categories></Categories>
      <WhyGoGreen></WhyGoGreen>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <UpcomingEvents></UpcomingEvents>
      <RecentTips></RecentTips>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
