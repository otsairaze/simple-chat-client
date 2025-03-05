import React from "react";
import { Typography } from "../../../components";

interface ChatSenderProps {}

export const ChatSender = () => {
  return (
    <div className="w-full flex justify-center items-center text-white">
      <Typography variant="title16_regular" tag="p">
        Select a chat to start messaging
      </Typography>
    </div>
  );
};
