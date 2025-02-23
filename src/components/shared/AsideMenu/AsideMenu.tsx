import { useSelector } from "react-redux";
import styles from "./AsideMenu.module.css";
import { OnlineSvg } from "../../../assets/svg/OnlineSvg/OnlineSvg";
import { Navigation } from "./components";
import { useState } from "react";
import clsx from "clsx";
import { Typography } from "../Typography/Typography";
import { BurgerSvg } from "../../../assets/svg";

export const AsideMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const user = useSelector((state: any) => state.auth.user);

  return (
    <div className={clsx(styles.wrapper, open && styles.open)}>
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div className="flex flex-col items-center gap-5">
            <BurgerSvg onClick={handleOpen} />
            <img src="./user.jpg" alt="user" className="w-[50px] h-[50px] rounded-full object-cover mt-[20px]" />
          </div>
          <OnlineSvg variant="online" className="absolute bottom-0 right-0 " />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Typography variant="title20_semibold" tag="p" className={styles.text}>
            {user.username}
          </Typography>
          <Typography variant="title16_regular" tag="p" className={styles.text}>
            {user.email}
          </Typography>
          <Typography variant="title16_regular" tag="p" className={styles.text}>
            @{user.id}
          </Typography>
        </div>

        <Navigation open={open} />
      </div>
    </div>
  );
};
