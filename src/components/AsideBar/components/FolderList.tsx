import React from "react";

export const FolderList = () => {
  const arr = ["Все чаты", "Контакты"];

  return (
    <div className="h-full bg-[#7E7E82]">
      <ul className="h-full overflow-y-auto">
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
