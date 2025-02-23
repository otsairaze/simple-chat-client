import React from "react";

interface ContactLayoutProps {
  children: React.ReactNode;
  renderFooter?: () => React.ReactNode;
}

const ContactLayout = ({ children, renderFooter }: ContactLayoutProps) => {
  return (
    <div>
      {children}
      {renderFooter && <div>{renderFooter()}</div>}
    </div>
  );
};

export default ContactLayout;
