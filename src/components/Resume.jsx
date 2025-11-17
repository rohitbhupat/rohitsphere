import React from "react";
import { FileDown } from "lucide-react";
import { motion } from "framer-motion";
import resumePdf from "../asset/Rohit_Bhupat_Resume.pdf"

export default function Resume() {
    return (
        <section id="resume" className="py-20 bg-gray-900 text-white text-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6 text-sky-400">Resume</h2>
                    <p className="mb-6">
                        Download my resume to get detailed insights about my skills,
                        certifications, and experience.
                    </p>
                    <a
                        href={resumePdf}
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 transition"
                    >
                        <FileDown className="w-5 h-5" />
                        Download Resume
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
