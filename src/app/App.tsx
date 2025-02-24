import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { AuthPage, ChatPage, SettingsPage } from "../pages";
import { routes } from "./routes";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route element={<MainLayout />}>
          <Route
            path={routes.chat}
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route>
          <Route path={routes.auth} element={<AuthPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
