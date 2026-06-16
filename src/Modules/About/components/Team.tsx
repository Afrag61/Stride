import Image from "next/image";

const teamList = [
    {
        name: "James Chen",
        position: "CEO & Founder",
        image: "https://fkdikqcjcslclsyodcog.supabase.co/storage/v1/object/public/products_images/team/James%20Chen.jpg",
    },
    {
        name: "Sarah Williams",
        position: "Head of Design",
        image: "https://fkdikqcjcslclsyodcog.supabase.co/storage/v1/object/public/products_images/team/Sarah%20Williams.jpg",
    },
    {
        name: "Michael Park",
        position: "CTO",
        image: "https://fkdikqcjcslclsyodcog.supabase.co/storage/v1/object/public/products_images/team/Michael%20Park.jpg",
    },
    {
        name: "Emily Rodriguez",
        position: "Head of Marketing",
        image: "https://fkdikqcjcslclsyodcog.supabase.co/storage/v1/object/public/products_images/team/Emily%20Rodriguez.jpg",
    },
];

const Team = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Heading */}
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                        Our Team
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                        The people behind Stride
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
                        A passionate team of designers, engineers, and shoe
                        enthusiasts dedicated to creating the perfect footwear.
                    </p>
                </div>
                {/* Team Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {teamList.map((person) => (
                        <div key={person.name} className="text-center">
                            {/* Image Container */}
                            <div className="mx-auto aspect-square w-48 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    className="h-full w-full object-cover"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            {/* Name */}
                            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                {person.name}
                            </h3>
                            {/* Position */}
                            <p className="text-primary-600">
                                {person.position}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
