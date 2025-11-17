import React from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import awsCertificate from "../asset/clf-c02.png";
import restartbadge from "../asset/aws-re-start-graduate.png"
import awsbadge from "../asset/clf-c02_badge.png"
const certs = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner (CLF-C02)",
        img: awsCertificate,
        issued: "Amazon Web Services Training and Certification",
        // desc: "Gained foundational knowledge of AWS services including EC2, S3, Lambda, API Gateway, VPC, Auto Scaling, Load Balancer, ECS, EKS, CloudFormation, IAM, CloudFront, FSx, and AWS databases."
    },
    {
        id: 2,
        title: "AWS CLF-C02 Badge",
        img: awsbadge,
        issued: "Amazon Web Services Training and Certification",
        // desc: "Validated foundational knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support. Gained practical understanding of how AWS global infrastructure enables scalable, reliable, and cost-efficient solutions."
    },
    {
        id: 3,
        title: "AWS re/Start Graduate Badge",
        img: restartbadge,
        issued: "Amazon Web Services Training and Certification",
        // desc: "Learned the core concepts of cloud computing, AWS global infrastructure, storage, compute, networking, databases, security, pricing, and support models."
    },
];

const extraSections = [
    // {
    //     id: 4,
    //     title: "Currently Pursuing - AWS Certified Solutions Architect (SAA-C03)",
    //     issued: "In Progress",
    //     desc: "Deepening knowledge in designing highly available, fault-tolerant, and cost-optimized solutions on AWS, with a strong focus on architecture best practices."
    // },
    {
        id: 5,
        title: "Frontend Development",
        issued: "Self-Learning",
        desc: "Learned HTML, CSS, Bootstrap, JavaScript, AJAX, and React for building responsive and interactive web applications."
    },
    {
        id: 6,
        title: "Backend Development",
        issued: "Self-Learning",
        desc: "Worked with Node.js, Express.js, Postman, and MongoDB to build APIs, manage databases, and create full-stack applications."
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
                        {[...certs, ...extraSections].map((c) => (
                            <div
                                key={c.id}
                                className="border border-white/10 rounded-xl overflow-hidden shadow hover:shadow-sky-400/20 transition transform hover:scale-[1.01]"
                            >
                                {c.img && (
                                    <img
                                        src={c.img}
                                        alt={c.title}
                                        className="w-full h-57 object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                )}
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                                    <p className="text-sm text-sky-300 mb-2">{c.issued}</p>
                                    <p className="text-sm text-gray-300">{c.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
