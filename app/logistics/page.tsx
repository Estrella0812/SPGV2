"use client";

import Image from "next/image";
import Link from "next/link";

import YouTubePlayer from "./components/YTvideo";
import { MainSlider1 } from "./components/mainSlider";
import { FaRegClipboard, FaPlane, FaTruck, FaBox } from "react-icons/fa";
import { motion } from "motion/react";

const data = {
  customs: [
    {
      title: "Documentation Preparation",
      description:
        "Accurate preparation of all required shipping documents including commercial invoices, packing lists, and certificates of origin.",
    },
    {
      title: "Customs Clearance",
      description:
        "Efficient handling of customs procedures to minimize delays and ensure compliance with all regulations.",
    },
    {
      title: "Compliance Expertise",
      description:
        "Expert knowledge of international trade regulations and customs requirements across multiple countries.",
    },
  ],
  forwarding: [
    {
      title: "Air Shipping",
      description:
        "Fast and secure air freight for time-sensitive shipments with global reach.",
    },
    {
      title: "Ocean Shipping",
      description:
        "Flexible options for FCL, LCL, and special cargo handling tailored to your trade lanes.",
    },
    {
      title: "Cross-Border Shipping",
      description:
        "Seamless shipping between neighboring countries with expert handling of international regulations.",
    },
  ],
  transportation: [
    {
      title: "Own Fleet Operations",
      description:
        "Our own fleet of trucks gives us direct control over quality, timing, and cost-effectiveness.",
    },
    {
      title: "In-House Carrier Network",
      description:
        "Fully integrated transportation operations from point A to B using our dedicated assets.",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Live tracking of cargo status and delivery progress for full visibility and control.",
    },
    {
      title: "Domestic Solutions",
      description:
        "LTL / FTL, flatbed for special cargo, and domestic air shipping options for urgent deliveries.",
    },
  ],
  warehouse: [
    {
      title: "Specialized Warehouse Operations",
      description:
        "Expert warehouse personnel and optimized processes for secure, efficient inventory management.",
    },
    {
      title: "Customized Solutions",
      description:
        "Industry-specific warehouse operations tailored to your product, volume, and risk profile.",
    },
    {
      title: "National Network",
      description:
        "Facilities in Toronto, Quebec, Windsor, and Calgary for seamless coverage across Canada.",
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--background-lightGrey)] text-[var(--text-dark)]">
      {/* HERO: slider */}
      <section className="w-full bg-[var(--background-lightGrey)]">
        <MainSlider1 />
      </section>

      {/* ABOUT SPG LOGISTICS */}
      <section className="py-16 md:py-20 min-h-[80vh] flex justify-center items-center">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="px-6 py-10 md:px-10 md:py-12 flex flex-col gap-12 text-center items-center"
          >
            <motion.div variants={fadeUp} className="">
              <p className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--dark-background)]">
                SPG Logistics
              </p>
              <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
                Comprehensive <br/>Logistics Solutions
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="text-sm md:text-base leading-relaxed text-[var(--text-dark)]/90"
            >
              <p className="mb-3 max-w-3xl">
                SPG Logistics provides integrated services nationwide, combining
                Korea&apos;s operational precision with Canada&apos;s flexible
                business environment. We deliver tailored solutions for clients
                across diverse industries, aligning our processes with your
                strategy.
              </p>
              <p className="max-w-3xl">
                From international freight forwarding and customs clearance to
                domestic transportation and warehousing, we manage every step of
                the supply chain with discipline and transparency. Our
                technology-enabled, end-to-end approach gives you visibility,
                control, and reliability at each stage—so your team can focus on
                growth instead of firefighting logistics issues.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO STRIP */}
      <section className="relative w-full pt-20">
        <div className="flex justify-center content-center flex-wrap w-full lg:h-[66vh] h-52 overflow-hidden bg-black relative z-0">
            {/* Video container */}
            <div className="w-full aspect-video pointer-events-none">
                <YouTubePlayer videoId="4F8z9_tKuXw"></YouTubePlayer>
            </div>
            <div className="absolute w-full h-full bg-[#6ec1e4]/50 mix-blend-multiply"/>
            <div className="w-full h-full absolute text-center flex-col content-center">
                <div className="text-white">
                    <h1 className="lg:text-4xl text-3xl mb-4 font-bold">SPG PROVIDES SPECIAL SERVICES</h1>
                </div>
            </div>
        </div>
      </section>



      {/* CUSTOMS */}
      <SectionWrapper bg="white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 min-h-[80vh] flex justify-center items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="flex flex-col gap-10 md:flex-row md:items-start"
          >
            {/* Left: heading */}
            <motion.div variants={fadeUp} className="md:w-1/3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--background-lightGrey)] text-[var(--dark-background)] mb-4">
                <FaRegClipboard className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Customs Services
              </h3>
              <p className="mt-2 text-sm md:text-base text-[var(--text-dark)]/80">
                Ensuring smooth import and export processes with full compliance
              </p>
            </motion.div>

            {/* Right: cards */}
            <motion.div
              variants={stagger}
              className="md:w-2/3 grid gap-6 md:grid-cols-3"
            >
              {data.customs.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex flex-col rounded-2xl bg-[var(--dark-background)] text-white px-5 py-6 shadow-md"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="text-lg font-semibold mb-2">
                    {item.title}
                  </div>
                  <p className="text-sm text-white/90">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* FREIGHT FORWARDING */}
      <SectionWrapper bg="dark">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 min-h-[80vh] flex justify-center items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="grid gap-10 md:grid-cols-2 md:items-center"
          >
            <motion.div variants={fadeUp} className="space-y-4 flex flex-col">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white mb-2">
                  <FaPlane className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Freight Forwarding
                </h3>
                <p className="text-sm md:text-base text-white/80">
                  Efficient and reliable international shipping solutions tailored to your business needs
                </p>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
                <Image src={"/images/logistics/logistics_ff.webp"} alt={""} width={650} height={200}/>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              className="flex flex-col gap-4 border-l border-white/10 pl-4 md:pl-6"
            >
              {data.forwarding.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-2xl bg-white/5 px-5 py-5 shadow-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-1">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1.5">
                    {item.title}
                  </div>
                  <p className="text-sm text-white/85">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* TRANSPORTATION */}
      <SectionWrapper bg="white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 min-h-[80vh] flex flex-col justify-center items-center">
          {/* Text block */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col text-center gap-2 mb-14"
          >
            <div className="flex w-full justify-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--dark-background)] text-white">
                <FaTruck className="h-6 w-6 transform -scale-x-100" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Transportation
            </h3>
            <p className="text-sm md:text-base text-[var(--text-dark)]/80 max-w-xl">
              Reliable and efficient transportation solutions powered by our own fleet of trucks.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="grid gap-10 md:grid-cols-2 md:items-center"
          >
            {/* Cards grid */}
            <motion.div
              variants={stagger}
              className="grid gap-5 sm:grid-cols-2"
            >
              {data.transportation.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="h-full rounded-2xl bg-[var(--dark-background)] text-white px-5 py-5 shadow-md"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60 mb-1.5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-base md:text-lg font-semibold mb-1.5">
                    {item.title}
                  </div>
                  <p className="text-xs md:text-sm text-white/90 whitespace-pre-line">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Text block */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center"
            >
              <Image src={"/images/logistics/logistics_t.webp"} alt={""} width={500} height={300} className="rounded-2xl shadow-sm"/>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* WAREHOUSING */}
      <SectionWrapper bg="light">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 min-h-[80vh] flex justify-center items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
            className="grid gap-10 md:grid-cols-2 md:items-center"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--dark-background)] text-white mb-2">
                <FaBox className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Warehousing</h3>
              <p className="text-sm md:text-base text-[var(--text-dark)]/80">
                Advanced warehousing solutions with customized operations and nationwide coverage.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              className="flex flex-col gap-4 border-l border-[var(--dark-background)]/10 pl-4 md:pl-6"
            >
              {data.warehouse.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-black/5"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/60 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="text-lg font-semibold mb-1.5">
                    {item.title}
                  </div>
                  <p className="text-sm text-[var(--text-dark)]/85">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}

// Small helper to keep background logic clean per section
function SectionWrapper({
  bg,
  children,
}: {
  bg: "white" | "dark" | "light";
  children: React.ReactNode;
}) {
  if (bg === "dark") {
    return (
      <section className="bg-[var(--dark-background)] text-white">
        {children}
      </section>
    );
  }
  if (bg === "light") {
    return (
      <section className="bg-[var(--background-lightGrey)]/60">
        {children}
      </section>
    );
  }
  return <section className="bg-white">{children}</section>;
}
