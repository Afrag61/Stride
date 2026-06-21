import ErrorMessage from "@/components/UI/ErrorMessage";
import { ErrorComponent } from "next/dist/client/components/error-boundary";

const Index: ErrorComponent = ({ error, unstable_retry: retry }) => {
    return <ErrorMessage message={error.message} onRetry={retry} />;
};

export default Index;
