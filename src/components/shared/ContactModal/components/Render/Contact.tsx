import { useSelector } from "react-redux";
import { SearchBar, Typography } from "../../..";
import { useFindContacts } from "../../../SearchBar/hooks/useFindContacts";

interface ContactItemProps {
  name: string;
  id: number;
}

export const Contact = () => {
  const { users, valueInput } = useFindContacts();

  const data = useSelector((state: any) => state.auth.user);

  console.log(data, "data");

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Typography variant="title18_medium" tag="h2" className="text-white">
            Contacts
          </Typography>
          <SearchBar />
        </div>

        <div>
          {valueInput.length === 0 && (
            <ul className="flex flex-col gap-4 h-full max-h-[340px] overflow-y-auto">
              {data.Contact.length === 0 && <li className="min-h-[240px] text-gray-300 flex items-center justify-center">Отсутствуют контакты</li>}
              {data.Contact.length > 0 &&
                data.Contact?.map((item: ContactItemProps) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <img src="./user.jpg" alt="user" className="w-[50px] h-[50px] rounded-full object-cover" />
                    <div className="flex flex-col">
                      <Typography variant="title16_regular" tag="p" className="text-white">
                        {item.name}
                      </Typography>
                    </div>
                  </li>
                ))}
            </ul>
          )}
          {valueInput.length > 0 && (
            <ul className="flex flex-col gap-4 h-full overflow-y-auto">
              {users.length === 0 && <li className="min-h-[240px] text-gray-300 flex items-center justify-center">Пользователи не найдены</li>}
              {users.length > 0 &&
                users.map((item: ContactItemProps) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <img src="./user.jpg" alt="user" className="w-[50px] h-[50px] rounded-full object-cover" />
                    <div className="flex flex-col">
                      <Typography variant="title16_regular" tag="p" className="text-white">
                        {item.name}
                      </Typography>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

{
  /* <li key={item.id} className="flex items-center gap-4">
<img src="./user.jpg" alt="user" className="w-[50px] h-[50px] rounded-full object-cover" />
<div className="flex flex-col">
  <Typography variant="title16_regular" tag="p" className="text-white">
    {item.name}
  </Typography>
</div>
</li> */
}
