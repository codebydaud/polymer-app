import React from 'react';

// const HelloWorld = ({ name }) => {
//   return <div className='text-center text-red-200'>Hello, {name}!</div>;
// };

// export default HelloWorld;


class HelloWorld extends React.Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}
export default HelloWorld;