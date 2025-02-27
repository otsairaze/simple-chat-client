export const SettingsModalType = {
  Settings: "Settings",
  Account: "Account",
  Privacy: "Privacy and Security",
  Notification: "Notification",
} as const;

type SettingsModalType = typeof SettingsModalType;

export type SettingsType = SettingsModalType[keyof SettingsModalType];
