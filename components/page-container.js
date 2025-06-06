"use client"

import React from "react";
import { BlurFade } from "./magicui/blur-fade";

export function PageContainer({ 
  children, 
  className = "", 
  maxWidth = "max-w-[1400px]" 
}) {
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto">
        <div className={`mx-auto ${maxWidth} space-y-10`}>
          {children}
        </div>
      </div>
    </section>
  );
}

export function PageHeader({ title, description }) {
  return (
    <div className="space-y-3">
      <BlurFade>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h1>
      </BlurFade>
      {description && (
        <BlurFade delay={0.1}>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </BlurFade>
      )}
    </div>
  );
}

export function PageSection({ 
  children, 
  className = "", 
  withBorder = true 
}) {
  return (
    <div className={`space-y-4 ${withBorder ? 'bg-background rounded-lg border p-6 shadow-sm' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <BlurFade>
      <h2 className="text-2xl font-bold">
        {children}
      </h2>
    </BlurFade>
  );
}

export function SectionGrid({ 
  children, 
  columns = "md:grid-cols-2" 
}) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-6`}>
      {children}
    </div>
  );
}

export function Card({ 
  title, 
  children, 
  className = "" 
}) {
  return (
    <BlurFade inView={true}>
      <div className={`rounded-lg border p-6 bg-background shadow-sm hover:shadow transition-all ${className}`}>
        {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
        {children}
      </div>
    </BlurFade>
  );
} 