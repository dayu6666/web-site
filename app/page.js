"use client"

import { useTranslation } from "@/lib/i18n";
import { Layout } from "@/components/layout";
import {
  HeroSection,
} from "@/components/hero-section";
import { MarqueeShowcase } from "@/components/marquee-showcase";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <HeroSection 
        title={t.hero.title}
        description={t.hero.description}
        ctaText={t.hero.cta}
        ctaLink="/services"
      />

      <MarqueeShowcase />
    </Layout>
  );
}
