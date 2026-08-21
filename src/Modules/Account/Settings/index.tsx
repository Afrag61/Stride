import { getUser } from "@/Modules/Auth/lib/getUser";
import ProfileSettings from "../components/ProfileSettings";
import ClientThrower from "@/Modules/Error/ClientThrower";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Account Settings | Stride",
    description: "Manage your account settings and preferences.",
};

const Index = async () => {
    const user = await getUser();

    if (user === false) return <ClientThrower cause="LOAD_PROFILE_FAILED" />;

    if (user === null)
        return <ClientThrower cause="NETWORK_CONNECTION_FAILED" />;

    return (
        <ProfileSettings
            email={user?.email!}
            fullName={user?.user_metadata?.name}
            phone={user?.user_metadata?.phone}
        />
    );
};

export default Index;
