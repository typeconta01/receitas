import { Audience } from "@/components/claude/Audience";
import { BeforeAfter } from "@/components/claude/BeforeAfter";
import { BeliefShift } from "@/components/claude/BeliefShift";
import { Bonuses } from "@/components/claude/Bonuses";
import { ComplexityObjection } from "@/components/claude/ComplexityObjection";
import { FAQ } from "@/components/claude/FAQ";
import { FinalCTA } from "@/components/claude/FinalCTA";
import { Footer } from "@/components/claude/Footer";
import { Guarantee } from "@/components/claude/Guarantee";
import { Hero } from "@/components/claude/Hero";
import { Mechanism } from "@/components/claude/Mechanism";
import { MechanismSteps } from "@/components/claude/MechanismSteps";
import { MobileStickyCTA } from "@/components/claude/MobileStickyCTA";
import { Modules } from "@/components/claude/Modules";
import { Offer } from "@/components/claude/Offer";
import { ProblemSection } from "@/components/claude/ProblemSection";
import { Tracking } from "@/components/claude/Tracking";
import { UseCases } from "@/components/claude/UseCases";
import type { ClaudeLang } from "@/lib/claude-i18n";

export function ClaudeLanding({ lang = "pt" }: { lang?: ClaudeLang }) {
  return (
    <main>
      <Tracking />
      <Hero lang={lang} />
      <ProblemSection lang={lang} />
      <BeliefShift lang={lang} />
      <Mechanism lang={lang} />
      <MechanismSteps lang={lang} />
      <UseCases lang={lang} />
      <BeforeAfter lang={lang} />
      <Modules lang={lang} />
      <Bonuses lang={lang} />
      <Audience lang={lang} />
      <ComplexityObjection lang={lang} />
      <Offer lang={lang} />
      <Guarantee lang={lang} />
      <FAQ lang={lang} />
      <FinalCTA lang={lang} />
      <Footer lang={lang} />
      <MobileStickyCTA lang={lang} />
    </main>
  );
}
