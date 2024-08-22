import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to indicate that an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
