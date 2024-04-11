import "./App.css";
import EventDetails from "./components/EventDetails";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Teams from "./components/Teams";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/events" element={<Events />} />
          <Route
            path={`/eventdetails/:year/:slug`}
            element={<EventDetails />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
