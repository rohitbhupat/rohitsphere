import React from "react";
import { motion } from "framer-motion";

const certs = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner (CLF-C02)",
        img: "/cert1.jpg",
    },
    {
        id: 2,
        title: "AWS Academy Graduate - Cloud Foundations",
        img: "/cert2.jpg",
    },
    {
        id: 3,
        title: "AWS Academy Graduate - Machine Learning",
        img: "/cert3.jpg",
    },
];

export default function Certification() {
    return (
        <section id="certifications" className="py-20 bg-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-sky-400">
                        Certifications & Achievements
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {certs.map((c) => (
                            <div
                                key={c.id}
                                className="border border-white/10 rounded-xl overflow-hidden hover:shadow-sky-400/20 transition"
                            >
                                <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{c.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
