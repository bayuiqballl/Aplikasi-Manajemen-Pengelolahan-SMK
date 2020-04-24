import React from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Siswa from "./pages/Siswa";
import Guru from "./pages/Guru";
import Staff from "./pages/Staff";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Siswa" component={Siswa} />
          <Route path="/Guru" component={Guru} />
          <Route path="/Staff" component={Staff} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
