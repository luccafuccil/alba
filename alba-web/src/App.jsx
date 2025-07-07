import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClosetPage from "./pages/ClosetPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/closet" element={<ClosetPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
