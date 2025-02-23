import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useMenu } from "./useMenu";
import { Typography } from "../../..";
import clsx from "clsx";
import { Button, Modal } from "../../../../ui";
import { FriendsSvg } from "../../../../../assets/svg";
import { useDrawer } from "../../../../../hooks/useDrawer";
import { Render } from "../../../ContactModal/components";
import React from "react";
import { ContactType, ContactVariant } from "../../../ContactModal/constants";

export const Navigation = ({ open }: { open: boolean }) => {
  const { items } = useMenu();

  const [activeContact, setActiveContact] = React.useState<ContactType>(ContactVariant.Contact);

  const { isOpen, closeDrawer, openDrawer } = useDrawer();

  const onHandleClick = () => {
    closeDrawer();
    setActiveContact(ContactVariant.Contact);
  };

  return (
    <>
      <Modal isOpen={isOpen} closeDrawer={onHandleClick} className="max-w-[360px]">
        <Render activeContact={activeContact} closeDrawer={onHandleClick} setActiveContact={setActiveContact} />
      </Modal>

      <nav className={clsx(styles.navigation, open && styles.open)}>
        {items.map((item) => (
          <NavLink key={item.path} to={item.path} className="flex items-center py-1" onClick={item.onClick}>
            <item.icon />
            <Typography variant="title16_regular" tag="p" className={styles.text}>
              {item.title}
            </Typography>
          </NavLink>
        ))}
        <Button className="flex items-center py-1 text-start" variant="none" onClick={openDrawer}>
          <FriendsSvg />
          <Typography variant="title16_regular" tag="p" className={styles.text}>
            Contacts
          </Typography>
        </Button>
      </nav>
    </>
  );
};
