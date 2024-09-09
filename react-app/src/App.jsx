import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from './components/MyButton'
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld name="React User" />
        <MyButton name="Click Me!"/>
      </header>
    </div>
    // <div className="App">
    //   <h1>Hello from React!</h1>
    //   <hello-world name="React User"></hello-world>
    //   <my-button name="Click Me!"></my-button>
    // </div>
  );
}

export default App


