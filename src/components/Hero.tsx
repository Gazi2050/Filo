import { heroData } from '@/lib/Data';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section className="text-center mt-10 px-4" aria-labelledby="hero-heading">
            <header>
                <h1
                    id="hero-heading"
                    className="text-6xl md:text-8xl font-bold text-white animate-shine leading-tight"
                >
                    {heroData.title}
                </h1>
            </header>

            <div className="mt-6 max-w-2xl mx-auto bg-white/5 backdrop-blur-sm px-[22px] py-8 rounded-2xl shadow-xl text-gray-200 space-y-6 border border-white/10">
                <p className="text-base text-gray-300 font-semibold">
                    {heroData.description}
                </p>

                <section
                    aria-labelledby="getting-started-heading"
                    className="text-left space-y-5"
                >
                    <h2
                        id="getting-started-heading"
                        className="text-xl font-semibold text-white"
                    >
                        {heroData.stepsTitle}
                    </h2>

                    <ul className="list-disc list-inside space-y-3 text-base leading-relaxed text-gray-300">
                        {heroData.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </section>

                <div className="pt-4 flex justify-center items-center">
                    <Link
                        href="/editor"
                        className="w-full md:w-[50%] bg-white/10 border border-white/10 text-white font-semibold px-6 py-2 rounded-xl hover:bg-white/15 transition-colors duration-200 cursor-pointer text-center"
                    >
                        {heroData.buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
