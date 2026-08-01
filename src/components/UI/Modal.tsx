"use client";

import usePort from "@/Modules/Header/hooks/usePort";
import useScrollLock from "@/Modules/Header/hooks/useScrollLock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
interface ModalExpose {
    render: (handleCloseAnimation: () => void) => React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalExpose> = ({ render, isOpen, onClose }) => {
    const { handlePortContent } = usePort("modal-root");
    useScrollLock(isOpen);

    const handleAnimateOut = () => {
        gsap.to(".modal-content", {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "back.out",
            onComplete: () => {
                onClose();
            },
        });
        gsap.to(".modal-backdrop", {
            opacity: 0,
            ease: "back.in",
            duration: 0.8,
        });
    };

    useEffect(() => {
        const handleSearch = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleAnimateOut();
            }
        };

        document.addEventListener("keydown", handleSearch);

        return () => {
            document.removeEventListener("keydown", handleSearch);
        };
    }, []);

    useGSAP(
        () => {
            if (isOpen) {
                gsap.fromTo(
                    ".modal-content",
                    { opacity: 0, y: 50, ease: "back.in", duration: 1 },
                    { opacity: 1, y: 0 },
                );
                gsap.fromTo(
                    ".modal-backdrop",
                    { opacity: 0, ease: "back.in", duration: 1 },
                    { opacity: 1 },
                );
            }
        },
        { dependencies: [isOpen] },
    );

    return handlePortContent(
        isOpen && (
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    handleAnimateOut();
                }}
                className="modal-backdrop fixed top-0 right-0 z-100 w-full h-full bg-black/40 backdrop-blur-sm flex items-center justify-center"
            >
                {render(handleAnimateOut)}
            </div>
        ),
    );
};

export default Modal;
