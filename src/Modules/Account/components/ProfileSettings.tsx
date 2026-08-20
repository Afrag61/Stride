"use client";

import { Info, LockKeyhole } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props {
    email: string;
    fullName: string;
    phone: string;
}

const ProfileSettings: React.FC<Props> = ({ email, fullName, phone }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Profile Settings
            </h1>

            <div className="space-y-4 max-w-xl">
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                        Email Address
                    </label>
                    <p className="relative rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-3 text-gray-500 dark:text-gray-400 cursor-not-allowed">
                        {email}
                        <LockKeyhole className="absolute right-4 top-1/2 -translate-y-1/2" />
                    </p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-600 mt-1.5 flex items-center justify-start gap-1">
                        <Info className="w-3.5 h-3.5 inline" /> You can't change
                        your email address
                    </p>
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                        Full Name
                    </label>
                    <p className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white">
                        {fullName}
                    </p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-600 mt-1.5 flex items-center justify-start gap-1">
                        <Info className="w-3.5 h-3.5 inline" /> You will be able
                        to change this as soon
                    </p>
                </div>
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                        Phone Number
                    </label>
                    <PhoneInput
                        disabled
                        value={phone}
                        onChange={() => {}}
                        international
                        countryCallingCodeEditable={false}
                        className={`rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white`}
                        countrySelectProps={{
                            className:
                                "bg-gray-200 dark:bg-gray-800 text-sm text-gray-900 dark:text-white disabled:opacity-50",
                        }}
                        numberInputProps={{
                            className:
                                "bg-transparent w-full text-sm text-gray-900 dark:text-white placeholder:text-gray-400 outline-none",
                        }}
                    />
                    <p className="text-xs text-yellow-600 dark:text-yellow-600 mt-1.5 flex items-center justify-start gap-1">
                        <Info className="w-3.5 h-3.5 inline" /> You will be able
                        to change this as soon
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
