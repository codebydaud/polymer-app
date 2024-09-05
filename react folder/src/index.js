import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

class HelloWorld extends React.Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}

class MyButton extends React.Component {
  render() {
    return <button onClick={() => alert('Button clicked!')}>{this.props.name}</button>;
  }
}

const HelloWorldWC = reactToWebComponent(HelloWorld, React, ReactDOM, {
  props: ['name']
});
const MyButtonWC = reactToWebComponent(MyButton, React, ReactDOM,{
  props: ['name']
});

customElements.define('hello-world', HelloWorldWC);
customElements.define('my-button', MyButtonWC);
