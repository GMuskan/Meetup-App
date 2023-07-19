import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { MeetupDetails } from "./Pages/MeetupDetails";
import { Home } from "./Pages/Home";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:meetupId" element={<MeetupDetails />} />
      </Routes>
    </div>
  );
}
