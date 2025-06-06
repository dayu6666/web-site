"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Globe } from "@/components/magicui/globe";
import { WarpBackground } from "@/components/magicui/warp-background";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { useTheme } from "next-themes";
import { BlurFade } from "./magicui/blur-fade";
import { RainbowButton } from "./magicui/rainbow-button";

// 明亮模式Globe组件配置
const LIGHT_GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.6,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0.2, 0.042, 0.8], // 使用主题色
  glowColor: [1, 1, 1],
  markers: [
    { location: [31.2304, 121.4737], size: 0.1 }, // 上海
    { location: [39.9042, 116.4074], size: 0.08 }, // 北京
    { location: [22.5431, 114.0579], size: 0.07 }, // 深圳
    { location: [23.1291, 113.2644], size: 0.07 }, // 广州
    { location: [30.5928, 114.3055], size: 0.06 }, // 武汉
    { location: [32.0617, 118.7778], size: 0.05 }, // 南京
    { location: [30.2741, 120.1551], size: 0.06 }, // 杭州
    { location: [29.5628, 106.5528], size: 0.05 }, // 重庆
    { location: [28.2278, 112.9388], size: 0.04 }, // 长沙
    { location: [36.0611, 120.3826], size: 0.05 }, // 青岛
  ],
};

// 暗黑模式Globe组件配置 - 适配纯黑色背景
const DARK_GLOBE_CONFIG = {
  ...LIGHT_GLOBE_CONFIG,
  dark: 0.9,
  diffuse: 0.2,
  mapBrightness: 8,
  baseColor: [0.05, 0.05, 0.05], // 几乎纯黑
  glowColor: [0.3, 0.3, 0.3], // 灰白色光晕
  markerColor: [0.929, 0.5, 0.5], // 亮红色标记点
};

export function HeroSection({
  title,
  description,
  ctaText,
  ctaLink = "/services",
  className = ""
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [globeConfig, setGlobeConfig] = useState(LIGHT_GLOBE_CONFIG);

  // 在客户端挂载后检测主题
  useEffect(() => {
    setMounted(true);
  }, []);

  // 当主题变化时更新Globe配置
  useEffect(() => {
    if (mounted) {
      setGlobeConfig(resolvedTheme === 'dark' ? DARK_GLOBE_CONFIG : LIGHT_GLOBE_CONFIG);
    }
  }, [resolvedTheme, mounted]);

  return (
    <WarpBackground>
      <section className={`relative overflow-hidden ${className}`}>
          {/* 背景装饰 */}
          <div className="absolute inset-0 -z-10  opacity-10">
            <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-primary blur-[100px]"></div>
            <div className="absolute left-0 bottom-0 h-[200px] w-[200px] rounded-full bg-primary blur-[100px]"></div>
          </div>


          <div className="container mx-auto  relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
              {/* 左侧文案 */}
              <div className="w-full md:w-1/2 space-y-6 mb-10 md:mb-0">
                <div className="space-y-3">
                  <BlurFade direction="left">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                      <AnimatedGradientText
                        speed={2}
                      >
                        {title}
                      </AnimatedGradientText>
                    </h1>
                  </BlurFade>
                  <BlurFade direction="left" delay={0.2}>
                    <p className="text-muted-foreground text-lg md:text-xl">
                      {description}
                    </p>
                  </BlurFade>
                </div>
                {ctaText && (
                  <BlurFade direction="up" delay={0.4}>
                    <div className="pt-4">
                      <Link href={ctaLink} passHref>
                        <RainbowButton size="lg">
                          {ctaText}
                        </RainbowButton>
                      </Link>
                    </div>
                  </BlurFade>
                )}
              </div>

              {/* 右侧Globe组件 */}
              <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                {/* 光晕效果 - 暗黑模式下更明显 */}
                <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 dark:bg-primary/10 animate-pulse-slow"></div>
                <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/3 dark:bg-primary/5 animate-pulse-slower"></div>

                <div className="w-full max-w-[500px] aspect-square relative animate-float">
                  {mounted && (
                    <Globe
                      className="!absolute !inset-0 !mx-auto scale-110"
                      config={globeConfig}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
      </section>
    </WarpBackground>

  );
}

export function FeatureSection({
  title,
  children,
  className = ""
}) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-10">
          <BlurFade>
            <div className="space-y-3 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                {title}
              </h2>
            </div>
          </BlurFade>
          {children}
        </div>
      </div>
    </section>
  );
}
