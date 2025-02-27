import { useSelector } from "react-redux";
import { Button, Typography } from "../../..";
import { SettingsInfo } from "./SettingsInfo";

export const SettingsAccount = () => {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <SettingsInfo />

        <ul className="m-auto">
          <li>
            <Button className="flex gap-5" variant="none">
              <Typography tag="p" variant="title16_regular">
                Name
              </Typography>
              <Typography tag="p" variant="title16_regular">
                {user.username}
              </Typography>
            </Button>
          </li>
          <li>
            <Button variant="none" className="flex gap-5">
              <Typography tag="p" variant="title16_regular">
                Email
              </Typography>
              <Typography tag="p" variant="title16_regular">
                {user.email}
              </Typography>
            </Button>
          </li>
          <li>
            <Button className="flex gap-5" variant="none">
              <Typography tag="p" variant="title16_regular">
                Date of Birth
              </Typography>
              <Typography tag="p" variant="title16_regular">
                ...
              </Typography>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};
