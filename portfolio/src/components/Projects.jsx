import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "ResQNow",
        type: "AWS Serverless Project",
        desc: "Built an emergency alert platform using AWS (Cognito, Lambda, DynamoDB, S3, SNS, CloudFront). Enabled real-time SOS alerts with a live admin map for tracking incidents. Designed fully serverless architecture with secure authentication and scalability.",
        img: "/project1.jpg",
        live: "#",
        code: "#",
    },
    {
        id: 2,
        title: "Artiv",
        type: "MScIT Project",
        desc: "Developed a creative web-based platform for interactive art experiences. Focused on UI/UX design, frontend interactivity, and database-driven dynamic content. Built with modern JavaScript and database technologies for smooth user experience.",
        img: "/project2.jpg",
        live: "#",
        code: "#",
    },
    // {
    //     id: 3,
    //     title: "Portfolio Website",
    //     type: "MERN + AWS",
    //     desc: "Designed and deployed my personal portfolio using React, Tailwind, Node.js, and AWS services. Features dark/light mode, animations, and dynamic sections for projects, skills, and achievements. Hosted on AWS S3 + CloudFront with CI/CD deployment.",
    //     img: "/project3.jpg",
    //     live: "#",
    //     code: "#",
    // },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-sky-400">Projects</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {projects.map((p) => (
                            <div
                                key={p.id}
                                className="border border-white/10 rounded-xl overflow-hidden shadow hover:shadow-sky-400/20 transition"
                            >
                                <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                                    <p className="text-sm text-sky-300 mb-3">{p.type}</p>
                                    <p className="text-sm mb-4 whitespace-pre-line">{p.desc}</p>
                                    <div className="flex gap-4">
                                        <a
                                            href={p.live}
                                            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 transition"
                                            target="_blank"
                                        >
                                            Live
                                        </a>
                                        <a
                                            href={p.code}
                                            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                                            target="_blank"
                                        >
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
