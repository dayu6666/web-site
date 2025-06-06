"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // 检查链接是否为当前活动页面
  const isActive = (path) => {
    return pathname === path;
  };
  
  // 生成导航链接样式
  const getLinkStyles = (path) => {
    return `text-sm font-medium transition-all duration-300 relative group py-2
      ${isActive(path) 
        ? "text-primary font-bold" 
        : "text-foreground hover:text-primary"}`;
  };
  
  // 生成移动端导航链接样式
  const getMobileLinkStyles = (path) => {
    return `px-6 py-3 transition-all duration-200 flex items-center
      ${isActive(path) 
        ? "bg-primary/10 text-primary font-medium border-l-2 border-primary" 
        : "hover:bg-accent hover:pl-7"}`;
  };
  
  // 关闭菜单的函数
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  // 当窗口大小改变时关闭移动菜单
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        closeMenu();
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-[1980px] flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center font-bold text-xl gap-2">
            <Image src="/logo.svg" alt="Logo" width={64} height={64} className="h-10 w-10" />
            {t.title}
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={getLinkStyles("/")}>
            {t.nav.home}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left ${isActive("/") ? "scale-x-100" : "group-hover:scale-x-100"}`}></span>
          </Link>
          <Link href="/about" className={getLinkStyles("/about")}>
            {t.nav.about}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left ${isActive("/about") ? "scale-x-100" : "group-hover:scale-x-100"}`}></span>
          </Link>
          <Link href="/services" className={getLinkStyles("/services")}>
            {t.nav.services}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left ${isActive("/services") ? "scale-x-100" : "group-hover:scale-x-100"}`}></span>
          </Link>
          <Link href="/contact" className={getLinkStyles("/contact")}>
            {t.nav.contact}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left ${isActive("/contact") ? "scale-x-100" : "group-hover:scale-x-100"}`}></span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-2 container max-w-[1980px]">
          <Link 
            href="/" 
            className={getMobileLinkStyles("/")}
            onClick={closeMenu}
          >
            {t.nav.home}
          </Link>
          <Link 
            href="/about" 
            className={getMobileLinkStyles("/about")}
            onClick={closeMenu}
          >
            {t.nav.about}
          </Link>
          <Link 
            href="/services" 
            className={getMobileLinkStyles("/services")}
            onClick={closeMenu}
          >
            {t.nav.services}
          </Link>
          <Link 
            href="/contact" 
            className={getMobileLinkStyles("/contact")}
            onClick={closeMenu}
          >
            {t.nav.contact}
          </Link>
        </nav>
      </div>
    </header>
  )
} 