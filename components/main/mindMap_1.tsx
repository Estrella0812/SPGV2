"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ChildNode = {
  id: string;
  label: string;
  description?: string;
};

type ParentNode = {
  id: number;
  title: string;
  subtitle?: string;
  pos: { x: number; y: number }; // normalized 0..1
  colorFrom: string;
  colorTo: string;
  color: string,
  children: ChildNode[];
  url: string;
};

const BASE_SIZE = 160;

// 1, 5, 2, 4, 3 (clockwise)
const PARENTS: ParentNode[] = [
  {
    id: 1,
    title: "Compound",
    subtitle: "Main idea",
    pos: { x: 0.559, y: 0.29 },
    colorFrom: "#4f46e5",
    colorTo: "#6366f1",
    color: "#2a2a2aff",
    children: [],
    url: "/compound",
  },
  {
    id: 2,
    title: "Agency",
    subtitle: "Evidence & sources",
    pos: { x: 0.30, y: 0.50 },
    colorFrom: "#0ea5e9",
    colorTo: "#6366f1",
    color: "#626262ff",
    children: [
      { id: "c2-1", label: "Staffing", description: "" },
      { id: "c2-2", label: "Consulting", description: "" },
      { id: "c2-3", label: "Training", description: "" },
    ],
    url: "/agency",
  },
  {
    id: 3,
    title: "Logistics",
    subtitle: "Structure & flow",
    pos: { x: 0.83, y: 0.50 },
    colorFrom: "#ec4899",
    colorTo: "#a855f7",
    color: "#343434ff",
    children: [
      { id: "c3-4", label: "Transportation", description: "" },
      { id: "c3-3", label: "Warehousing", description: "" },
      { id: "c3-2", label: "Freight Forwarding", description: "" },
      { id: "c3-1", label: "Customs", description: "" },
    ],
    url: "/logistics",
  },
  {
    id: 4,
    title: "NPO",
    subtitle: "Style & tone",
    pos: { x: 0.38, y: 0.93 },
    colorFrom: "#22c55e",
    colorTo: "#5E5E5E",
    color: "#545454ff",
    children: [],
    url: "/npo",
  },
  {
    id: 5,
    title: "IT",
    subtitle: "Publishing & feedback",
    pos: { x: 0.73, y: 0.93 },
    colorFrom: "#f97316",
    colorTo: "#eab308",
    color: "#494949ff",
    children: [
      { id: "c5-1", label: "IT Infrastructure", description: "" },
      { id: "c5-2", label: "Security Systems", description: "" },
    ],
    url: "/it",
  },
];

