import { AccountSvg, NotificationSvg, SecuritySvg } from "../../../assets/svg";

import { SettingsModalType, SettingsType } from "../../../types";
import { SettingsInfo } from "./components";

interface SettingsProps {
  setActiveSettings: (settings: SettingsType) => void;
}

export const Settings = ({ setActiveSettings }: SettingsProps) => {
  return (
    <div className="flex flex-col gap-[30px] mt-[30px] h-[350px]">
      <SettingsInfo />
      <ul className="flex flex-col gap-[20px]">
        <li className="flex gap-2" onClick={() => setActiveSettings(SettingsModalType.Account)}>
          <AccountSvg />
          <button>My account</button>
        </li>
        <li className="flex gap-2" onClick={() => setActiveSettings(SettingsModalType.Privacy)}>
          <SecuritySvg />
          <button>Privacy</button>
        </li>
        <li className="flex gap-2" onClick={() => setActiveSettings(SettingsModalType.Notification)}>
          <NotificationSvg />
          <button>Notification</button>
        </li>
      </ul>
    </div>
  );
};
