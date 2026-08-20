import BookCTA from "./components/BookCTA";
import Description from "./components/Description";
import FacebookPost from "./components/FacebookPost";
import Hero from "./components/Hero";
import RecentActivity from "./components/RecentActivity";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Testimonials />
      <BookCTA />
      <FacebookPost />
      <RecentActivity />
    </>
  );
}
