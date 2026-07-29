"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // Multi-layered parallax movements across the entire page height
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 450]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const orb4Y = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      
      {/* 1. Seamless Full-Page SVG Network Mesh & Telemetry Graph Lines */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[140%]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Hexagon mesh grid */}
            <pattern id="global-hex" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 20 L80 60 L40 80 L0 60 L0 20 Z" fill="none" stroke="#2563eb" strokeWidth="0.5" opacity="0.08" />
            </pattern>
            {/* Circuit trace pattern */}
            <pattern id="global-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 60h40l15-15h30l15 15h20" fill="none" stroke="#2563eb" strokeWidth="0.5" opacity="0.09" />
              <path d="M60 0v40l-15 15v30l15 15v20" fill="none" stroke="#2563eb" strokeWidth="0.5" opacity="0.09" />
              <circle cx="60" cy="60" r="2" fill="#2563eb" opacity="0.18" />
            </pattern>
          </defs>

          {/* Base SVG pattern layers (No dots) */}
          <rect width="100%" height="100%" fill="url(#global-hex)" />
          <rect width="100%" height="100%" fill="url(#global-circuit)" />

          {/* Background Graph Lines / Telemetry Bandwidth Waves */}
          <g stroke="#2563eb" fill="none" strokeWidth="1" opacity="0.12">
            {/* Wave Graph Line 1 */}
            <path d="M0 200 Q 250 120, 500 220 T 1000 180 T 1500 240 T 2000 160" />
            {/* Wave Graph Line 2 */}
            <path d="M0 450 Q 300 520, 600 420 T 1200 480 T 1800 400 T 2400 460" strokeDasharray="6 6" />
            {/* Wave Graph Line 3 */}
            <path d="M0 750 Q 200 680, 450 780 T 950 710 T 1450 790 T 1950 730" />
            {/* Wave Graph Line 4 */}
            <path d="M0 1100 Q 350 1180, 700 1080 T 1400 1150 T 2100 1090" strokeDasharray="8 4" />
          </g>

          {/* Continuous Network Interconnect Lines */}
          <g stroke="#2563eb" strokeWidth="0.6" opacity="0.15">
            <line x1="8%" y1="5%" x2="30%" y2="12%" />
            <line x1="30%" y1="12%" x2="52%" y2="7%" />
            <line x1="52%" y1="7%" x2="78%" y2="15%" />
            <line x1="78%" y1="15%" x2="92%" y2="8%" />
            
            <line x1="30%" y1="12%" x2="25%" y2="28%" />
            <line x1="52%" y1="7%" x2="60%" y2="25%" />
            <line x1="78%" y1="15%" x2="70%" y2="35%" />
            
            <line x1="15%" y1="40%" x2="42%" y2="48%" />
            <line x1="42%" y1="48%" x2="68%" y2="42%" />
            <line x1="68%" y1="42%" x2="88%" y2="52%" />
            
            <line x1="20%" y1="65%" x2="48%" y2="72%" />
            <line x1="48%" y1="72%" x2="75%" y2="68%" />
            <line x1="75%" y1="68%" x2="90%" y2="82%" />
          </g>

          {/* Glowing Network Nodes */}
          <g fill="#2563eb">
            <circle cx="8%" cy="5%" r="3" opacity="0.35" />
            <circle cx="30%" cy="12%" r="4" opacity="0.45" />
            <circle cx="52%" cy="7%" r="3" opacity="0.35" />
            <circle cx="78%" cy="15%" r="4" opacity="0.4" />
            <circle cx="92%" cy="8%" r="3" opacity="0.3" />

            <circle cx="25%" cy="28%" r="3.5" opacity="0.35" />
            <circle cx="60%" cy="25%" r="4" opacity="0.4" />
            <circle cx="70%" cy="35%" r="3" opacity="0.35" />

            <circle cx="15%" cy="40%" r="3.5" opacity="0.3" />
            <circle cx="42%" cy="48%" r="4" opacity="0.45" />
            <circle cx="68%" cy="42%" r="3.5" opacity="0.35" />
            <circle cx="88%" cy="52%" r="4" opacity="0.4" />

            <circle cx="20%" cy="65%" r="3" opacity="0.3" />
            <circle cx="48%" cy="72%" r="4" opacity="0.4" />
            <circle cx="75%" cy="68%" r="3.5" opacity="0.35" />
            <circle cx="90%" cy="82%" r="3" opacity="0.3" />
          </g>
        </svg>
      </motion.div>

      {/* 2. Floating Ambient Glow Orbs in Primary Blue */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-primary/15 rounded-full blur-3xl opacity-50"
      />

      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-1/4 -right-32 w-[34rem] h-[34rem] bg-primary/10 rounded-full blur-3xl opacity-40"
      />

      <motion.div
        style={{ y: orb3Y }}
        className="absolute top-2/4 left-1/4 w-[28rem] h-[28rem] bg-primary-dark/10 rounded-full blur-3xl opacity-35"
      />

      <motion.div
        style={{ y: orb4Y }}
        className="absolute top-3/4 -left-20 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-3xl opacity-40"
      />
    </div>
  );
}

