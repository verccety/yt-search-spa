import React, { Component } from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundary.styles';
class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };
  // thrown error if any thrown in children
  static getDerivedStateFromError() {
    return {
      hasErrored: true,
    };
  }

  componentDidCatch() {}
  render() {
    return (
      <div>
        {this.state.hasErrored ? (
          <ErrorImageOverlay>
            <ErrorImageContainer imageUrl={'https://i.imgur.com/QIxIKBH.png'} />
            <ErrorImageText>Что-то пошло не так..</ErrorImageText>
          </ErrorImageOverlay>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBoundary;
