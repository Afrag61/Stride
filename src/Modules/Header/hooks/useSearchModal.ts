"use client";

import useScrollLock from "../hooks/useScrollLock";
import { useEffect, useState } from "react";

const useSearchModal = () => {
    const [showSearchModal, setShowSearchModal] = useState(false);

    useScrollLock(showSearchModal);

    const handleOpenSearch = () => {
        setShowSearchModal(true);
    };

    const handleCloseSearch = () => {
        setShowSearchModal(false);
    };

    useEffect(() => {
        const handleSearch = (e: KeyboardEvent) => {
            if (showSearchModal) return;
            if (e.ctrlKey && e.key === "k") {
                e.preventDefault();
                handleOpenSearch();
            }
        };

        document.addEventListener("keydown", handleSearch);

        return () => {
            document.removeEventListener("keydown", handleSearch);
        };
    }, []);

    return { showSearchModal, handleOpenSearch, handleCloseSearch };
};

export default useSearchModal;
