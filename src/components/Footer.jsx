import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="py-6 bg-gray-950 text-gray-400 text-center text-sm">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <p>© {new Date().getFullYear()} Rohit Bhupat. All rights reserved.</p>
                <div className="flex justify-center gap-6 mt-3">
                    <a
                        href="https://github.com/rohitbhupat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <FaGithub size={22} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rohit-bhupat-554325237/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-sky-400 transition"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
}
