import OrderPage from "./components/date/date.jsx";
//change into calendar.jsx
import Calendar from "./components/calendar/calendar.jsx";
import Date from "./components/date/date.jsx";
import Settings from "./components/settings/settings.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Temporarily renders the navbar */}
        <Route path="/" element={<Calendar/>} />
        <Route path="/date" element={<Date/>} />
        <Route path="/settings" element={<Settings/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
