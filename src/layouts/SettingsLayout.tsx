import React from "react";

interface ContactLayoutProps {
  children: React.ReactNode;
  renderFooter?: () => React.ReactNode;
  renderHeader?: () => React.ReactNode;
}

export const SettingsLayout = ({ children, renderFooter, renderHeader }: ContactLayoutProps) => {
  return (
    <div>
      {renderHeader && <div>{renderHeader()}</div>}
      {children}
      {renderFooter && <div>{renderFooter()}</div>}
    </div>
  );
};
