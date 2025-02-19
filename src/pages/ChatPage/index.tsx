import { useEffect } from "react";
import { ChatItemList } from "./components";
import { getMe } from "../../api/requests/auth/me";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/auth/authSlice";

export const ChatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMe().then((res) => dispatch(setUser(res.data)));
  }, []);

  return (
    <div className="h-full flex p-[30px]">
      {/* <ChatItemList /> */}
      <div className="w-full">1</div>
    </div>
  );
};
