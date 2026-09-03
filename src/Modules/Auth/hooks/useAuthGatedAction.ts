"use client";

import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import {
    setPendingAction,
    getPendingAction,
    clearPendingAction,
} from "@/lib/pendingActions";
import { setStoredRedirect } from "../lib/nextRedirect";
import { TActionType, TPendingActions } from "@/types";

interface Options<P> {
    isAuthenticated: boolean;
    type: TActionType;
    matchId?: string | number;
    run: (payload: P) => void;
    signInMessage?: string;
}

export const useAuthGatedAction = <P>({
    isAuthenticated,
    type,
    run,
    matchId,
    signInMessage,
}: Options<P>) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isAuthenticated) return;

        const pendingAction = getPendingAction();

        if (!pendingAction || pendingAction.type !== type) return;

        const pendingId = pendingAction.payload.productId;

        if (matchId !== undefined && pendingId !== matchId) return;

        run(pendingAction.payload as P);

        clearPendingAction();
    }, [isAuthenticated]);

    const guard = (payload: P) => {
        if (!isAuthenticated) {
            setPendingAction({
                type,
                payload,
            } as TPendingActions);
            setStoredRedirect(pathname);
            toast.error(signInMessage || "Please sign in to continue");
            router.push(`/login`);
            return;
        }

        run(payload);
    };

    return guard;
};
