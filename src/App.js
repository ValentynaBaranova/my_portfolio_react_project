import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import Head from "./Head";
import Footer from "./Footer";
import Sertificate from "./Sertificate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Head />
          <div className="row">
            <LeftSide />
            <RightSide />
          </div>
          <Sertificate />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
