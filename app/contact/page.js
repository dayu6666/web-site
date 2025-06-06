"use client"

import { useTranslation } from "@/lib/i18n";
import { Layout } from "@/components/layout";
import { 
  PageContainer, 
  PageHeader, 
  PageSection,
  SectionGrid,
} from "@/components/page-container";
import { ContactInfo } from "@/components/contact-info";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageContainer>
        <PageHeader 
          title={t.nav.contact} 
          description="期待与您交流！无论您有任何关于软件服务管理的疑问、需求，或是希望探讨合作可能，'大鱼'团队随时准备为您提供帮助。"
        />

        <SectionGrid>
          <PageSection>
            <ContactInfo />
          </PageSection>
          
          <PageSection>
            <ContactForm />
          </PageSection>
        </SectionGrid>
      </PageContainer>
    </Layout>
  );
} 