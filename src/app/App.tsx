import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { AuthPage, ChatPage } from "../pages";
import { routes } from "./routes";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { useEffect } from "react";
import { socket } from "../server/client";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
    });
  }, []);

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
