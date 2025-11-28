'use client'
import MapLocations from "./location";
import { FaTruck } from "react-icons/fa6";
import { FaWarehouse, FaBuilding } from "react-icons/fa";
import { FaRegKeyboard, FaRegHeart } from "react-icons/fa";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

const emails=[
    {
        type: "Logistics",
        email: "julian.ko@spgltd.ca",
        icon: FaTruck,
    },{
        type: "Comound",
        email: "soonyeong.kweon@spgltd.ca",
        icon: FaWarehouse,
    },{
        type: "IT",
        email: "julian.ko@spgltd.ca",
        icon: FaRegKeyboard,
    },{
        type: "Agency",
        email: "henry.bae@spgltd.ca",
        icon: FaBuilding,
    },{
        type: "NPO",
        email: "info@spgnpo.org",
        icon: FaRegHeart,
    },
]

export default function contactUs(){
    const topRow = emails.slice(0, 3);
    const bottomRow = emails.slice(3);

    const handleOpenGmail = (email: string) => {
        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return(
        <>
        
            {/* Contact Us */}
            <section className="bg-[var(--background)] ">
                <div className="flex jsutify-center items-center w-full text-center h-[150px] bg-[var(--dark-background)]">
                    <div className="w-full text-[var(--background-lightGrey)]">
                        <h1 className="lg:text-3xl text-2xl font-bold">CONTACT US</h1>
                        <h2 className="text-lg">SPG always here to help</h2>
                    </div>
                </div>

                <section className="min-h-[80vh] flex justify-center items-center">
                <motion.div
                    className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="flex flex-col items-center gap-10">
                    {/* Top row: 3 cards */}
                    <div className="flex flex-wrap justify-center gap-8 w-full">
                        {topRow.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -6, scale: 1.02 }}
                            variants={cardVariants}
                            className="border-2 border-[var(--dark-background)] rounded-xl shadow-md p-6 flex flex-col items-center text-center w-full sm:w-[280px] lg:w-[320px] backdrop-blur"
                        >
                            <div className="mb-4 inline-flex items-center justify-center rounded-full p-3 bg-[var(--text-dark)]/5">
                            <item.icon className="w-7 h-7 text-[var(--text-dark)]" />
                            </div>

                            <h3 className="text-lg font-semibold mb-1 text-[var(--text-dark)]">
                            {item.type}
                            </h3>

                            <a
                            href={`mailto:${item.email}`}
                            className="text-sm text-[var(--dark-background)]/80 underline break-all"
                            >
                            {item.email}
                            </a>

                            <div className="mt-4 flex gap-3">
                            <button
                                type="button"
                                onClick={() => handleOpenGmail(item.email)}
                                className="text-xs px-3 py-1.5 rounded-xl bg-[var(--dark-background)] text-[var(--text-light)] hover:bg-[var(--dark-background)]/75 transition"
                            >
                                Open in Gmail
                            </button>
                            </div>
                        </motion.div>
                        ))}
                    </div>

                    {/* Bottom row: 2 cards centered */}
                    {bottomRow.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-8 w-full">
                        {bottomRow.map((item, index) => (
                            <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="border-2 border-[var(--dark-background)] rounded-xl  shadow-md p-6 flex flex-col items-center text-center w-full sm:w-[280px] lg:w-[320px] backdrop-blur"
                            >
                            <div className="mb-4 inline-flex items-center justify-center rounded-full p-3 bg-[var(--text-dark)]/5">
                                <item.icon className="w-7 h-7 text-[var(--text-dark)]" />
                            </div>

                            <h3 className="text-lg font-semibold mb-1 text-[var(--text-dark)]">
                                {item.type}
                            </h3>

                            <a
                                href={`mailto:${item.email}`}
                                className="text-sm text-[var(--text-dark)]/80 underline break-all"
                            >
                                {item.email}
                            </a>

                            <div className="mt-4 flex gap-3">
                                <button
                                type="button"
                                onClick={() => handleOpenGmail(item.email)}
                                className="text-xs px-3 py-1.5 rounded-xl bg-[var(--dark-background)] text-[var(--text-light)] hover:bg-[var(--dark-background)]/75 transition"
                                >
                                Open in Gmail
                                </button>
                            </div>
                            </motion.div>
                        ))}
                        </div>
                    )}
                    </div>
                </motion.div>
                </section>
            </section>




            {/* LOCATION */}
            <section className="bg-white">
                <div className="flex jsutify-center items-center w-full text-center h-[150px] bg-[var(--dark-background)]">
                    <div className="w-full text-[var(--background-lightGrey)]">
                        <h1 className="lg:text-3xl text-32xl font-bold">Location</h1>
                        <h2 className="text-lg">Where to Find Us</h2>
                    </div>
                </div>
                <MapLocations></MapLocations>
            </section>
        </>
    );
}