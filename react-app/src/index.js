import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import HelloWorld from "./components/HelloWorld";
import MyButton from "./components/MyButton";

const HelloWorldWC = reactToWebComponent(HelloWorld, React, ReactDOM, {
  props: ["name"],
});
const MyButtonWC = reactToWebComponent(MyButton, React, ReactDOM, {
  props: ["name"],
});

customElements.define("hello-world", HelloWorldWC);
customElements.define("my-button", MyButtonWC);
