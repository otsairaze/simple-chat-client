import ContactLayout from "../../../../../layouts/ContactLayout";
import { ContactType, ContactVariant } from "../../constants";
import { ContactFooter } from "../ContactFooter/ContactFooter";

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
      return (
        <ContactLayout renderFooter={() => <ContactFooter btnText="Add contact" setActiveContact={() => setActiveContact(ContactVariant.AddContact)} closeDrawer={closeDrawer} />}>
          <Contact />
        </ContactLayout>
      );

    case ContactVariant.AddContact:
      return (
        <ContactLayout renderFooter={() => <ContactFooter btnText="Contact" setActiveContact={() => setActiveContact(ContactVariant.Contact)} closeDrawer={closeDrawer} />}>
          <AddContactForm />
        </ContactLayout>
      );
  }
};
