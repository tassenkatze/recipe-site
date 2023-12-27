import Header from "./components/Header";
import Footer from "./components/Footer";
import Create from "./components/Create";
import RecipeDetails from "./components/RecipeDetails";
import RecipeOverview from "./components/RecipeOverview";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// components hat function, die element zurückgibt
function App() {

  //return: tsx code instead of html
  return (
    <Router>
      <div className="App"> {/* className instead of class in tsx or jsx code */}
        <Header /> {/* use imported component */}

        <Routes>
          <Route path="/recipe-site" element={<RecipeOverview />} />
          <Route path="/recipe-site/create" element={<Create />} />
          <Route path="/recipe-site/lego" element={<div className="Content"><div className="Middle"><h2>Lego is great</h2></div></div>} />
          <Route path="/recipe-site/recipes/:key" element={<RecipeDetails />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App; //allows us to know which function output will used, when imported in other file
