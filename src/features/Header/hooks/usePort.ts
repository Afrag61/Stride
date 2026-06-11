"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const usePort = (id: HTMLElement["id"]) => {
    const [port, setPort] = useState<HTMLElement | null>(null);
    useEffect(() => {
        const element = document.getElementById(id);
        if (element) {
            setPort(element);
        }
    }, [id]);

    const handlePortContent = (content: React.ReactNode) => {
        if (port) {
            return createPortal(content, port);
        }
        return null;
    };
    return { handlePortContent };
};

export default usePort;
