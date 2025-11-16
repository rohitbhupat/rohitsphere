import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;

        const res = await fetch("https://7067cffcki.execute-api.ap-south-1.amazonaws.com/contact/portfolio_contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await res.json();
        alert(data.message || "Message sent!");
    };

    return (
        <section id="contact" className="py-20 bg-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >

                <div className="max-w-4xl mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold mb-10 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Contact
                    </motion.h2>

                    <motion.form onSubmit={handleSubmit}
                        className="bg-gray-900 rounded-2xl p-8 shadow-lg space-y-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                        </div>
                        <textarea
                            rows="4"
                            placeholder="Tell me about your project"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 transition text-white font-medium"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
}
