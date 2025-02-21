import { SearchBar, Typography } from "../../..";
import { Button } from "../../../..";

import { data } from "../../constants/contact-data";

interface ContactProps {
  closeDrawer: () => void;
  setActiveContact: () => void;
}

export const Contact = ({ closeDrawer, setActiveContact }: ContactProps) => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Typography variant="title18_medium" tag="h2" className="text-white">
            Contacts
          </Typography>
          <SearchBar />
        </div>

        <div className="max-h-[500px] overflow-y-scroll">
          <ul className="flex flex-col gap-4">
            {data.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <img src={item.imageUrl} alt="user" className="w-[50px] h-[50px] rounded-full object-cover" />
                <div className="flex flex-col">
                  <Typography variant="title16_regular" tag="p" className="text-white">
                    {item.name}
                  </Typography>
                  <Typography variant="title16_regular" tag="p" className="text-[#4d84cc]">
                    {item.status}
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
