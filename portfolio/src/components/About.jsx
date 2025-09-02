import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">About</h2>
                    <div className="grid md:grid-cols-[1.3fr,1fr] gap-6">
                        <div className="p-5 bg-[#111720] border border-white/10 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3">Profile</h3>
                            <p className="text-gray-300">
                                I’m a passionate Full-Stack Developer with hands-on experience in building scalable web applications using the MERN stack and AWS cloud services. 
                                My focus is on creating seamless user experiences, optimizing backend performance, and ensuring applications are both functional and visually engaging. 
                                I enjoy solving real-world problems with clean code, modern design, and cloud-native solutions.
                            </p>
                        </div>
                        <div className="p-5 bg-[#111720] border border-white/10 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3">Info</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between bg-white/5 px-3 py-2 rounded-md">
                                    <span className="text-gray-400">Name</span><strong>Rohit Bhupat</strong>
                                </li>
                                <li className="flex justify-between bg-white/5 px-3 py-2 rounded-md">
                                    <span className="text-gray-400">Location</span><strong>Dombivli, India</strong>
                                </li>
                                <li className="flex justify-between bg-white/5 px-3 py-2 rounded-md">
                                    <span className="text-gray-400">Role</span><strong>Full-Stack Developer | Cloud Enthusiast</strong>
                                </li>
                                <li className="flex justify-between bg-white/5 px-3 py-2 rounded-md">
                                    <span className="text-gray-400">Experience</span><strong>1+ years hands-on (projects)</strong>
                                </li>
                                <li className="flex justify-between bg-white/5 px-3 py-2 rounded-md">
                                    <span className="text-gray-400">Open to</span><strong>Full-stack, Cloud/DevOps, Backend </strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
