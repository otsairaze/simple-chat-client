import { useNavigate } from "react-router-dom";
import { ChatSvg, FriendsSvg, LogoutSvg, SettingsSvg } from "../../../../../assets/svg";

export const useMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/auth");
  };

  const items = [
    {
      title: "Chat",
      path: "/chat",
      icon: ChatSvg,
    },
    {
      title: "Contacts",
      path: "/contacts",
      icon: FriendsSvg,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: SettingsSvg,
    },
    {
      title: "Exit",
      path: "/auth",
      icon: LogoutSvg,
      onClick: handleLogout,
    },
  ];

  return { items };
};
