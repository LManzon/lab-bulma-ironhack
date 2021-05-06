import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./coolbutton/Coolbutton.js";
// import Signup from "./signup/signup";

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
    </div>
  );
}

export default App;

function Signup() {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="haha" />
      <FormField label="Email" type="email" placeholder="haha" />
      <FormField label="Password" type="password" placeholder="haha" />

      <CoolButton isSuccess isSmall>
        {" "}
        Submit
      </CoolButton>
    </div>
  );
}
