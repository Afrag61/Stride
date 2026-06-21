import ErrorMessage from "@/components/UI/ErrorMessage";
import { ErrorComponent } from "next/dist/client/components/error-boundary";
import { ErrorMessages } from "./enum";

const Index: ErrorComponent = ({ error, unstable_retry: retry }) => {
    const message = ErrorMessages[error.cause as keyof typeof ErrorMessages];

    console.log(error);
    return <ErrorMessage message={message} onRetry={retry} />;
};

export default Index;
