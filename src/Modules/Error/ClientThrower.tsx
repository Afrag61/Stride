"use client";

import { useEffect } from "react";
import { ErrorMessages } from "./enum";

interface Props {
    cause?: keyof typeof ErrorMessages;
}
const ClientThrower: React.FC<Props> = ({ cause }) => {
    useEffect(() => {
        const error = new Error("Something went wrong. Please try again.");
        error.cause = cause;
        throw error;
    }, [cause]);

    return null;
};

export default ClientThrower;
