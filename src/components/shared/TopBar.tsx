import { useNavigate } from "react-router-dom";
import { Button } from "../ui";
import { Typography } from "./Typography/Typography";

export const TopBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/auth");
  };

  return (
    <div className="p-4 flex justify-between items-center">
      <Typography variant="title28_semibold" tag="h2">
        SimpleChat
      </Typography>
      <Button variant="none" onClick={handleLogout}>
        Выйти
      </Button>
    </div>
  );
};
