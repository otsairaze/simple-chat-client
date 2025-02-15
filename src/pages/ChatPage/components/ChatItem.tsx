import { Typography } from "../../../shared/shared";

export const ChatItem = () => {
  return (
    <div className="p-4 w-[350px] max-w-[350px] bg-white shadow-md flex gap-3 items-center flex-shrink-0">
      <img
        className="rounded-full w-12 h-12 object-cover"
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
