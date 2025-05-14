import { FiBarChart } from "react-icons/fi";
import { LuAward, LuClipboardList, LuSettings2, LuUsers, LuZap } from "react-icons/lu";

const features = [
    {
        icon: <LuClipboardList className="text-2xl" />,
        title: "Personal Task Management",
        description: "Create, update, and delete tasks with ease. Organize your personal workflow exactly how you want it."
    },
    {
        icon: <LuUsers className="text-2xl" />,
        title: "Collaborative Workspaces",
        description: "Create or join workspaces to collaborate with your team. Invite others and work together seamlessly."
    },
    {
        icon: <LuAward className="text-2xl" />,
        title: "Points System",
        description: "Earn points as you complete tasks. Track progress individually in each workspace to stay motivated."
    },
    {
        icon: <FiBarChart className="text-2xl" />,
        title: "Progress Tracking",
        description: "Visualize your workflow with a task board that shows exactly where each task stands."
    },
    {
        icon: <LuZap className="text-2xl" />,
        title: "Streamlined Workflow",
        description: "Move tasks through stages: Todo → In Progress → Review → Done. Keep everyone on the same page."
    },
    {
        icon: <LuSettings2 className="text-2xl" />,
        title: "Full Control",
        description: "Manage your tasks with complete freedom. Create, update, and delete tasks as needed."
    }
];

const Features = () => {
    return (
        <section className="px-4 mt-40 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Everything you need to stay organized
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12">
                Filo combines personal task management with team collaboration and motivation.
            </p>

            <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-6 text-left transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1"
                    >
                        <div className="mb-4 text-black">{feature.icon}</div>
                        <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                        <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Features;
