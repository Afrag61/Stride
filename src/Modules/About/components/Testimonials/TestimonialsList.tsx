import CustomerCard from "@/components/UI/CustomerCard";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { createClient } from "@/lib/supabase/server";
import { TTestimonialList } from "@/types";

const Testimonials = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("testimonials")
        .select()
        .limit(3);

    if (error) return <ErrorMessage message="Failed to load Reviews" />;

    const testimonials = data as TTestimonialList;

    return (
        <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
                <CustomerCard key={testimonial.id} {...testimonial} />
            ))}
        </div>
    );
};

export default Testimonials;
