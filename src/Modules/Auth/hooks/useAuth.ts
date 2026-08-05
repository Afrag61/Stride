import { use } from "react";
import { AuthContext } from "../Context/AuthProvider";

export const useAuth = () => {
    const authContext = use(AuthContext);

    if (!authContext)
        throw new Error("useAuth must be used within a AuthProvider");

    return authContext;
};
