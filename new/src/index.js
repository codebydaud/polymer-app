import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import HelloWorld from './components/HelloWorld';
import MyButton from './components/MyButton';

customElements.define('hello-world', reactToWebComponent(HelloWorld, React, ReactDOM));
customElements.define('my-button', reactToWebComponent(MyButton, React, ReactDOM));
