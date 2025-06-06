"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { BlurFade } from "@/components/magicui/blur-fade";

const features = [
  {
    img: "https://avatar.vercel.sh/jack",
    text: "深潜价值",
    description: "深度优化流程，挖掘软件服务最大价值"
  },
  {
    img: "https://avatar.vercel.sh/jill",
    text: "效率跃升",
    description: "自动化、标准化流程，提升服务交付速度"
  },
  {
    img: "https://avatar.vercel.sh/john",
    text: "成本掌控",
    description: "精细化管理资源，有效控制IT成本"
  },
  {
    img: "https://avatar.vercel.sh/jane",
    text: "安全护航",
    description: "构建稳健的服务管理体系，保障业务连续性"
  },
  {
    img: "https://avatar.vercel.sh/jenny",
    text: "敏捷赋能",
    description: "支持快速迭代与创新，灵活应对市场变化"
  },
  {
    img: "https://avatar.vercel.sh/james",
    text: "经验领航",
    description: "拥有资深专家团队，深谙行业最佳实践"
  },
  {
    img: "https://avatar.vercel.sh/jessica",
    text: "数据驱动",
    description: "基于数据分析优化决策，提升服务质量"
  },
  {
    img: "https://avatar.vercel.sh/jackson",
    text: "技术创新",
    description: "持续引入先进技术，保持竞争优势"
  },
  {
    img: "https://avatar.vercel.sh/julia",
    text: "响应迅速",
    description: "高效响应客户需求，提供及时解决方案"
  }
];

const firstRow = features.slice(0, features.length / 2);
const secondRow = features.slice(features.length / 2);


const ReviewCard = ({
                      img,
                      text,
                      description,
                      body,
                    }) => {
  return (
      <figure
          className={cn(
              "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {text}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{description}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
  );
};


export function MarqueeShowcase() {

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col items-center space-y-10">
          <div className="space-y-3 text-center">
            <BlurFade>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                我们的优势
              </h2>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                大鱼软件服务管理为您提供全方位的专业服务与解决方案
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.4} direction="up">
            <div className="w-full py-6 relative flex flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover={true} className="[--duration:20s]">
                  {firstRow.map((review) => (
                      <ReviewCard key={review.description} {...review} />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover={true} className="[--duration:20s]">
                  {secondRow.map((review) => (
                      <ReviewCard key={review.description} {...review} />
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
