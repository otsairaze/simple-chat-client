import styles from "./Navigation.module.css";
import clsx from "clsx";
import { Modal, RenderContacts } from "../../../../ui";
import React from "react";
import { ContactModalType, ContactType } from "../../../../../types/Modal/ContactModalType";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer, ModalContent, openDrawer } from "../../../../../store/features";
import { NavigationList } from "./components/NavigationList";
import { RenderSettings } from "../../../../ui/Render/RenderSettings";
import { SettingsModalType, SettingsType } from "../../../../../types";

export const Navigation = ({ open }: { open: boolean }) => {
  const [activeContact, setActiveContact] = React.useState<ContactType>(ContactModalType.Contact);
  const [activeSettings, setActiveSettings] = React.useState<SettingsType>(SettingsModalType.Settings);

  const dispatch = useDispatch();

  const { isOpen, content } = useSelector((state: any) => state.modal);

  const onHandleClick = () => {
    dispatch(closeDrawer());
    setActiveContact(ContactModalType.Contact);
  };

  return (
    <>
      <Modal isOpen={isOpen} closeDrawer={onHandleClick} className="max-w-[360px]">
        {content === ModalContent.Contacts && <RenderContacts activeContact={activeContact} closeDrawer={onHandleClick} setActiveContact={setActiveContact} />}
        {content === ModalContent.Settings && <RenderSettings closeDrawer={onHandleClick} activeSettings={activeSettings} setActiveSettings={setActiveSettings} />}
      </Modal>

      <nav className={clsx(styles.navigation, open && styles.open)}>
        <NavigationList openDrawer={openDrawer} dispatch={dispatch} />
      </nav>
    </>
  );
};
