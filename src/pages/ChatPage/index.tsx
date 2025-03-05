import { useEffect, useState } from "react";

import { getMe } from "../../api/requests/auth/me";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/auth/authSlice";
import { SearchGlobal, Typography } from "../../components/shared";
import { useFindUsers } from "../../components/shared/SearchGlobal/hooks/useFindUsers";
import { ChatUser, User } from "../../types/User/User";
import { ChatSender } from "./components";

export const ChatPage = () => {
  const [chat, setChat] = useState({ chatMembers: [] });
  const dispatch = useDispatch();
  const { users, valueInput } = useFindUsers();

  useEffect(() => {
    getMe()
      .then((res) => {
        setChat(res.data);
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.error("getMe Error:", err);
      });
  }, []);

  return (
    <div className="h-full flex">
      <div>
        <SearchGlobal />

        <div className="w-[350px] p-5 max-w-[350px] bg-[#17212b]">
          {valueInput.length === 0
            ? chat.chatMembers.map((data: ChatUser) => (
                <div key={data.chat.id}>
                  <Typography variant="title16_regular" tag="p">
                    {data.chat.name}
                  </Typography>
                </div>
              ))
            : valueInput.length > 0 &&
              users.map((user: User) => (
                <div className="flex p-5 gap-3">
                  <img className="rounded-full w-[40px] h-[40px] object-cover" src="/image.jpg" alt="profileImage" />
                  <div className="flex flex-col">
                    <Typography variant="title16_regular" tag="p" className="text-white">
                      {user.username}
                    </Typography>
                    <Typography variant="title16_regular" tag="p" className="text-gray-600">
                      Lorem ipsum dolor
                    </Typography>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <ChatSender />
    </div>
  );
};
