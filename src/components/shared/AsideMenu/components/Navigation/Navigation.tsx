import styles from "./Navigation.module.css";
import clsx from "clsx";
import { Modal, RenderContacts } from "../../../../ui";
import React from "react";
import { ContactModalType, ContactType } from "../../../../../types/Modal/ContactModalType";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer, ModalContent, openDrawer } from "../../../../../store/features";
import { NavigationList } from "./components/NavigationList";

export const Navigation = ({ open }: { open: boolean }) => {
  const [activeContact, setActiveContact] = React.useState<ContactType>(ContactModalType.Contact);

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
      </Modal>

      <nav className={clsx(styles.navigation, open && styles.open)}>
        <NavigationList openDrawer={openDrawer} dispatch={dispatch} />
      </nav>
    </>
  );
};
