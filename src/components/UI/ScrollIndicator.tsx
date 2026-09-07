"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CircleArrowUp } from "lucide-react";

const ScrollIndicator = () => {
    const [progress, setProgress] = useState(0);
    const circleRef = useRef<SVGCircleElement>(null);
    const progressRef = useRef({ value: 0 });

    const radius = 20;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent =
                docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            gsap.to(progressRef.current, {
                value: scrollPercent,
                duration: 0.3,
                ease: "power2.out",
                onUpdate: () => {
                    const offset =
                        circumference -
                        (progressRef.current.value / 100) * circumference;
                    if (circleRef.current) {
                        circleRef.current.style.strokeDashoffset =
                            String(offset);
                    }
                    setProgress(progressRef.current.value);
                },
            });
        };

        window.addEventListener("scroll", updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener("scroll", updateProgress);
    }, [circumference]);

    const scrollToTop = () => {
        gsap.to(window, {
            duration: 0.2,
            scrollTo: 0,
            ease: "power4.inOut",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="fixed bottom-15 left-3 z-50 cursor-pointer group bg-black/80 rounded-full opacity-50 active:opacity-100 hover:opacity-100 transition-opacity duration-300"
        >
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="-rotate-90"
            >
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    className="text-gray-400 dark:text-gray-800"
                />
                <circle
                    ref={circleRef}
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    className="text-primary-600 group-hover:text-primary-500"
                />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-300">
                <CircleArrowUp className="h-8 w-8 " />
            </div>
        </button>
    );
};

export default ScrollIndicator;
