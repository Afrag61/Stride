import CustomerCard from "@/components/UI/CustomerCard";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { createClient } from "@/lib/supabase/server";
import { TTestimonialList } from "@/types";

const TestimonialsList = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.from("testimonials").select();

    if (error) return <ErrorMessage message={error.message} />;

    const testimonials = data as TTestimonialList;

    return (
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials?.map((testimonial) => (
                <CustomerCard key={testimonial.id} {...testimonial} />
            ))}
        </div>
    );
};

export default TestimonialsList;
