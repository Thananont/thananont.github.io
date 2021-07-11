import React from "react";
import "./style.css";
import Header from "./components/Header";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import SectionC from "./components/SectionC";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </div>
  );
}

export default App;
