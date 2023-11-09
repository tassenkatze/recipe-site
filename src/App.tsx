import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// components hat function, die element zurückgibt
function App() {
  //return: tsx code instead of html
  return (
    <div className="App"> {/* className instead of class in tsx or jsx code */}
      <Header/> {/* use imported component */}
      <Body/>
      <Footer/>
    </div>
  );
}

export default App; //allows us to know which function output will used, when imported in other file
