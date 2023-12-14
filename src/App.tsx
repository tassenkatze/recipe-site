import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components hat function, die element zurückgibt
function App() {

  //return: tsx code instead of html
  return (
    <Router>
      <div className="App"> {/* className instead of class in tsx or jsx code */}
        <Header /> {/* use imported component */}

        <Routes>
          <Route path="/recipe-site" element={<Body />} />
          <Route path="/recipe-site/lego" element={<div className="Content">Lego is great</div>} />


        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App; //allows us to know which function output will used, when imported in other file
