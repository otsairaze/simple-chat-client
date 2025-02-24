import { Button } from "../../../../../ui";
import { FriendsSvg, SettingsSvg } from "../../../../../../assets/svg";
import { Typography } from "../../../../..";
import { ModalContent } from "../../../../../../store/features";
import styles from "./NavigationList.module.css";

interface NavigationListProps {
  openDrawer: (content: ModalContent) => void;
  dispatch: any;
}

export const NavigationList = ({ openDrawer, dispatch }: NavigationListProps) => {
  return (
    <>
      <Button variant="none" className="flex" onClick={() => dispatch(openDrawer(ModalContent.Settings))}>
        <SettingsSvg />
        <Typography variant="title16_regular" tag="p" className={styles.text}>
          Settings
        </Typography>
      </Button>
      <Button variant="none" className="flex" onClick={() => dispatch(openDrawer(ModalContent.Contacts))}>
        <FriendsSvg />
        <Typography variant="title16_regular" tag="p" className={styles.text}>
          Settings
        </Typography>
      </Button>
    </>
  );
};
