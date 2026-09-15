import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { DecisionLoop } from "@/components/DecisionLoop";
import { MethodSection } from "@/components/MethodSection";
import { Transformation } from "@/components/Transformation";
import { AppSection } from "@/components/AppSection";
import { Features } from "@/components/Features";
import { TimeObjection } from "@/components/TimeObjection";
import { Desire } from "@/components/Desire";
import { BodyGoals } from "@/components/BodyGoals";
import { WhoIsFor } from "@/components/WhoIsFor";
import { OfferStack } from "@/components/OfferStack";
import { Bonuses } from "@/components/Bonuses";
import { Testimonials } from "@/components/Testimonials";
import { FinalStack } from "@/components/FinalStack";
import { Pricing } from "@/components/Pricing";
import { PriceJustification } from "@/components/PriceJustification";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainSection />
      <DecisionLoop />
      <MethodSection />
      <Transformation />
      <AppSection />
      <Features />
      <TimeObjection />
      <Desire />
      <BodyGoals />
      <WhoIsFor />
      <Testimonials />
      <OfferStack />
      <Bonuses />
      <FinalStack />
      <Pricing />
      <PriceJustification />
      <Guarantee />
      <FAQ />
      <Closing />
      <Footer />
      <StickyCTA />
    </main>
  );
}
