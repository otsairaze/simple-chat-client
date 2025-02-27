import { useSelector } from "react-redux";
import { Typography } from "../../..";

export const SettingsInfo = () => {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <div className="flex gap-[20px] mt-10">
      <img src="./user.jpg" alt="" className="w-[100px] h-[100px] rounded-full object-cover" />
      <div className="flex flex-col gap-2">
        <Typography variant="title20_semibold" tag="h2">
          {user.username}
        </Typography>
        <Typography variant="title16_regular" tag="p">
          {user.email}
        </Typography>
        <Typography variant="title16_regular" tag="p">
          {user.id}
        </Typography>
      </div>
    </div>
  );
};
