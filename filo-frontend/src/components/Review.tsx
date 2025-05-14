import React from 'react';

const Review = () => {
    const reviews = [
        {
            profile: "M",
            name: "Maria Johnson",
            jobTitle: "Product Manager",
            description:
                "Filo has completely changed how our team collaborates. The points system adds a fun competitive element that keeps everyone engaged. It's boosted morale and focus."
        },
        {
            profile: "J",
            name: "James Chen",
            jobTitle: "Software Developer",
            description:
                "I use Filo for both personal tasks and team projects. Being able to separate workspaces but use the same familiar interface is incredibly helpful. It's efficient and smooth."
        },
        {
            profile: "S",
            name: "Sarah Williams",
            jobTitle: "Freelance Designer",
            description:
                "The visual task board makes it so easy to see where everything stands. I love watching tasks move from Todo all the way to Done. It feels very intuitive and fun."
        },
    ];


    return (
        <section className="px-4 my-40 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
                What our users say
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12">
                Hear from people who have transformed their productivity with Filo.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-neutral-50 border border-gray-200 rounded-xl p-5 flex flex-col justify-between h-full"
                    >
                        <p className="text-gray-800 text-[15px] leading-relaxed mb-6 flex-grow">
                            “{review.description}”
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="bg-gray-200 text-gray-400 font-bold rounded-full w-10 h-10 flex items-center justify-center text-[15px]">
                                {review.profile}
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    {review.name}
                                </h3>
                                <p className="text-sm text-gray-500">{review.jobTitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Review;
