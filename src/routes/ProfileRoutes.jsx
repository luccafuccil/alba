import { Routes, Route } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";

const ProfileRouter = () => (
  <Routes>
    <Route path="/:id" element={<ProfilePage />} />
    <Route path="/:id/tea/:teaId" element={<ProfilePage />} />
    <Route path="/:id/tea/:teaId/edit" element={<ProfilePage />} />
    <Route path="/:id/tea/:teaId/delete" element={<ProfilePage />} />
  </Routes>
);

export { ProfileRouter };
