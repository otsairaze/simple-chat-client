import { createPortal } from "react-dom";

import React from "react";

interface DrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
  children: React.ReactNode;
  className?: string;
}

const element = document.getElementById("modal");

export const Modal = ({ isOpen, closeDrawer, children, className }: DrawerProps) => {
  return (
    isOpen &&
    element &&
    createPortal(
      <div className="relative" onClick={closeDrawer}>
        <div className="fixed inset-0 opacity-50 bg-black  z-40" />
        <div onClick={(e) => e.stopPropagation()} className={`fixed w-full top-[50%] left-[50%] flex flex-col justify-between rounded-2xl z-50 bg-[#17212B] shadow-2xl p-4 translate-[-50%] ${className}`}>
          {children}
        </div>
      </div>,
      element
    )
  );
};
