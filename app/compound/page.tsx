// app/vehicle-compound/page.tsx
'use client'

import Image from "next/image";
import { AnimatePresence, motion, number } from "motion/react";
import type { IconType } from "react-icons";
import {
  FaCarSide,
  FaRoad,
  FaClipboardCheck,
  FaExchangeAlt,
  FaChargingStation,
  FaCarBattery,
  FaMapMarkerAlt,
  FaWarehouse,
  FaShieldAlt,
  FaHardHat,
  FaUsersCog,
  FaClipboardList,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { useState, useEffect } from "react";

type ServiceItem = {
  title: string;
  description: string;
  Icon?: IconType;
};

const coreServices: ServiceItem[] = [
  {
    title: "Inbound Handling",
    description:
      "Receiving finished vehicles from the CPKC railhead, conducting inspection, and transferring units to assigned bays.",
    Icon: FaCarSide,
  },
  {
    title: "Outbound Preparation",
    description:
      "Managing Loadline and DPU staging to enable smooth, predictable dealer dispatch operations.",
    Icon: FaRoad,
  },
  {
    title: "Inspection & Quality Control",
    description:
      "Applying AIAG damage coding, digital photo documentation, and claim coordination via OEM/Glovis systems.",
    Icon: FaClipboardCheck,
  },
];

const valueAddedServices: ServiceItem[] = [
  {
    title: "Vehicle Repositioning (Yard Management)",
    description:
      "Optimizing yard flow and real-time visibility to reduce congestion and ensure timely vehicle readiness.",
    Icon: FaExchangeAlt,
  },
  {
    title: "EV Charging Support",
    description:
      "Dedicated charging zones and certified staff handling EV charging according to OEM specifications and site safety protocols.",
    Icon: FaChargingStation,
  },
  {
    title: "ICE Jump Start Service",
    description:
      "On-demand battery boost service for ICE vehicles to support inspection, repositioning, or outbound readiness without delay.",
    Icon: FaCarBattery,
  },
];

const facilityInfrastructure: ServiceItem[] = [
  {
    title: "Location",
    description:
      "St-Luc CPKC rail yard, GCI Compound in Montréal — directly adjacent to the CPKC railhead for fast and efficient vehicle flow.",
    Icon: FaMapMarkerAlt,
  },
  {
    title: "Capacity",
    description:
      "20-acre compound designed for high-volume operations, supporting daily rail unloading and outbound readiness for up to 70,000 vehicles per year.",
    Icon: FaWarehouse,
  },
  {
    title: "24-Hour Security",
    description:
      "Continuous on-site security operations to maintain a zero-incident environment and protect all assets within the compound.",
    Icon: FaShieldAlt,
  },
];

const operationalStandards: ServiceItem[] = [
  {
    title: "Safety First",
    description:
      "Zero-incident record supported by strict adherence to client policies and CNESST requirements across all shifts.",
    Icon: FaHardHat,
  },
  {
    title: "Dynamic Workforce Model",
    description:
      "Core staff plus a trained reserve pool for volume flexibility, surge coverage, and peak-season readiness.",
    Icon: FaUsersCog,
  },
  {
    title: "Quality System",
    description:
      "SOP-driven processes, KPI tracking, and a continuous improvement cycle aligned to OEM expectations.",
    Icon: FaClipboardList,
  },
];

const whyUs = [
  "Proven experience operating rail-adjacent vehicle compounds in high-volume environments.",
  "Tightly controlled yard standards that reduce damage risk and dwell time.",
  "Data-driven reporting, KPIs, and visibility tools aligned with OEM and logistics partners.",
  "Flexible staffing and processes designed to adapt to seasonal and daily volume swings.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function VehicleCompoundPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };


  return (
    <div className="bg-[#ececec] text-[#1c1b1b]">
      {/* HERO */}
      <section className="justify-center main-slider w-full">
        <div className="main-slider relative">
          {/* Background image */}
          <Image
            src="/images/compound/compound_main.webp" // <- put your hero image here
            alt="SPG NPO hero background"
            fill
            priority
            sizes="100vw" 
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

          {/* Text */}
          <div className="absolute top-[45%] lg:p-12 lg:ml-[10vh] p-4 text-white inset-0 flex items-center">
            <div className="">
              <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="absolute inset-0 flex items-centers container"
                >
                <div className="space-y-6">
                  <h1 className="text-2xl lg:text-4xl font-semibold leading-tight">
                    SPG Vehicle Compound
                    <span className="block lg:text-xl text-lg font-normal text-white mt-1">
                      Vehicle Compound Operation
                    </span>
                  </h1>

                  <p className="max-w-xl text-white text-md leading-relaxed">
                      In January 2026, SPG expanded its logistics capabilities with the launch of the Montréal Vehicle Compound in partnership with Glovis Canada Inc.
                      <br/>
                      Entering a new field of precision vehicle handling, SPG continues to deliver on its core values — customer focus, quality excellence, and operational precision.
                      <br/>
                      Through meticulous yard operations and uncompromising service, SPG exceeds expectations and drives measurable customer satisfaction.
                  </p>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] flex items-center">
        <div className="mx-auto max-w-6xl text-[var(--text-dark)]">
          <motion.div className="text-3xl font-bold mb-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}>
            Core Services</motion.div>
          <motion.div className="grid grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}>
              {coreServices.map((data, index)=>(
                <motion.div key={index} className="w-full rounded-2xl flex flex-col" variants={fadeUp}>
                  <Image src={`/images/compound/compound_1-${index+1}.webp`} alt={""} width={400} height={300} className="rounded-2xl"/>
                  <div className="py-7">
                    <div className="text-lg font-semibold mb-1">{data.title}</div>
                    <div className="text-md">{data.description}</div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      <section className="min-h-[80vh] flex items-center">
        <div className="mx-auto max-w-6xl text-[var(--text-dark)]">
          <motion.div className="text-3xl font-bold mb-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}>
            Value Added Services
          </motion.div>
          <motion.div className="grid grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}>
              <motion.div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5" initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}>
                  <Image src={"/images/compound/compound_2-1.webp"} alt={""} width={400} height={400} className="rounded-2xl w-full h-full object-cover"/>
              </motion.div>
              <div className="col-span-2 grid grid-cols-2 gap-4">
                {valueAddedServices.map((data, index)=>(
                  <motion.div key={index} className="w-full shadow-sm ring-1 ring-black/5 bg-white rounded-2xl flex items-start gap-3 px-6 py-7" variants={fadeUp}>
                    <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ececec]">
                      {data.Icon && (
                        <data.Icon className="h-4 w-4" />
                      )}
                    </div>
                    <div className="">
                      <div className="text-lg font-semibold mb-1">{data.title}</div>
                      <div className="text-md">{data.description}</div>
                    </div>
                  </motion.div>
                ))}
                <motion.div className="shadow-sm ring-1 ring-black/5 bg-white rounded-2xl max-h-[188px]" initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}>
                  <Image src={"/images/compound/compound_2-2.webp"} alt={""} width={380} height={188} className="rounded-2xl w-full h-full object-cover"/>
                </motion.div>
              </div>
          </motion.div>
        </div>
      </section>

      <section  className="min-h-[80vh] flex items-center bg-[var(--dark-background)] text-[var(--background)]">
        <motion.div className=" mx-auto max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* LEFT SIDE TITLE */}
          <div className="flex items-start lg:min-h-[280px]">
            <h2 className="text-3xl font-semibold leading-tight">
              Facility Infrastructure
            </h2>
          </div>

          {/* RIGHT SIDE ACCORDION */}
          <div className="space-y-4">
            {facilityInfrastructure.map((item, i) => (
              <div
                key={i}
                className="border-t border-b border-[var(--background)] p-4"
              >
                {/* ROW */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between"
                >
                  <span className="text-lg font-medium">{item.title}</span>

                  {openIndex === i ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </button>

                {/* DESCRIPTION DROPDOWN */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-[0.95rem] leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Values */}
      <section className="min-h-[80vh] flex items-center mx-auto max-w-6xl lg:px-0 px-4 py-10 pb-16 space-y-16 md:space-y-64">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className=""
        >
          <motion.div variants={fadeUp} className="mb-5 md:mb-7">
            <h2 className="text-xl md:text-3xl font-semibold text-[#1c1b1b]">
              Value
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {operationalStandards.map((item, index) => (
              <motion.div key={item.title} variants={fadeUp} className=" shadow-sm ring-1 ring-black/5 bg-white text-[#1c1b1b] px-6 py-7 rounded-2xl">
                <div className="flex flex-col items-start gap-18">
                  {item.Icon && (
                    <div className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ececec] text-[#1c1b1b]">
                      <item.Icon className="h-8 w-8" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="text-base md:text-lg font-semibold mb-1">
                      {item.title}
                    </div>
                    <p className="text-sm text-neutral-800/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </section>

        {/* WHY OUR COMPANY */}
        <div className="bg-white px-6 py-8 md:px-10 md:py-10 text-[var(--text-dark)] min-h-[80vh] flex items-center">
            <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto max-w-6xl"
            >
            <div className="flex flex-col justify-center items-center">
                <div className="mb-8 m-16">
                    <h2 className="text-3xl font-semibold text-center">
                        Why SPG
                    </h2>
                </div>

                <div className="flex flex-col space-y-3 md:max-w-md">
                {whyUs.map((point, idx) => (
                    <motion.div
                    key={point}
                    variants={fadeUp}
                    className="text-center"
                    >
                      {point}
                      <hr className="flex-1 border-t border-[var(--dark-background)] mt-3" />
                    </motion.div>
                ))}
                </div>
            </div>
            <div className="text-center mt-28 mb-16 text-4xl font-bold">SPG keeps vehicles - and trust - moving forward.</div>
            </motion.section>
        </div>
    </div>
  );
}

