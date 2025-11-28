"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

const industriesObjects = [
  {
    title: "Automotive, Aeronautics & Mobility",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/automotive.webp",
    description:
      "SPG Agency is a trusted partner for the largest aerospace engineering, automotive, and mobility companies. We work with you to deliver innovative recruitment solutions that drive industry excellence and technological advancement.",
  },
  {
    title: "Business Services",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/business.webp",
    description:
      "We understand that every successful business is founded on motivated and experienced workforce. This is why SPG Agency is dedicated to offering Business Services tailored to your specific operational requirements and growth objectives.",
  },
  {
    title: "Catering & Hospitality",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/catering.webp",
    description:
      "For years, SPG Agency has placed thousands of associates in events and catering jobs and staffed hospitality businesses around the world. We partner with you to deliver innovative service solutions that exceed expectations.",
  },
  {
    title: "Construction & Engineering",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/construction.webp",
    description:
      "SPG Agency partners with both skilled construction workers and top construction companies. We'll work together to deliver your blueprint for success through precision planning and expert execution.",
  },
  {
    title: "Energy",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/energy.webp",
    description:
      "SPG Agency delivers quality energy sector staffing services and is a trusted partner in the energy industry. Let's unite to deliver innovative recruitment solutions that guarantee long-term operational success and sustainability.",
  },
  {
    title: "Healthcare",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/healthcare.webp",
    description:
      "SPG Agency's medical staffing solutions, as part of the medical and life sciences division, have been an integral part of the company for decades. We specialize in placing contract healthcare professionals across Canada's leading medical institutions.",
  },
  {
    title: "Logistics & Transportation",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/transportation.webp",
    description:
      "SPG Agency is a trusted partner within the logistics and transportation industry and works closely with the world's best companies to deliver innovative recruitment solutions that drive supply chain excellence and operational efficiency.",
  },
  {
    title: "Manufacturing",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/manufacture.webp",
    description:
      "SPG Agency supports thousands of manufacturing companies every day. We partner with you to fill assembly jobs and more to build a team that delivers results and ensures continued production success across Canada's industrial sector.",
  },
  {
    title: "Retail Sales & Services",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/retail.webp",
    description:
      "SPG Agency is a trusted partner amongst the top retail companies. We provide qualified talent within the retail sales and services industry with our innovative recruitment solutions that enhance customer experience and drive business growth.",
  },
  {
    title: "Technology",
    imageURL:
      "https://spgltd.s3.us-east-2.amazonaws.com/agency-career/technology.webp",
    description:
      "SPG Agency, a reliable partner in tech recruitment, continuously drives success in the fields of technology, engineering, mathematics, and more through our diverse portfolio of specialized IT professionals and technical experts.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function Home() {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-[var(--background)] text-[var(--text-dark)]">
      {/* HERO */}
      <section className="w-full">
        <div className="main-slider relative h-[260px] md:h-[360px]">
          <div
            style={{
              backgroundImage:
                'url("https://spgltd.s3.us-east-2.amazonaws.com/main/3.webp")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
          <motion.div
            className="absolute inset-0 flex items-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="absolute container lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
              <div className="lg:text-5xl text-4xl font-bold">SPG AGENCY</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUTTONS */}
      <section className="py-14 md:py-32 min-h-[50vh] flex items-center">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto lg:px-0 px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          {[
            {
              href: "#workforce-solutions",
              label: (
                <>
                  Workforce Solutions &amp; <br />
                  Operational Support
                </>
              ),
            },
            {
              href: "#talent-quality",
              label: (
                <>
                  Talent Quality Assurance <br /> &amp; Compliance
                </>
              ),
            },
            {
              href: "#our-industries",
              label: <>Our Industries</>,
            },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <Link
                href={item.href}
                className="h-full w-full border-t border-b border-[var(--text-dark)] group px-2 block"
                prefetch={false}
              >
                <div className="flex h-full items-center justify-center gap-x-4 py-4">
                  <div className="text-lg md:text-xl font-semibold mt-4 mb-2 text-center">
                    {item.label}
                  </div>
                  <div
                    className="rounded-full bg-[var(--text-dark)] text-white w-8 h-8 flex items-center justify-center ml-2
                    transition-all duration-300 group-hover:bg-gray-400 group-hover:text-[var(--text-dark)] group-hover:translate-x-1"
                  >
                    ❯
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Workforce Solutions */}
      <section className="scroll-mt-20 bg-[var(--dark-background)] text-[var(--text-light)]"
        id="workforce-solutions"
      >
        <div className="max-w-7xl mx-auto px-8 py-32 ">
          <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Workforce Solutions &amp; Operational Support
            </div>
            <div className="text-sm md:text-base leading-relaxed space-y-3">
              <p className="font-medium">
                Professional Staffing Services &amp; Consulting
              </p>
              <p>
                SPG Agency provides specialized staffing services focused on
                logistics and warehouse operations. Our skilled professionals
                maximize operational efficiency for our clients.
              </p>

              <div>
                <div className="font-semibold text-lg mt-4">
                  Professional Staff Deployment
                </div>
                <ul className="list-disc ml-6 mt-1 space-y-1 text-sm md:text-base">
                  <li>
                    <span className="font-medium">Experienced Professionals:</span>{" "}
                    Skilled personnel with expertise in logistics and warehouse
                    operations
                  </li>
                  <li>
                    <span className="font-medium">Systematic Training:</span>{" "}
                    Continuous education programs to enhance service quality
                  </li>
                  <li>
                    <span className="font-medium">Flexible Placement:</span>{" "}
                    Customized staffing solutions tailored to client requirements
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl overflow-hidden shadow-md h-[90%] mt-10"
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/agency/agency_1.webp"
                alt=""
                fill // <-- lets Image cover the parent
                className="object-cover"
                style={{ objectPosition: "center calc(100% - 65%)" }}
                sizes="(min-width: 768px) 588px, 400px"
                priority={false}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl overflow-hidden shadow-md h-[90%] mt-10"
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/agency/agency_2.webp"
                alt=""
                fill // <-- lets Image cover the parent
                className="object-cover"
                style={{ objectPosition: "center calc(100% - 65%)" }}
                sizes="(min-width: 768px) 588px, 400px"
                priority={false}
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div>
              <div className="font-semibold text-lg mt-4">
                Warehouse Operations Consulting
              </div>
              <ul className="list-disc ml-6 mt-1 space-y-1 text-sm md:text-base">
                <li>
                  <span className="font-medium">
                    Operational Optimization:
                  </span>{" "}
                  Analysis of warehouse efficiency and improvement
                  recommendations
                </li>
                <li>
                  <span className="font-medium">Process Enhancement:</span>{" "}
                  Standardization and optimization of operational processes
                </li>
                <li>
                  <span className="font-medium">Cost Reduction:</span>{" "}
                  Strategic consulting for operational cost savings
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-lg mt-4">
                Tailored Solutions
              </div>
              <ul className="list-disc ml-6 mt-1 space-y-1 text-sm md:text-base">
                <li>
                  <span className="font-medium">Industry Expertise:</span>{" "}
                  Specialized services for tires, electronics, automotive
                  parts, and other sectors
                </li>
                <li>
                  <span className="font-medium">Rapid Response:</span> Quick
                  service improvements based on client feedback
                </li>
                <li>
                  <span className="font-medium">Quality Management:</span>{" "}
                  Continuous monitoring to ensure service quality standards
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* Talent Quality */}
      <section className="scroll-mt-20"
        id="talent-quality"
      >
        <div className="max-w-7xl mx-auto px-8 py-32 ">
          <motion.div className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Talent Quality Assurance &amp; Compliance
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden shadow-md min-h-[260px] h-full"
            >
              <Image
                src={"/images/agency/agency__3.webp"}
                alt={""}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="text-sm md:text-base leading-relaxed space-y-3">
                <div>
                  <div className="font-semibold text-lg">
                    Comprehensive Talent Management
                  </div>
                  <p className="mt-1">
                    SPG Agency ensures quality from recruitment to placement and
                    beyond.
                  </p>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>Pre-interviews and job-fit assessments</li>
                    <li>
                      Regular feedback from clients and onsite performance
                      evaluations
                    </li>
                    <li>
                      Reallocation of top-performing associates as needed
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="font-semibold text-lg mt-4">
                    Compliance &amp; Trust
                  </div>
                  <p className="mt-1">
                    SPG Agency is a fully registered and insured staffing firm,
                    compliant with all provincial and federal standards.
                  </p>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>WSIB registered / Liability insurance covered</li>
                    <li>Transparent payroll and employee management practices</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Industries */}
      <section
        className="max-w-7xl mx-auto px-8 py-32 scroll-mt-20"
        id="our-industries"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <div className="text-3xl font-bold text-center">Industries</div>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6"
          >
            {industriesObjects.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
                className="bg-white rounded-xl shadow-md flex flex-col cursor-pointer overflow-hidden transition-transform"
                onClick={() => setPopupIndex(index)}
              >
                <Image
                  src={industry.imageURL}
                  alt={industry.title}
                  height={200}
                  width={400}
                  className="rounded-t-xl object-cover h-40 w-full"
                />
                <div className="px-4 py-4 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-base md:text-lg font-semibold mb-2">
                      {industry.title}
                    </div>
                    <div className="text-sm line-clamp-3">
                      {industry.description}
                    </div>
                  </div>
                  <div className="text-right text-xs md:text-sm text-blue-500 mt-3">
                    Learn More
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Popup Modal */}
      {popupIndex !== null && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setPopupIndex(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-1 right-3 text-white hover:text-gray-200 text-3xl font-extrabold z-10"
              onClick={() => setPopupIndex(null)}
            >
              ×
            </button>

            <Image
              src={industriesObjects[popupIndex].imageURL}
              alt={industriesObjects[popupIndex].title}
              height={200}
              width={400}
              className="object-cover w-full"
            />
            <div className="p-12 flex flex-col">
              <div className="text-lg md:text-xl font-semibold mb-4">
                {industriesObjects[popupIndex].title}
              </div>
              <div className="text-sm md:text-base text-gray-700 leading-relaxed">
                {industriesObjects[popupIndex].description}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
