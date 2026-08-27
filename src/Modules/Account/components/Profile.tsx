"use client";

import { LogOut } from "lucide-react";
import { useAuth } from "@/Modules/Auth/hooks/useAuth";
import Image from "next/image";

const getInitials = (name?: string, email?: string) => {
    if (name) {
        const parts = name.split(" ");
        if (parts.length > 1) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return parts[0][0].toUpperCase();
    }
    if (email) {
        return email[0].toUpperCase();
    }
    return "U";
};

interface Props {
    name: string;
    email: string;
}

const Profile: React.FC<Props> = ({ name, email }) => {
    const { logout, user } = useAuth();

    console.log(user);

    return (
        <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-900 dark:border-gray-850 text-center">
            {user?.user_metadata?.picture ? (
                <Image
                    src={user.user_metadata.picture}
                    className="rounded-full mx-auto w-24 h-24 object-cover ring-2 ring-primary-600 dark:ring-primary-500 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 "
                    alt={name}
                    width={100}
                    height={100}
                />
            ) : (
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-tr from-primary-600 to-primary-400 text-white text-3xl font-bold tracking-wider shadow-lg">
                    {getInitials(name, email)}
                </div>
            )}
            <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                {name || "Valued Customer"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
                {email || ""}
            </p>

            <button
                onClick={logout}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-all hover:bg-red-100 dark:border-red-900/30 dark:bg-red-950/20 dark:text-red-400 dark:hover:bg-red-950/40 cursor-pointer"
            >
                <LogOut className="h-4 w-4" />
                Log Out
            </button>
        </div>
    );
};

export default Profile;
