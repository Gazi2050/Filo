import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-3 text-slate-900">
                    Stay updated
                </h2>
                <p className="text-slate-500 mb-6 text-sm font-medium">
                    Get the latest updates, tips, and product news delivered straight to your inbox.
                </p>

                {/* Form: Responsive input & button */}
                <form className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full sm:w-64 px-4 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-black focus:shadow-sm transition-colors duration-200"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-black text-white font-medium hover:bg-slate-800 duration-300 transition-colors cursor-pointer"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="text-xs text-slate-500 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