export default function MindMap(): JSX.Element {
  const containerRef = useRef<HTMLDivElement|null>(null);
  const [hoveredId, setHoveredId] = useState<number|null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Measure container size + resize handling
  useEffect(() => {
    const el = containerRef.current;
    if(!el) return;

    function measure(){
      const rect = el!.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  //
  function getParentLayout(node: ParentNode){
    const {width, height} = containerSize;
    const hasSize = width > 0 && height > 0;
    const isFocused = hoveredId === node.id;
    const someFocused = hoveredId !== null;
    const centerX = hasSize ? width/2 : 0;
    const centerY = hasSize ? height/2 : 0;

    // Fallback before we know container size
    if(!hasSize){
      return {
        left: `${node.pos.x * 100}%`,
        top: `${node.pos.y * 100}%`,
        size: BASE_SIZE,
        scale: 1,
        opacity: 1,
        zIndex: 10,
      };
    }

    // Focused state
    if(isFocused){
      // Normal overview mode
      //for each id give x,y location when zoomed
      const size = Math.min(width, height) * 0.7; // 90% of smaller dimension
      let x = node.pos.x * width;
      let y = node.pos.y * height;
      switch(hoveredId){
        case 1:
          x -= size/3;
          y += size/10;
        case 2:
          x += size/1.5 ;
        case 3:
          x -= size/2;
          y += size/2;
        case 4:
          x += size/2;
          //5 is default
        default:

      }
      return {
        left: `${x}px`,
        top: `${y}px`,
        size,
        scale: 1,
        opacity: 1,
        zIndex: 40,
      };
    }

    if (!someFocused) {
      // Normal overview mode
      const x = node.pos.x * width;
      const y = node.pos.y * height;
      return {
        left: `${x}px`,
        top: `${y}px`,
        size: BASE_SIZE,
        scale: 1,
        opacity: 1,
        zIndex: 10,
      };
    }

    // Another node is focused: push this one to the edge + fade/shrink
    // this computes the angle from the center of the container (0.5, 0.5) to the node's position
    // position thing around a circle
    const angle = Math.atan2(node.pos.y - 0.5, node.pos.x - 0.5);
    const radius = Math.max(width, height) * 0.5;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    return {
      left: `${x}px`,
      top: `${y}px`,
      size: BASE_SIZE,
      scale: 0.4,
      opacity: 0.0, // fully faded, you can make this 0.2 if you want ghost bubbles
      zIndex: 1,
    };
  }

   return (
    <div>
    <div className=" bg-[var(--background)] w-full min-h-[90vh] flex items-center">
      <div
        ref={containerRef}
        className="relative mx-auto rounded-2xl overflow-hidden"
        style={{ width: "100%", maxWidth: 1300, minWidth: 1080, height: "80vh" }}
      >
        {/* background wash */}
        <div className="absolute inset-0 pointer-events-none" />

        {/* Main Logo */}
        <div className="absolute left-[50%] top-[50%] z-10 bg-[var(--background)] -translate-x-1/2 -translate-y-1/2 duration-200 ease-in-out"
         style={
            hoveredId !== null
              ? {
                  opacity: 0,
                  zIndex: 0,
                }
              : {}
          }
        >
          <Image
            src="https://spgltd.s3.us-east-2.amazonaws.com/main/spg-main-logo.webp"
            alt="SPG Logo"
            width={200}
            height={100}
            className="object-contain mb-2"
          />
        </div>

        {/* connecting lines from logo → parents */}
        <svg
          className="pointer-events-none absolute inset-0"
          style={{ zIndex: 1, width: "100%", height: "100%" }}
          viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        >
          {containerSize.width > 0 &&
            containerSize.height > 0 &&
            PARENTS.map((node) => {
              const layout = getParentLayout(node);
              if (hoveredId !== null) return null;

              // parse the "left/top" we returned from getParentLayout (in px)
              const x2 = parseFloat(layout.left as string) - BASE_SIZE/2;
              const y2 = parseFloat(layout.top as string)  - BASE_SIZE/2;

              const x1 = containerSize.width * 0.5;
              const y1 = containerSize.height * 0.5;

              const length = Math.hypot(x2 - x1, y2 - y1);

              return (
                <g>
                  <line
                    key={node.id}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#4f4f4fff"
                    strokeWidth={3}
                    style={{
                      opacity: 0.74,
                      strokeDasharray: length,
                      strokeDashoffset: length, // will be animated to 0
                    }}
                    className="mm-line-animate mm-line-glow"
                  />
                  {/* 2) Traveling light dot */}
                  {/* <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#mm-line-gradient)"
                    strokeWidth={5}          // thicker so the dot is visible
                    strokeLinecap="round"    // makes the dash look like a round dot
                    style={{
                      opacity: 1,
                      // short dash (the "dot") + big gap (the rest of the path)
                      strokeDasharray: `10 ${length}`,
                      // start with the dash all the way back at the center
                      strokeDashoffset: length,
                    }}
                    className="mm-line-dot"
                  /> */}
                </g>
              );
            })}
        </svg>


        {/* parent bubbles */}
        {PARENTS.map((node, index) => {
          const layout = getParentLayout(node);
          const isFocused = hoveredId === node.id;
          const someFocused = hoveredId !== null;

          // For float animation only when not in focus mode
          const floatClass = !someFocused ? "mm-bubble-floating" : "";
          const floatStyle =
          !someFocused
            ? {
                animationDelay: `${index * 700}ms`,     // staggered start time
                animationDuration: `${5 + index * 2}s` // slightly different speed
              }
            : {};
          return (
            <Link
              key={node.id}
              href={node.url}
              prefetch={false}
              className={[
                "absolute",
                "-translate-x-1/2",
                "-translate-y-1/2",
                "transition-all",
                "duration-400",
                "ease-[cubic-bezier(.22,.8,.3,1)]",
                floatClass,
              ].join(" ")}
              style={{
                ...floatStyle,
                left: layout.left,
                top: layout.top,
                width: layout.size,
                height: layout.size,
                transform: `translate(-50%, -50%) scale(${layout.scale})`,
                opacity: layout.opacity,
                zIndex: layout.zIndex,
              }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId((cur) => (cur === node.id ? null : cur))}
            >
              {/* parent circle */}
              <div
                className={[
                  "w-full h-full rounded-full flex flex-col items-center justify-center",
                  "cursor-pointer select-none",
                  "shadow-[0_10px_35px_rgba(15,23,42,0.16)]",
                ].join(" ")}
                style={{
                  // background: `linear-gradient(135deg, ${node.colorFrom} 0%, ${node.colorTo} 100%)`,
                  background: `${node.color}`,
                }}
              >
                {/* When focused, show richer content; otherwise just title */}
                {isFocused ? (
                  <div className="flex flex-col items-center justify-center text-center px-6 gap-2">
                    <div className="text-6xl font-semibold text-white">{node.title}</div>
                    <div className="flex items-center text-sm max-w-md mt-2">
                      <p className="text-white/85">
                        Learn More
                      </p>
                      <p className={`ml-2 rounded-full bg-white text-[${node.color}] w-6 h-6 hover:translate-x-1 transition-all duration-300 pt-0.5 pl-0.3`}>
                        ❯
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-white font-semibold text-lg text-center px-4">
                    {node.title}
                  </div>
                )}
              </div>

              {/* children: only draw around the focused parent */}
              
              {isFocused && (
                <FocusedChildrenRing parent={node} parentSize={getParentLayout(node).size} />
              )}
            </Link>
          );
        })}

        {/* CSS for floating + child pop */}
        {/* <style jsx>{`
          .mm-bubble-floating {
            animation: mmFloat 5s ease-in-out infinite;
          }

          @keyframes mmFloat {
            0% {
              transform: translate(-50%, -50%) translate(0px, 0px) scale(1);
            }
            35% {
              transform: translate(-50%, -50%) translate(10px, -8px) scale(1);
            }
            70% {
              transform: translate(-50%, -50%) translate(-8px, 10px) scale(1);
            }
            100% {
              transform: translate(-50%, -50%) translate(0px, 0px) scale(1);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .mm-bubble-floating,
            * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style> */}
      </div>
    </div>
    </div>
  );
}


type FocusedChildrenRingProps = {
  parent: ParentNode;
  parentSize: number; // px
};

function FocusedChildrenRing({ parent, parentSize }: FocusedChildrenRingProps) {
  const children = parent.children;
  if (!children || children.length === 0 || !parentSize) return null;

  // Decide side for each parent (you can tweak this mapping)
  const sideByParent: Record<number, "top" | "right" | "left" | "bottom" | "topLeft" | "bottomLeft"> = {
    1: "bottom",
    2: "right",
    3: "left",
    4: "left",
    5: "topLeft",
  };

  const side = sideByParent[parent.id] ?? "bottom";

  // Radius in *pixels*:
  // - parentSize/2 is the parent radius
  // - +24 puts children a bit outside the circle
  const parentRadius = parentSize / 2;
  const radiusPx = parentRadius + 80;

  // Desired spacing *along the arc* between neighbors
  const gapPx = 150;

  // Base angle by side
  let centerAngle = 0;
  switch (side) {
    case "top":
      centerAngle = -Math.PI / 2;
      break;
    case "right":
      centerAngle = 0;
      break;
    case "bottom":
      centerAngle = Math.PI / 2;
      break;
    case "left":
      centerAngle = Math.PI;
      break;
    case "topLeft":
      centerAngle = -Math.PI / 1.5;
      break;
    case "bottomLeft":
      centerAngle = Math.PI / 1.1;
      break;
  }

 const count = children.length;
  const half = (count - 1) / 2;

  // approximate child radius (Tailwind w-28 => 7rem ≈ 112px)
  const childDiameter = 112;
  const childRadius = childDiameter / 2;

  return (
    <>
      {children.map((child, index) => {
        const offsetIndex = index - half;

        // angle offset so arc spacing ≈ gapPx
        const angleOffset = (gapPx * offsetIndex) / radiusPx;
        const angle = centerAngle + angleOffset;

        // child center from parent center
        const dx = Math.cos(angle) * radiusPx;
        const dy = Math.sin(angle) * radiusPx;

        const fullDist = Math.hypot(dx, dy) || 1;
        const ux = dx / fullDist;
        const uy = dy / fullDist;

        // line starts at parent outer edge
        const startDist = parentRadius; // small padding inside
        // and ends just before child bubble
        const endDist = fullDist - childRadius;
        const lineLength = Math.max(0, endDist - startDist);

        const delay = 80 * index;

        return (
          <div
            key={child.id}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none", // line wrapper doesn’t block interactions
            }}
          >
            {/* string: from parent edge to just before child circle */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: `${lineLength}px`,
                height: "2px",
                backgroundColor: "rgba(148, 163, 184, 0.9)", // slate-ish
                transform: `translate(${ux * startDist}px, ${uy * startDist}px) rotate(${angle}rad)`,
                transformOrigin: "0 50%",
              }}
            />

            {/* child bubble */}
            <div
              className="absolute mm-child-pop"
              style={{
                left: `${dx}px`,
                top: `${dy}px`,
                transform: "translate(-50%, -50%)",
                animationDelay: `${delay}ms`,
                pointerEvents: "auto", // child bubble can be hovered/clicked
              }}
            >
              <div className="w-32 h-32 rounded-full bg-white shadow-[0_10px_35px_rgba(15,23,42,0.18)] flex flex-col items-center justify-center px-3">
                <div className=" font-semibold text-slate-900 text-center">
                  {child.label}
                </div>
                {child.description && (
                  <p className="mt-1 text-[10px] text-slate-500 text-center leading-snug">
                    {child.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}