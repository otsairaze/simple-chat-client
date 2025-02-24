import { Typography } from "../../..";

interface ContactHeaderProps {
  titleText: string;
}

export const ContactHeader = ({ titleText }: ContactHeaderProps) => {
  return (
    <div>
      <Typography variant="title16_regular" tag="h2">
        {titleText}
      </Typography>
    </div>
  );
};
