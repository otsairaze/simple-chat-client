import { useCallback, useState } from "react";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = useCallback(() => setIsOpen(false), []);

  const openDrawer = useCallback(() => setIsOpen(true), []);

  return { isOpen, closeDrawer, openDrawer };
};
