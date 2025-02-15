import Header from "../components/layout/header/header";
import Hero from "../components/sections/hero";
import Benefits from "../components/sections/Benefits";
import ScrollToTop from "../components/layout/header/scrollToTop";

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <ScrollToTop />
    </div>
  );
}