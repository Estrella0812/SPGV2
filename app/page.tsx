'use client';
import MindMap from "@/components/main/mindMap_1";
import Image from "next/image";
import { PartnerSlider, PartnerSlider2OF2 } from "@/components/parterSlider";
import { motion } from "motion/react";

export default function Home(){
  return(
    <>
      <MindMap></MindMap>

      {/* ABT US */}
      <motion.section
        className="max-w-6xl mx-auto my-40 px-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pt-10 lg:text-4xl text-3xl font-bold text-center text-[var(--text-dark)]">
          Who We Are
        </div>
        <hr className="border-t-4 border-[var(--text-dark)] w-12 mx-auto mt-2 mb-8" />

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <motion.div
            className="bg-[var(--background)] rounded-2xl overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={"/images/main/abt_1.webp"}
              alt={""}
              width={355}
              height={600}
            />
          </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="font-semibold">Special People Group</span> is an integrated logistics company leading the
            future of logistics across Canada. Since our founding, we have
            achieved remarkable success and earned the trust of numerous clients.
            We go beyond traditional logistics services, acting as a strategic
            partner that co-designs our clients&apos; value chains through
            innovative solutions and collaborative partnerships.
            <br />
            <br />
            At the heart of Special People Group&apos;s philosophy is a bold spirit of
            challenge, embracing risk and change, data-driven execution, and
            trust-based, people-centered management. In a rapidly evolving market,
            we strive to set new standards as a proactive logistics partner —
            predicting and solving challenges before they arise.
            <br />
            <br />
            The partnerships we seek are not simply outsourcing relationships but
            strategic collaborations aimed at driving mutual business growth.
            Guided by the belief that “Our clients’&apos; growth is our growth,” we aim
            to build long-term, trust-based relationships.
            <br />
            <br />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              As an ESG-focused company, Special People Group is committed to
              growing alongside the community, beyond just profit generation.
              Through our dedicated foundation, SPG NPO, we carry out initiatives
              centered on our core values: People, Trust, Innovation, and Social
              Responsibility.
              <br />
              <br />
              Looking ahead, Special People Group&apos;s vision is to deliver value
              beyond logistics and expand into global markets. With a foundation
              built on technology, networks, and people, we are poised for
              scalable growth not only in Canada, but across North America and
              Asia. At this very moment, SPG is at the forefront of change — ready
              to forge new paths with visionary partners.
            </div>

            <div className="bg-[var(--background)] w-full flex-1 mt-4 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={"/images/main/abt_2.webp"}
                alt={""}
                width={355}
                height={200}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      
      {/* PARTNERS */}
      <section className="min-h-[60vh] flex justify-center">
        <motion.div className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:text-4xl text-3xl mt-25 font-bold text-center text-[var(--text-dark)]">
            Our Partners
          </div>
          <hr className="border-t-4 border-[var(--text-dark)] w-12 mx-auto mt-2 mb-8"/>
          <div className="mb-35 lg:mt-12 mt-8">
              <div className="scroll1 scroll lg:mb-12 mb-8" style={{ "--time": "80s" } as React.CSSProperties}>
                <PartnerSlider></PartnerSlider>
              </div>
              <div className="scroll2 scroll" style={{ "--time": "40s" } as React.CSSProperties}>
                <PartnerSlider2OF2></PartnerSlider2OF2>
              </div>
            </div>
        </motion.div>
      </section>
    </>
  );
}