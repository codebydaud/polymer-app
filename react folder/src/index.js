import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

// Define a simple React component
class HelloWorld extends React.Component {
  render() {
    return (
      <div>Hello, {this.props.name}!</div>
    );
  }
}

// Define a button React component
class MyButton extends React.Component {
  render() {
    return (
      <button onClick={() => alert('Button clicked!')}>Click me</button>
    );
  }
}

// Convert React components to Web Components
customElements.define('hello-world', reactToWebComponent(HelloWorld, React, ReactDOM));
customElements.define('my-button', reactToWebComponent(MyButton, React, ReactDOM));
