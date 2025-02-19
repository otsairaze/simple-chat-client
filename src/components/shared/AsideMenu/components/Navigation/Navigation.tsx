import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useMenu } from "./useMenu";
import { Typography } from "../../..";
import clsx from "clsx";

export const Navigation = ({ open }: { open: boolean }) => {
  const { items } = useMenu();

  return (
    <nav className={clsx(styles.navigation, open && styles.open)}>
      {items.map((item) => (
        <NavLink key={item.path} to={item.path} className="flex items-center py-1" onClick={item.onClick}>
          <item.icon />
          <Typography variant="title16_regular" tag="p" className={styles.text}>
            {item.title}
          </Typography>
        </NavLink>
      ))}
    </nav>
  );
};
