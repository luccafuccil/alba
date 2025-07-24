import { Routes, Route } from "react-router-dom";
import ClosetPage from "../pages/ClosetPage";

const ClosetRouter = () => (
  <Routes>
    <Route path="/" element={<ClosetPage />} />
    <Route path="/tea/new" element={<ClosetPage />} />
    <Route path="/tea/:teaId" element={<ClosetPage />} />
    <Route path="/tea/:teaId/edit" element={<ClosetPage />} />
    <Route path="/tea/:teaId/delete" element={<ClosetPage />} />
  </Routes>
);

export { ClosetRouter };
