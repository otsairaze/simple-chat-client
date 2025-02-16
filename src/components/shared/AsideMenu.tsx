import { Link } from "react-router-dom";
import { ChatSvg, SettingsSvg } from "../../assets/svg";

export const AsideMenu = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-[70px] border-r-[1px]">
      <Link to={"/chat"}>
        <ChatSvg />
      </Link>
      <Link to={"/settings"}>
        <SettingsSvg />
      </Link>
    </div>
  );
};
