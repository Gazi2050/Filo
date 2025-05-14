
const Cto = () => {
    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                    Ready to boost your productivity?
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Join Filo today and start managing your tasks more effectively.
                </p>

                <div className="flex justify-center">
                    <button
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-sm font-medium border border-gray-300 hover:bg-gray-100 transition duration-300 cursor-pointer"
                    >
                        Sign up for free
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cto;
