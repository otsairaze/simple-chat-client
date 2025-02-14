import { ChatList, FolderList } from "./components";

export const AsideBar = () => {
  return (
    <div className="flex">
      <FolderList />
      <ChatList />
    </div>
  );
};
