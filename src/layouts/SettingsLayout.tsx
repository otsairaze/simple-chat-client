import React from "react";

interface ContactLayoutProps {
  children: React.ReactNode;

  renderHeader?: () => React.ReactNode;
}

export const SettingsLayout = ({ children, renderHeader }: ContactLayoutProps) => {
  return (
    <div>
      {renderHeader && <div>{renderHeader()}</div>}

      {children}
    </div>
  );
};
