import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { AuthPage, ChatPage, SettingsPage } from "./pages";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ChatPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path={routes.chat} element={<ChatPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path={routes.settings} element={<SettingsPage />} />
        </Route>
        <Route>
          <Route path={routes.auth} element={<AuthPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
