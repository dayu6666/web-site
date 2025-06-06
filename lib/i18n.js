"use client";

import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  zh: {
    title: "大鱼",
    description: "大鱼软件服务管理公司的官方网站",
    nav: {
      home: "首页",
      about: "公司介绍",
      services: "合作事宜",
      contact: "联系我们"
    },
    hero: {
      title: "让软件服务管理，如鱼得水。",
      description: "大鱼软件服务管理，专注于为企业提供软件服务管理解决方案，助力客户提升效率、降低成本、保障安全，实现业务敏捷与创新。",
      cta: "了解我们的解决方案"
    },
    features: {
      title: "我们的优势",
      deepValue: {
        title: "深潜价值",
        description: "不止于表面运维，深度优化流程，挖掘软件服务最大价值。"
      },
      efficiency: {
        title: "效率跃升",
        description: "自动化、标准化流程，显著提升服务交付速度与响应效率。"
      },
      costControl: {
        title: "成本掌控",
        description: "精细化管理资源，优化许可证使用，有效控制IT成本。"
      },
      security: {
        title: "安全护航",
        description: "构建稳健的服务管理体系，保障业务连续性与数据安全。"
      },
      agility: {
        title: "敏捷赋能",
        description: "支持快速迭代与创新，让业务灵活应对市场变化。"
      },
      experience: {
        title: "经验领航",
        description: "拥有资深专家团队，深谙行业最佳实践与挑战。"
      }
    },
    theme: {
      light: "明亮模式",
      dark: "暗黑模式"
    },
    language: {
      zh: "中文",
      en: "English"
    }
  },
  en: {
    title: "DaYu",
    description: "Official website of DaYu Software Service Management Company",
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact"
    },
    hero: {
      title: "Making Software Service Management Flow Like Water.",
      description: "DaYu Software Service Management focuses on providing software service management solutions for enterprises, helping customers improve efficiency, reduce costs, ensure security, and achieve business agility and innovation.",
      cta: "Learn About Our Solutions"
    },
    features: {
      title: "Our Advantages",
      deepValue: {
        title: "Deep Value",
        description: "Beyond surface operations, deeply optimize processes to extract maximum value from software services."
      },
      efficiency: {
        title: "Enhanced Efficiency",
        description: "Automated, standardized processes significantly improve service delivery speed and response efficiency."
      },
      costControl: {
        title: "Cost Control",
        description: "Fine-grained resource management, optimized license usage, effective IT cost control."
      },
      security: {
        title: "Security Protection",
        description: "Build robust service management systems to ensure business continuity and data security."
      },
      agility: {
        title: "Agile Enablement",
        description: "Support rapid iteration and innovation, enabling businesses to flexibly respond to market changes."
      },
      experience: {
        title: "Experience Leadership",
        description: "Possess a team of senior experts who understand industry best practices and challenges."
      }
    },
    theme: {
      light: "Light Mode",
      dark: "Dark Mode"
    },
    language: {
      zh: "中文",
      en: "English"
    }
  }
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState("zh");
  const [t, setT] = useState(translations.zh);

  useEffect(() => {
    // 从浏览器存储中获取语言设置，如果没有则使用默认语言
    const savedLocale = localStorage.getItem("locale") || "zh";
    setLocale(savedLocale);
    setT(translations[savedLocale]);
  }, []);

  const changeLanguage = (newLocale) => {
    if (translations[newLocale]) {
      setLocale(newLocale);
      setT(translations[newLocale]);
      localStorage.setItem("locale", newLocale);
    }
  };

  return (
    <I18nContext.Provider value={{ t, locale, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
} 