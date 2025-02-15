import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./shared/shared";
import Main from "./pages/ChatPage";
import ChatPage from "./pages/ChatPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/chat" element={<ChatPage />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
