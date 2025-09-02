import React from "react";
import { motion } from "framer-motion";

const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Javascript (ES6+)",
    "Python",
    "Django",
    "Node.js",
    "Express.js",
    "MongoDB",
    "React.js",
    "AWS Cloud",
    "Databases (SQL & NoSQL)",
    "PostgreSQL",
    "Git & GitHub",
    "AWS Serverless",
    "Postman",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Jenkins",
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >

                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-sky-400">
                        Skills & Tools
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-4 border border-white/10 bg-white/5 rounded-xl shadow hover:shadow-sky-400/20 transition"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
