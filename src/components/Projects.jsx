import React from "react";
import { motion } from "framer-motion";
import resqnowImg from "../assets/resqnow.png"
import artivImg from "../assets/artiv.png"

const projects = [
    {
        id: 1,
        title: "ResQNow - Disaster Management",
        type: "AWS Serverless Project",
        desc: "Built an emergency alert platform using AWS (Cognito, Lambda, DynamoDB, S3, SNS, CloudFront, AppSync). Enabled real-time SOS alerts with a live admin map for tracking incidents. Designed fully serverless architecture with secure authentication and scalability.",
        img: resqnowImg,
        live: "https://d1xqanq559pt1x.cloudfront.net/",
        code: "https://github.com/rohitbhupat/resqnow",
    },
    {
        id: 2,
        title: "Artiv - Bid Online",
        type: "MScIT Project",
        desc: "Developed a creative web-based platform for interactive art experiences with AR integration and 360° artwork viewing. Implemented real-time bidding features for digital auctions, enhancing user engagement. Focused on modern UI/UX design, frontend interactivity, and database-driven dynamic content using JavaScript and database technologies.",
        img: artivImg,
        live: "https://www.artiv.co.in/",
        code: "https://github.com/rohitbhupat/artiv-auction",
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
                                className="border border-white/10 rounded-xl overflow-hidden shadow hover:shadow-sky-400/20 transition transform hover:scale-[1.01]"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
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
                                            GitHub
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
