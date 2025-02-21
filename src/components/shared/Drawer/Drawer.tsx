import { createPortal } from "react-dom";

import React from "react";

interface DrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
  children: React.ReactNode;
}

const element = document.getElementById("modal");

export default function Drawer({ isOpen, closeDrawer, children }: DrawerProps) {
  return (
    isOpen &&
    element &&
    createPortal(
      <div className="relative" onClick={closeDrawer}>
        <div className="fixed inset-0 opacity-50 bg-black  z-40" />
        <div onClick={(e) => e.stopPropagation()} className={`fixed top-[25%] right-[45%] w-90 h-[700px] rounded-2xl bg-[#17212B] shadow-2xl p-4 transform ${isOpen ? "translate-x-0" : "translate-x-full opacity-0"} transition-transform duration-300 ease-in-out z-50`}>
          {children}
        </div>
      </div>,
      element
    )
  );
}
