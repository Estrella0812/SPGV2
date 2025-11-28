"use client";

import { motion } from "motion/react";
import { services } from "../logistics/components/ourServices";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};


export default function IT(){
    return(
        <>

            <div className="h-4/5 w-full">
                <div className="bg-[var(--background-grey)] main-slider relative">
                <div style={{
                    backgroundImage: `url("https://spgltd.s3.us-east-2.amazonaws.com/main/4.webp")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                }}/>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute lg:p-12 lg:ml-[10vh] p-4 text-white slider-text">
                    <motion.div className="lg:text-4xl text-2xl font-bold "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true}}
                        variants={fadeUp}
                    >
                        SPG IT INFRASTRUCTURE &amp;<br/> SECURITY SOLUTION
                        </motion.div>
                </div>
                </div>
            </div>

          <section className="bg-[var(--background)] text-[var(--text-dark)] py-20">
            {/* Intro / heading */}
            <div className="pt-20 px-4 min-h-[40vh] flex items-center">
              <motion.div
                className="max-w-3xl mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={containerVariants}
              >
                <motion.p
                  variants={fadeUp}
                  className="lg:text-3xl text-xl font-bold pb-4"
                >
                  SPG IT INFRASTRUCTURE &amp; SECURITY SOLUTION
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-sm md:text-base leading-relaxed text-[var(--text-dark)]/85"
                >
                  At SPG, we specialize in providing complete IT &amp; SECURITY
                  technology installation services to help businesses of all sizes
                  set up, manage, and maintain efficient and scalable network
                  infrastructures. Whether you&apos;re setting up a new building,
                  relocating to a new warehouse, or upgrading existing systems, our
                  team ensures seamless installation and configuration of all
                  critical IT systems.
                </motion.p>
              </motion.div>
            </div>

            {/* Services grid */}
            <div className="py-16 px-2 min-h-[90vh] flex items-center">
              <motion.div
                className="max-w-6xl mx-auto w-full grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                {services.slice(3, 9).map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="relative w-full h-[280px] lg:h-[310px] bg-white rounded-2xl overflow-hidden shadow-sm"
                  >
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-[var(--text-dark)]">
                      <div
                        className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full rounded-full bg-[#ececec] text-[#1c1b1b]"
                        dangerouslySetInnerHTML={{ __html: service.iconHTML }}
                      />
                      <div>
                        <p className="text-lg font-semibold">{service.title}</p>
                        <p className="text-sm mt-2 text-[var(--text-dark)]/80">
                          {service.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </>
    );
}