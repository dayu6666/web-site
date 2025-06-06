"use client"

import { useTranslation } from "@/lib/i18n";
import { Layout } from "@/components/layout";
import { 
  PageContainer, 
  PageHeader, 
  PageSection,
  SectionTitle
} from "@/components/page-container";

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageContainer>
        <PageHeader 
          title={t.nav.about} 
          description="大鱼软件服务管理，诞生于2023年，源于对软件服务管理领域复杂挑战的深刻洞察与解决热忱。我们深信，卓越的软件服务管理是企业数字化转型成功的基石。"
        />
        
        <PageSection>
          <SectionTitle>我们的使命</SectionTitle>
          <p>
            赋能每一家企业，驾驭软件服务的海洋，实现高效、可靠、创新的业务运营。通过领先的软件服务管理解决方案和专业服务，助力客户降本增效，释放IT潜能，驱动业务持续增长。
          </p>
        </PageSection>
        
        <PageSection>
          <SectionTitle>我们的愿景</SectionTitle>
          <p>
            成为企业最值得信赖的软件服务管理伙伴，引领行业最佳实践，共创数字化未来。构建一个软件服务管理清晰、高效、价值驱动的商业世界。
          </p>
        </PageSection>
        
        <PageSection>
          <SectionTitle>我们的价值观</SectionTitle>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>客户至上：</strong> 深度理解需求，以客户成功衡量自身价值。
            </li>
            <li>
              <strong>专业精进：</strong> 持续学习，追求卓越，掌握前沿技术与实践。
            </li>
            <li>
              <strong>诚信可靠：</strong> 言行一致，兑现承诺，做值得托付的伙伴。
            </li>
            <li>
              <strong>创新求变：</strong> 勇于探索新方法，优化解决方案与服务。
            </li>
            <li>
              <strong>协作共赢：</strong> 内部紧密协作，与客户及伙伴共创价值。
            </li>
          </ul>
        </PageSection>
        
        <PageSection>
          <SectionTitle>我们的优势</SectionTitle>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>专注领域：</strong> 深耕软件服务管理多年，理解深刻。
            </li>
            <li>
              <strong>专家团队：</strong> 汇聚行业资深顾问、工程师，拥有相关认证。
            </li>
            <li>
              <strong>成功实践：</strong> 已成功服务多家客户，积累了丰富的最佳实践库。
            </li>
            <li>
              <strong>定制方案：</strong> 拒绝"一刀切"，根据企业规模、行业、痛点提供量身定制方案。
            </li>
            <li>
              <strong>持续服务：</strong> 提供从咨询、实施到运维、优化的全生命周期服务支持。
            </li>
            <li>
              <strong>生态合作：</strong> 与知名合作伙伴紧密合作，提供更优整合方案。
            </li>
          </ul>
        </PageSection>
      </PageContainer>
    </Layout>
  );
} 