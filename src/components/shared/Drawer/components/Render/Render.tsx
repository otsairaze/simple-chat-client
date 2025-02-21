import { ContactType, ContactVariant } from "../../constants";

import { AddContactForm } from "./AddContactForm";
import { Contact } from "./Contact";

interface RenderProps {
  activeContact: ContactType;
  setActiveContact: (contact: ContactType) => void;
  closeDrawer: () => void;
}

export const Render = ({ activeContact, closeDrawer, setActiveContact }: RenderProps) => {
  switch (activeContact) {
    case ContactVariant.Contact:
      return <Contact closeDrawer={closeDrawer} setActiveContact={() => setActiveContact(ContactVariant.AddContact)} />;
    case ContactVariant.AddContact:
      return <AddContactForm />;
  }
};
