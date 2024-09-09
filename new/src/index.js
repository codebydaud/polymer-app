import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import DropdownMenu from './components/DropdownMenu';
import MyButton from './components/MyButton';

customElements.define('dropdown-menu', reactToWebComponent(DropdownMenu, React, ReactDOM));
customElements.define('my-button', reactToWebComponent(MyButton, React, ReactDOM));
