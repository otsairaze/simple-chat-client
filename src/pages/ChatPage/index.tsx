import { Container } from "../../shared/shared";
import { ChatItemList } from "./components";

const ChatPage = () => {
  return (
    <Container className="flex">
      <ChatItemList />
    </Container>
  );
};

export default ChatPage;
