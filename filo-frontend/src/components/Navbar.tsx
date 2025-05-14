'use client';

import { middleLinks, rightLinks } from "@/constants/data";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-1">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href='/' className="flex items-center gap-2">
                        <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-md text-lg">F</div>
                        <span className="text-black text-xl">Filo</span>
                    </Link>

                    {/* Middle Nav - only on large screens */}
                    <div className="hidden lg:flex gap-6">
                        {middleLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="text-gray-700 hover:text-black text-[15px]">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Nav - only on large screens */}
                    <div className="hidden lg:flex gap-2">
                        <Link
                            href="/signin"
                            className="border border-gray-300 text-gray-800 hover:bg-gray-100 font-medium px-4 py-2 rounded-md text-sm transition"
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-black text-white font-medium px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition"
                        >
                            Sign up free
                        </Link>
                    </div>


                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden px-4 pb-4 pt-2 bg-white shadow-md space-y-2">
                    {[...middleLinks, ...rightLinks].map((link) => (
                        <Link key={link.label} href={link.href} className="block text-gray-700">
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
