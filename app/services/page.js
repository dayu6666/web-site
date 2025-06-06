"use client"

import { useTranslation } from "@/lib/i18n";
import { Layout } from "@/components/layout";
import Link from "next/link";
import { 
  PageContainer, 
  PageHeader, 
  PageSection,
  SectionTitle,
  SectionGrid,
  Card
} from "@/components/page-container";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function Services() {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageContainer>
        <PageHeader 
          title={t.nav.services} 
          description="与'大鱼'同行，驶向软件服务管理的卓越彼岸。我们提供全面的解决方案与专业服务，助您应对挑战，把握机遇。"
        />
        
        <PageSection withBorder={false}>
          <SectionTitle>我们的核心服务</SectionTitle>
          
          <SectionGrid>
            <Card title="1. 咨询与规划">
              <ul className="list-disc pl-6 space-y-2">
                <li>深入诊断您的软件服务管理现状，识别瓶颈与风险。</li>
                <li>制定与业务目标对齐的战略蓝图与实施路线图。</li>
                <li>流程设计与优化 (如：事件管理、问题管理、变更管理、服务请求、配置管理)。</li>
              </ul>
            </Card>
            
            <Card title="2. 解决方案实施">
              <ul className="list-disc pl-6 space-y-2">
                <li>主流平台的部署、配置与定制开发。</li>
                <li>自动化工作流设计与实现 (提升效率，减少人工干预)。</li>
                <li>系统集成 (与现有IT系统、监控工具、CMDB等无缝对接)。</li>
              </ul>
            </Card>
            
            <Card title="3. 运维与支持">
              <ul className="list-disc pl-6 space-y-2">
                <li>提供持续的系统运维、监控与健康检查服务。</li>
                <li>用户支持与培训，确保团队高效使用。</li>
                <li>定期优化与升级，保持系统最佳状态与价值。</li>
              </ul>
            </Card>
            
            <Card title="4. 培训与赋能">
              <ul className="list-disc pl-6 space-y-2">
                <li>面向管理员、工程师、普通用户的定制化培训课程。</li>
                <li>ITIL/DevOps 等最佳实践认证培训辅导。</li>
                <li>知识转移，培养客户内部专家。</li>
              </ul>
            </Card>
            
            <Card title="5. 软件资产管理">
              <ul className="list-disc pl-6 space-y-2">
                <li>软件资产盘点、合规性审计与风险管理。</li>
                <li>优化软件许可证采购、部署与使用，显著降低成本。</li>
              </ul>
            </Card>
          </SectionGrid>
        </PageSection>
        
        <SectionGrid>
          <PageSection>
            <SectionTitle>我们的合作模式</SectionTitle>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>项目制合作：</strong> 针对特定目标（如：平台实施、流程优化项目），按阶段交付成果。
              </li>
              <li>
                <strong>运维托管服务：</strong> 提供长期、持续的运维管理支持，解放客户内部资源。
              </li>
              <li>
                <strong>咨询顾问服务：</strong> 按需提供专家建议和指导。
              </li>
            </ul>
            <p><em>我们灵活定制，满足不同客户需求。</em></p>
          </PageSection>
          
          <PageSection>
            <SectionTitle>合作流程</SectionTitle>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>需求沟通：</strong> 深入了解您的挑战与目标。
              </li>
              <li>
                <strong>方案设计：</strong> 为您量身定制解决方案与服务计划。
              </li>
              <li>
                <strong>提案确认：</strong> 明确范围、交付物、时间表和预算。
              </li>
              <li>
                <strong>实施/交付：</strong> 专业团队高效执行，保持透明沟通。
              </li>
              <li>
                <strong>验收与支持：</strong> 确保成果达成，提供持续服务。
              </li>
            </ol>
          </PageSection>
        </SectionGrid>
        
        <PageSection>
          <SectionTitle>客户收益</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="list-disc pl-6 space-y-2">
              <li>提升服务效率，缩短响应与解决时间。</li>
              <li>降低IT运营成本，优化资源投入。</li>
              <li>增强服务可靠性与业务连续性，减少宕机风险。</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2">
              <li>实现软件资产合规，规避法律与财务风险。</li>
              <li>提升员工满意度与IT部门价值。</li>
              <li>加速业务创新与上市时间。</li>
            </ul>
          </div>
        </PageSection>
        
        <div className="flex justify-center pt-6">
          <Link href="/contact" passHref>
            <RainbowButton size="lg">
              联系我们讨论您的需求
            </RainbowButton>
          </Link>
        </div>
      </PageContainer>
    </Layout>
  );
} 