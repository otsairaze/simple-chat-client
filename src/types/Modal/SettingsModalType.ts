export const SettingsModalType = {
  Settings: "Settings",
} as const;

type SettingsModalType = typeof SettingsModalType;

export type SettingsType = SettingsModalType[keyof SettingsModalType];
