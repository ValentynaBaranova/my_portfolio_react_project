import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import Head from "./Head";
import Footer from "./Footer";
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
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
