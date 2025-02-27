import { Settings } from "../..";

import { SettingsLayout } from "../../../layouts/SettingsLayout";
import { SettingsModalType, SettingsType } from "../../../types";
import { SettingsAccount, SettingsHeader } from "../../shared/Settings/components";

interface RenderProps {
  closeDrawer: () => void;
  activeSettings: SettingsType;
  setActiveSettings: (settings: SettingsType) => void;
}

export const RenderSettings = ({ activeSettings, setActiveSettings }: RenderProps) => {
  switch (activeSettings) {
    case SettingsModalType.Settings:
      return (
        <SettingsLayout renderHeader={() => <SettingsHeader titleText="Settings" />}>
          <Settings setActiveSettings={setActiveSettings} />
        </SettingsLayout>
      );

    case SettingsModalType.Account:
      return (
        <SettingsLayout renderHeader={() => <SettingsHeader titleText="Account" />}>
          <SettingsAccount />
        </SettingsLayout>
      );

    case SettingsModalType.Privacy:
      return (
        <SettingsLayout>
          <div>test privacy</div>
        </SettingsLayout>
      );

    case SettingsModalType.Notification:
      return (
        <SettingsLayout>
          <div>test notification</div>
        </SettingsLayout>
      );
  }
};
