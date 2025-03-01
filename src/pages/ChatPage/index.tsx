import { useEffect } from "react";

import { getMe } from "../../api/requests/auth/me";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/auth/authSlice";
import { SearchGlobal, Typography } from "../../components/shared";
import { useFindUsers } from "../../components/shared/SearchGlobal/hooks/useFindUsers";

export const ChatPage = () => {
  // const inputRef = useRef<HTMLInputElement>(null);
  // const [value, setValue] = useState("");

  const dispatch = useDispatch();

  //.on - слушает событие, .emit - отправляет событие

  // useEffect(() => {
  //   if (value) {
  //     socket.on("newMessage", (data) => {
  //       console.log(data);
  //     });
  //     socket.emit("sendMessage", {
  //       text: value,
  //     });
  //   }
  // }, [value]);

  useEffect(() => {
    getMe()
      .then((res) => {
        console.log("getMe Response:", res);
        console.log("User Data:", res.data);
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.error("getMe Error:", err);
      });
  }, []);

  const { users } = useFindUsers();

  return (
    <div className="h-full flex">
      <div>
        <SearchGlobal />
        <div>
          {users.map((user) => (
            <div className="p-5 w-[350px] max-w-[350px] flex gap-3 items-center bg-[#17212b]">
              <img className="rounded-full w-[40px] h-[40px] object-cover" src="/image.jpg" alt="profileImage" />
              <div className="flex flex-col gap-1 w-full">
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

      <div className="w-full flex justify-center items-center text-white">
        <Typography variant="title16_regular" tag="p">
          Select a chat to start messaging
        </Typography>
        {/* <input type="text" className="border border-gray-600" ref={inputRef} />
        <button onClick={() => setValue(inputRef.current?.value || "")}>Send</button> */}
      </div>
    </div>
  );
};
