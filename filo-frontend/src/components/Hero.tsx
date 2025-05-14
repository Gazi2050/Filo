import Link from 'next/link';
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
    return (
        <section className="mt-32 px-4 text-center max-w-[90%] md:max-w-4xl lg:max-w-5xl mx-auto">
            <h1 className="text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] font-serif leading-tight text-black mb-6">
                Manage tasks, collaborate, and<br className="hidden md:block" /> track progress with Filo
            </h1>
            <p className="text-[1rem] md:text-[1.125rem] text-gray-500 mb-10 leading-relaxed">
                A free task management web app designed to boost personal and team<br className="hidden md:block" />
                productivity with a motivating points system.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-md mx-auto md:flex-row md:justify-center">
                <Link
                    href="/"
                    className="w-full md:w-auto border bg-black hover:bg-gray-900 text-white border-gray-300 text-sm font-medium px-6 py-3 rounded-full transition flex items-center justify-center gap-2"
                >
                    Get started for free
                </Link>
                <Link
                    href="/"
                    className="w-full md:w-auto border border-gray-300 text-sm font-medium text-black px-6 py-3 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-2"
                >
                    See how it works
                    <span className="text-xl">
                        <IoArrowForward />
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
