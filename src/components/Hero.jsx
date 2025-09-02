import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[72vh] grid place-items-center px-6 py-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="max-w-3xl">
                    <p className="uppercase tracking-widest text-cyan-400 text-xs mb-2">Hello, I am</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent mb-3">
                        Rohit Bhupat
                    </h1>
                    <p className="text-gray-400 text-lg mb-6">
                        Building clean, performant, and human-centered digital experiences.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#projects" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition">
                            View Projects
                        </a>
                        <a href="#contact" className="px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium transition">
                            Contact Me
                        </a>
                    </div>
                </div>
            </motion.div>
            <div className="absolute inset-0 bg-[radial-gradient(600px_280px_at_50%_20%,rgba(91,140,255,.25),transparent_60%)] pointer-events-none"></div>
        </section>
    );
}
