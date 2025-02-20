import { useEffect } from "react";
import { ChatItemList } from "./components";
import { getMe } from "../../api/requests/auth/me";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/auth/authSlice";
import { Typography } from "../../components/shared";

export const ChatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMe().then((res) => dispatch(setUser(res.data)));
  }, []);

  return (
    <div className="h-full flex">
      <ChatItemList />
      <div className="w-full flex justify-center items-center text-white">
        <Typography variant="title16_regular" tag="p">
          Select a chat to start messaging
        </Typography>
      </div>
    </div>
  );
};
