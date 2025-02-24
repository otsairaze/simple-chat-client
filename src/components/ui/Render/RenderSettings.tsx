import { Contact, ContactFooter } from "../..";
import { ContactLayout } from "../../../layouts";
import { SettingsModalType, SettingsType } from "../../../types";

interface RenderProps {
  closeDrawer: () => void;
  activeSettings: SettingsType;
}

export const RenderSettings = ({ closeDrawer, activeSettings }: RenderProps) => {
  switch (activeSettings) {
    case SettingsModalType.Settings:
      return (
        <ContactLayout closeDrawer={closeDrawer}>
          <Contact />
        </ContactLayout>
      );
  }
};
