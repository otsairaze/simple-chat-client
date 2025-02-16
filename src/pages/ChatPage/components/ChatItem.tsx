import { Typography } from "../../../components/shared";

export const ChatItem = () => {
  return (
    <div className="p-4 w-[350px] max-w-[350px] flex gap-3 items-center">
      <img
        className="rounded-full w-[40px] h-[40px] object-cover"
        src="/image.jpg"
        alt="profileImage"
      />
      <div className="flex flex-col gap-1 w-full">
        <Typography variant="title16_regular" tag="span">
          славик
        </Typography>
        <Typography
          variant="title16_regular"
          tag="span"
          className="text-gray-600"
        >
          я больше не хочу те...
        </Typography>
      </div>
    </div>
  );
};
