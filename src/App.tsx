import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { AuthPage, ChatPage, ContactsPage, SettingsPage } from "./pages";
import { routes } from "./routes";
import { ProtectedRoute } from "./components/shared";

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
        <Route element={<MainLayout />}>
          <Route
            path={routes.settings}
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route element={<MainLayout />}>
          <Route
            path={routes.contacts}
            element={
              <ProtectedRoute>
                <ContactsPage />
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
