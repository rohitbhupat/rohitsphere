import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[rgba(11,15,20,0.6)] backdrop-blur-md border-b border-white/10 px-10 py-5 flex items-center justify-between">
            <a href="#home" className="font-extrabold tracking-wider text-white">RB</a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 text-white/90">
                {["home", "about", "skills", "projects", "certifications", "resume", "contact"].map((item) => (
                    <a key={item} href={`#${item}`} className="hover:text-cyan-300 transition">
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                ))}
            </nav>

            {/* Mobile Nav */}
            <button
                className="md:hidden text-white text-2xl"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                ☰
            </button>
            {open && (
                <ul className="absolute top-14 right-4 bg-[#0f141b] border border-white/10 rounded-lg p-4 flex flex-col gap-3 md:hidden">
                    {["home", "about", "skills", "projects", "certifications", "resume", "contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="text-white/90 hover:text-cyan-300"
                            onClick={() => setOpen(false)}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    ))}
                </ul>
            )}
        </header>
    );
}
