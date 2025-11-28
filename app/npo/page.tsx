"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence  } from "motion/react";
import { useState } from "react";

const ourImpact=[
  {
    title: "Connecting Generations",
    description: "From 7-year-olds to seniors in their 60s, we play and cheer together on the same field, building mutual understanding."
  },{
    title: "Growing Community",
    description: "Players gathering across Toronto every week create relationships beyond the game, building lifelong friendships."
  },{
    title: "Preparing the Future",
    description: "Youth develop into players and leaders through systematic training and mentorship."
  },{
    title: "Growing Together",
    description: "Golf, table tennis, baseball, soccer - we collaborate with multiple sports communities to advance Toronto's entire Korean-Canadian sports ecosystem."
  },{
    title: "Expanding Horizons",
    description: "From Ontario League to National Sports Festival, our players represent Canada on the world stage."
  }
]

const whatWeDo=[
  {
    title: "Sports Community",
    subtitle: "Multi-Sport Ecosystem Development",
    description: [
      "Support for Canadian Korean Sports Associations",
      "SPG Red Devils United representative team operations",
      "New non-profit sports program development and pilot projects",
    ]
  },{
    title: "League Operations",
    subtitle: "Year-Round Multi-Division Sports Leagues",
    description: [
      "Summer League: 15 weeks",
      "Winter League: 20 weeks",
      "6 Divisions: Youth (7U, 12U), Young Adult, Middle-age, Senior, Women’s",
    ]
  },{
    title: "Tournaments",
    subtitle: "Premier Competitive Event Operations",
    description: [
      "Summer Tournaments (SPG Cup, President’s Cup)",
      "Winter Tournaments (Asian Cup)",
      "Youth Tournaments (SPG Youth Cup)",
    ]
  },{
    title: "Youth Programs",
    subtitle: "Next Generation Player Development Programs",
    description: [
      "Youth Sports Academy (ages 7-12)",
      "Systematic training with professional coaching staff",
      "Youth tournament and competition experience",
    ]
  }
]

const ourOrganization=[
  {
    title: "SPG NPO",
    description:[
      "New non-profit sports program planning and operations",
      "Community sports event organization",
      "Multicultural sports exchange program operations"
    ]
  },{
    title: "KSCA",
    description:[
      "6 Divisions: Youth (7U, 12U), Young Adult, Middle-age, Senior, Women’s",
      "Major tournament organization (Association President Cup, SPG Cup, Asian Cup, SPG Youth Cup)",
      "Youth soccer academy operations"
    ]
  },{
    title: "SPG Red Devils United",
    description:[
      "Ontario Soccer League (OSL) participation - Provincial promotion",
      "Pan-American Sports Festival & National Sports Festival Canada representative",
      "Open Age Team / O35 Team"
    ]
  },
]

const joinUs=[
  {
    title: "Player Registration",
    description: [
      "League and tournament participation",
      "Online Registration | Fee Information | Season Schedule"
    ],
    link: ""
  },{
    title: "Sponsorship & Partnership",
    description: [
      "Corporate sponsorship and community collaboration",
      "Naming Rights | Tournament Sponsorship | Advertising Packages"
    ],
    link: ""
  },{
    title: "Volunteer",
    description: [
      "Recruiting coaches, referees, event supporters",
      "Training Programs | Community Contribution"
    ],
    link: ""
  }
]

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45 },
  },
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

const branchVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function NPOPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = whatWeDo[activeIndex];

  
  return (
    <div className="min-h-screen w-full bg-[var(--background-lightGrey)]">
      {/* HERO */}
      <div className="justify-center main-slider w-full">
        <div className="main-slider relative">
          {/* Background image */}
          <Image
            src="/images/npo/main.webp" // <- put your hero image here
            alt="SPG NPO hero background"
            fill
            priority
            sizes="100vw" 
            className="object-cover object-bottom"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Text */}
          <div className="absolute inset-0 flex items-center">
            <div className="container lg:p-12 lg:ml-[10vh] p-4 text-white slider-text">
              <motion.div className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              >
                <div className="lg:text-4xl text-2xl font-bold mb-2">SPG NPO</div>
                <div className="text-xl">Connecting Generations Through Sports, Building Healthy Communities</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Who we are */}
      <section className="text-[var(--dark-background)] py-32 px-8 min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
        >
          <div className="text-3xl font-bold mb-8">Who We Are</div>
        </motion.div>
        <motion.div
          className="mx-auto max-w-7xl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 items-center">
            {/* Image */}
            <motion.div
              variants={slideInRight}
              className="rounded-2xl overflow-hidden relative min-h-[260px] shadow-md"
            >
              <Image
                src="/images/npo/npo_1.webp"
                alt="SPG NPO sports community"
                fill
                sizes="300px"
                className="object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp}
              className="text-center"
            >
              <div>
                SPG NPO is a Toronto-based non-profit sports foundation operating
                an integrated sports community for all generations from youth to
                seniors.
                <br />
                <br />
                We create value beyond competition. Young players learn from the
                experience of their seniors, while veteran players gain energy
                from the passion of youth. Our fields are spaces where generations
                meet, friendships begin, and communities unite.
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={slideInRight}
              className="rounded-2xl overflow-hidden relative min-h-[260px] shadow-md"
            >
              <Image
                src="/images/npo/npo_2v2.webp"
                alt="SPG NPO sports community"
                fill
                sizes="300px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>



      {/* Our impact */}
      <section className="flex flex-col items-center justify-center pt-16 pb-32 px-8 min-h-[80vh]">
        <div className="text-3xl font-bold text-[var(--text-dark)] mb-14">
          Our Impact
        </div>
        <motion.div
          className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          {/* Left column: title + long first card */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <div className="rounded-2xl bg-white px-5 py-6 shadow-sm ring-1 ring-black/5 h-full flex flex-col justify-center">
              <div className="text-lg font-semibold mb-2">
                {ourImpact[0].title}
              </div>
              <p className="text-sm md:text-[0.95rem] text-[var(--text-dark)]/85 leading-relaxed">
                {ourImpact[0].description}
              </p>
              <div className="flex justify-center">
                <Image
                  src="/images/npo/OI_1.png"
                  alt="SPG NPO sports community"
                  width={280}
                  height={250}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Middle column: next 2 cards stacked */}
          <motion.div
            variants={stagger}
            className="flex flex-col gap-4"
          >
            {ourImpact.slice(1, 3).map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl bg-white px-5 py-6 shadow-sm ring-1 ring-black/5 h-full"
              >
                <div className="text-base md:text-lg font-semibold mb-1.5">
                  {item.title}
                </div>
                <p className="text-sm md:text-[0.95rem] text-[var(--text-dark)]/85 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column: last 2 cards stacked */}
          <motion.div
            variants={stagger}
            className="flex flex-col gap-4"
          >
            {ourImpact.slice(3, 5).map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl bg-white px-5 py-6 shadow-sm ring-1 ring-black/5 h-full"
              >
                <div className="text-base md:text-lg font-semibold mb-1.5">
                  {item.title}
                </div>
                <p className="text-sm md:text-[0.95rem] text-[var(--text-dark)]/85 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      
      {/* WHAT WE DO */}
      <section className="py-32 px-8 bg-[var(--dark-background)] text-[var(--text-dark)] min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div
          className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-8 max-w-3xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              What We Do
            </h2>
          </motion.div>

          {/* 2-column layout */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* LEFT: detail content */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-white px-6 py-6 md:px-8 md:py-8 h-full min-h-[260px] w-[550px]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-dark)]/60 mb-2">
                Focus Area
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1 flex flex-col justify-center gap-6"
                >
                  {/* Title + subtitle */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">
                      {activeItem.title}
                    </h3>
                    <p className="text-sm md:text-base text-[var(--text-dark)]/80">
                      {activeItem.subtitle}
                    </p>
                  </div>

                  {/* Key points as numbered rows */}
                  <div className="space-y-3">
                    {activeItem.description.map((line, idx) => (
                      <div
                        key={line}
                        className="flex items-start gap-3 rounded-2xl bg-[var(--background-lightGrey)] px-3 py-2.5"
                      >
                        <div className=" shrink-0 mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--dark-background)] text-white text-xs font-semibold">
                          ●
                        </div>
                        <p className="text-sm md:text-[0.95rem] font-medium text-[var(--text-dark)] leading-relaxed">
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </motion.div>

            {/* RIGHT: selectable buttons */}
            <motion.div
              variants={stagger}
              className="flex flex-col gap-3"
            >
              {whatWeDo.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    variants={fadeUp}
                    whileTap={{ scale: 0.98 }}
                    className={[
                      "w-full rounded-2xl px-5 py-4 text-left transition-all border shadow-sm",
                      isActive
                        ? "text-white border-[var(--dark-background)] bg-white/10"
                        : "bg-white text-[var(--text-dark)] border-black/5 hover:bg-white/80",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-1 text-[inherit]/70">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className="text-base md:text-lg font-semibold">
                          {item.title}
                        </div>
                        <p className="text-xs md:text-sm mt-1 opacity-80 line-clamp-2">
                          {item.subtitle}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <span
                          className={[
                            "inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold border",
                            isActive
                              ? "border-white/40 bg-white/10"
                              : "border-[var(--text-dark)]/20 bg-[var(--background-lightGrey)]",
                          ].join(" ")}
                        >
                          {isActive ? "●" : "○"}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>


      {/* Our Organization */}
      <section className="flex flex-col items-center justify-center py-32 min-h-[90vh]">
        <div className="flex flex-col items-center w-full max-w-6xl">
          {/* Top node: SPG / Foundation Management */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >  
            <div className="text-4xl font-bold mb-8 w-full text-center">Our Organization</div>
            <div className="inline-flex flex-col items-center justify-center rounded-full bg-[var(--dark-background)] px-8 py-6 shadow-sm">
              <span className="text-3xl font-bold tracking-wide text-white">
                SPG
              </span>
              <span className="mt-1 text-smuppercase tracking-[0.18em] text-white">
                Foundation Management
              </span>
            </div>
          </motion.div>

          {/* Trunk + branches + content all share one container */}
          <div className="w-fulll">
            {/* Trunk */}
            <motion.div
              className="mx-auto bg-[var(--dark-background)] w-[2px] h-[70px]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              style={{ originY: 0 }}
            />

            {/* Horizontal line + 3 branches */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
              className="relative mt-0"
            >
              {/* Horizontal branch line across whole grid */}
              <motion.div
                className="absolute inset-0 top-0 bg-[var(--dark-background)] h-[2px] w-[69%] mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                style={{ originX: 0.5 }}
              />

              {/* Grid of 3 branches */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {ourOrganization.map((org, index) => (
                  <motion.div
                    key={org.title}
                    variants={branchVariants}
                    className="flex flex-col items-centerleading-relaxed"
                  >
                    {/* Vertical connector from horizontal line to each branch */}
                    <motion.div
                      className="bg-[var(--dark-background)] w-[2px] h-[70px] mx-auto"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.3 + index * 0.1,
                      }}
                      style={{ originY: 0 }}
                    />
                    <div className="rounded-2xl shadow-sm ring-2 ring-[var(--dark-background)] bg-white px-8 py-6 shadow-sm h-full flex flex-col justify-center">
                      <h3 className="text-lg md:text-xl font-semibold mb-2">
                        {org.title}
                      </h3>
                      <div className="space-y-2 text-left text-[var(--text-dark)]/85">
                        {org.description.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      

      {/* How To Join */}
      <section className="max-w-6xl mx-auto py-32 min-h-[90vh]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="text-4xl font-bold mb-8"
            variants={fadeUp}
          >
            How To Join
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 grid-cols-1 gap-6"
            variants={stagger}
          >
            {joinUs.map((data, index)=>(
              <motion.div
              key={index}
              variants={fadeUp}
              className="rounded-2xl bg-white px-5 py-6 shadow-sm ring-1 ring-black/5 h-full flex flex-col justify-center items-center space-y-2"
              >
                <Image
                  src={`/images/npo/npo_5-${index+1}.webp`}
                  alt=""
                  height={400}
                  width={200}
                  className="rounded-xl"
                />
                <div className="text-lg font-semibold my-4">{data.title}</div>
                {data.description.map((line, i)=>(
                  <div key={i} className="text-sm text-center text-gray-600">
                    {line}
                  </div>
                ))}
                <button className="mt-4 bg-[var(--dark-background)] text-[var(--background)] rounded-full px-4 py-2 text-sm font-medium hover:bg-[var(--dark-background)]/80 transition-colors">
                  Click Here
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}


