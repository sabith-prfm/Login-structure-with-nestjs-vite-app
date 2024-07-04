import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    fallbackUI?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error:', error);
        console.error('ErrorInfo:', errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallbackUI || <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
