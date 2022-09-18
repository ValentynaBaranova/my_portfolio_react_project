import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import Head from "./Head";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Head />
          <div className="row">
            <RightSide />
            <LeftSide />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
