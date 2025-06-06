"use client"

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { BlurFade } from "./magicui/blur-fade";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <BlurFade delay={0.1}>
        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-primary shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">办公地址</h3>
            <p className="text-muted-foreground">上海市浦东新区张江高科技园区博云路2号浦软大厦5楼</p>
          </div>
        </div>
      </BlurFade>
      
      <BlurFade delay={0.2}>
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-primary shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">邮箱</h3>
            <p className="text-muted-foreground">contact@dayu.com</p>
            <p className="text-muted-foreground">support@dayu.com（技术支持）</p>
          </div>
        </div>
      </BlurFade>
      
      <BlurFade delay={0.3}>
        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">电话</h3>
            <p className="text-muted-foreground">+86 21 5888 XXXX</p>
          </div>
        </div>
      </BlurFade>
      
      <BlurFade delay={0.4}>
        <div className="flex items-start space-x-4">
          <Clock className="h-6 w-6 text-primary shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">工作时间</h3>
            <p className="text-muted-foreground">周一至周五：9:00 - 18:00 (GMT+8)</p>
          </div>
        </div>
      </BlurFade>
    </div>
  );
} 