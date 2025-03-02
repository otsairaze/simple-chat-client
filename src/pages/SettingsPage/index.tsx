import { Container } from "../../components/shared";

export const SettingsPage = () => {
  // const inputRef = useRef<HTMLInputElement>(null);
  // const [value, setValue] = useState("");

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

  {
    /* <input type="text" className="border border-gray-600" ref={inputRef} />
        <button onClick={() => setValue(inputRef.current?.value || "")}>Send</button> */
  }

  return (
    <Container>
      <h1>Settings</h1>
    </Container>
  );
};
