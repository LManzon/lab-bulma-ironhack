import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./coolbutton/Coolbutton.js";
import Signup from "./signup/signup";

function App() {
  return (
    <div className="App">
      <Navbar />

      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton isSmall isDanger className="button is-primary">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
      <Signup />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
