"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// 单个 Beam 组件，所有随机值（hue、ar）都由父组件传进来
const Beam = ({ width, x, delay, duration, hue, ar }) => {
  return (
    <motion.div
      style={{
        "--x": x,
        "--width": width,
        "--aspect-ratio": ar,
        "--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
      }}
      className={
        "absolute left-[var(--x)] top-0 [aspect-ratio:1/var(--aspect-ratio)] [background:var(--background)] [width:var(--width)]"
      }
      initial={{ y: "100cqmax", x: "-50%" }}
      animate={{ y: "-100%", x: "-50%" }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export const WarpBackground = ({
  children,
  perspective = 100,
  className,
  beamsPerSide = 3,
  beamSize = 5,
  beamDelayMax = 3,
  beamDelayMin = 0,
  beamDuration = 3,
  gridColor = "var(--border)",
  ...props
}) => {
  // 四个方向的 beam 数据，用 null 表示 SSR 阶段暂不渲染
  const [topBeams, setTopBeams] = useState(null);
  const [rightBeams, setRightBeams] = useState(null);
  const [bottomBeams, setBottomBeams] = useState(null);
  const [leftBeams, setLeftBeams] = useState(null);

  // 在浏览器端生成每条 beam 的参数
  const generateBeams = useCallback(() => {
    const beams = [];
    const cellsPerSide = Math.floor(100 / beamSize);
    const step = cellsPerSide / beamsPerSide;

    for (let i = 0; i < beamsPerSide; i++) {
      const xCell = Math.floor(i * step);
      const delay = Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin;
      const hue = Math.floor(Math.random() * 360);
      const ar = Math.floor(Math.random() * 10) + 1;
      beams.push({ x: xCell, delay, hue, ar });
    }
    return beams;
  }, [beamsPerSide, beamSize, beamDelayMax, beamDelayMin]);

  // 仅在客户端第一次挂载时执行，生成四组随机 beam
  useEffect(() => {
    const t = generateBeams();
    const r = generateBeams();
    const b = generateBeams();
    const l = generateBeams();

    setTopBeams(t);
    setRightBeams(r);
    setBottomBeams(b);
    setLeftBeams(l);
  }, [generateBeams]);

  return (
    <div className={cn("relative rounded border p-20", className)} {...props}>
      <div
        style={{
          "--perspective": `${perspective}px`,
          "--grid-color": gridColor,
          "--beam-size": `${beamSize}%`,
        }}
        className={
          "pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clipPath:inset(0)] [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d]"
        }
      >
        {/* top side */}
        {topBeams && (
          <div
            className={
              "absolute z-20 [transform-style:preserve-3d] " +
              "[background-size:var(--beam-size)_var(--beam-size)] " +
              "[background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size), " +
              "linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] " +
              "[container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]"
            }
          >
            {topBeams.map((beam, idx) => (
              <Beam
                key={`top-${idx}`}
                width={`${beamSize}%`}
                x={`${beam.x * beamSize}%`}
                delay={beam.delay}
                duration={beamDuration}
                hue={beam.hue}
                ar={beam.ar}
              />
            ))}
          </div>
        )}

        {/* bottom side */}
        {bottomBeams && (
          <div
            className={
              "absolute top-full [transform-style:preserve-3d] " +
              "[background-size:var(--beam-size)_var(--beam-size)] " +
              "[background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size), " +
              "linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] " +
              "[container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]"
            }
          >
            {bottomBeams.map((beam, idx) => (
              <Beam
                key={`bottom-${idx}`}
                width={`${beamSize}%`}
                x={`${beam.x * beamSize}%`}
                delay={beam.delay}
                duration={beamDuration}
                hue={beam.hue}
                ar={beam.ar}
              />
            ))}
          </div>
        )}

        {/* left side */}
        {leftBeams && (
          <div
            className={
              "absolute left-0 top-0 [transform-style:preserve-3d] " +
              "[background-size:var(--beam-size)_var(--beam-size)] " +
              "[background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size), " +
              "linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] " +
              "[container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]"
            }
          >
            {leftBeams.map((beam, idx) => (
              <Beam
                key={`left-${idx}`}
                width={`${beamSize}%`}
                x={`${beam.x * beamSize}%`}
                delay={beam.delay}
                duration={beamDuration}
                hue={beam.hue}
                ar={beam.ar}
              />
            ))}
          </div>
        )}

        {/* right side */}
        {rightBeams && (
          <div
            className={
              "absolute right-0 top-0 [transform-style:preserve-3d] " +
              "[background-size:var(--beam-size)_var(--beam-size)] " +
              "[background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size), " +
              "linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] " +
              "[container-type:inline-size] [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)]"
            }
          >
            {rightBeams.map((beam, idx) => (
              <Beam
                key={`right-${idx}`}
                width={`${beamSize}%`}
                x={`${beam.x * beamSize}%`}
                delay={beam.delay}
                duration={beamDuration}
                hue={beam.hue}
                ar={beam.ar}
              />
            ))}
          </div>
        )}
      </div>

      {/* 渲染子内容 */}
      <div className="relative">{children}</div>
    </div>
  );
};
