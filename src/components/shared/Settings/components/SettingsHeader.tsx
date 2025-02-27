import { Typography } from "../../..";
import { CloseSvg } from "../../../../assets/svg";

interface SettingsHeaderProps {
  titleText: string;
}

export const SettingsHeader = ({ titleText }: SettingsHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <Typography variant="title16_regular" tag="h2">
        {titleText}
      </Typography>
      <CloseSvg />
    </div>
  );
};
