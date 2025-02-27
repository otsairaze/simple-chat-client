import React from "react";
import { CloseSvg } from "../assets/svg";

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
