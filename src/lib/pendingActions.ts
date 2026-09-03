import { TPendingActions } from "@/types";

const PENDING_ACTION_KEY = "pending-action";

export const clearPendingAction = () => {
    sessionStorage.removeItem(PENDING_ACTION_KEY);
};

export const setPendingAction = (action: TPendingActions) => {
    sessionStorage.setItem(PENDING_ACTION_KEY, JSON.stringify(action));
};

export const getPendingAction = (): TPendingActions | null => {
    const action = sessionStorage.getItem(PENDING_ACTION_KEY);

    if (!action) return null;

    return JSON.parse(action) as TPendingActions;
};
