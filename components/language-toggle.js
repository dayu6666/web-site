"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function LanguageToggle() {
  const { t, locale, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  React.useEffect(() => {
    // 点击外部时关闭下拉菜单
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".language-toggle-container")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left language-toggle-container">
      <button
        type="button"
        className="flex items-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
        aria-label="Toggle language"
        onClick={toggleDropdown}
      >
        <Globe className="h-5 w-5" />
        <span className="ml-2 hidden sm:inline">{t.language[locale]}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <button
              onClick={() => {
                changeLanguage("zh");
                closeDropdown();
              }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {t.language.zh}
            </button>
            <button
              onClick={() => {
                changeLanguage("en");
                closeDropdown();
              }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {t.language.en}
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 