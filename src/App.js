import "./App.css";
import Contact from "./components/Contact";
import EventDetails from "./components/EventDetails";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Teams from "./components/Teams";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path={`/events/:year/:slug`} element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
