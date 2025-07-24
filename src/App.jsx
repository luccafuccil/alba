import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ClosetRouter } from "./routes/ClosetRoutes";
import { ProfileRouter } from "./routes/ProfileRoutes";
import NotFoundPage from "./pages/NotFound";
import { TeaData } from "./context/TeaContext";
import Header from "./components/header";

function App() {
  return (
    <TeaData>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/closet/*" element={<ClosetRouter />} />
          <Route path="/profile/*" element={<ProfileRouter />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </TeaData>
  );
}

export default App;
