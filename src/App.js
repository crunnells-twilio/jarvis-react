import "./App.css";
import Main from "./Main";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

function getProfileElement() {
  return (
    <div className="profile">
      <Profile />
    </div>
  );
}

// Usage example:
export const profileElement = getProfileElement();
export default App;