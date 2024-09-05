import React from 'react';

// const MyButton = () => {
//   return <button id='button' onClick={() => alert('Button clicked!')}>Click me</button>;
// };

// export default MyButton;

class MyButton extends React.Component {
  render() {
    return <button onClick={() => alert('Button clicked!')}>{this.props.name}</button>;
  }
}
export default MyButton;
