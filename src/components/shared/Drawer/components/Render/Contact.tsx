import { useSelector } from "react-redux";
import { SearchBar, Typography } from "../../..";
import { Button } from "../../../..";
import { useSearch } from "../../../SearchBar/hooks/useSearch";

interface ContactProps {
  closeDrawer: () => void;
  setActiveContact: () => void;
}

interface ContactItemProps {
  name: string;
  id: number;
}

export const Contact = ({ closeDrawer, setActiveContact }: ContactProps) => {
  const data = useSelector((state: any) => state.auth.user.contacts) || [];

  const { setSearchValue, searchValue } = useSearch();

  const filteredData = searchValue.trim() !== "" ? data.filter((item: ContactItemProps) => item.name.toLowerCase().includes(searchValue.toLowerCase())) : data;

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Typography variant="title18_medium" tag="h2" className="text-white">
            Contacts
          </Typography>
          <SearchBar onSearch={setSearchValue} />
        </div>

        <div className="max-h-[500px] overflow-y-scroll">
          <ul className="flex flex-col gap-4">
            {filteredData.length > 0 &&
              filteredData.map((item: ContactItemProps) => (
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
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <Button variant="none" className="text-[#4d84cc]" onClick={setActiveContact}>
          Add Contact
        </Button>
        <Button variant="none" className="text-[#4d84cc]" onClick={closeDrawer}>
          Close
        </Button>
      </div>
    </>
  );
};
