import { Contact, ContactFooter } from "../..";
import { ContactLayout } from "../../../layouts";
import { ContactModalType, ContactType } from "../../../types";

interface RenderProps {
  activeContact: ContactType;
  setActiveContact: (contact: ContactType) => void;
  closeDrawer: () => void;
}

export const RenderContacts = ({ activeContact, closeDrawer, setActiveContact }: RenderProps) => {
  switch (activeContact) {
    case ContactModalType.Contact:
      return (
        <ContactLayout renderFooter={() => <ContactFooter btnText="Add contact" setActiveContact={() => setActiveContact(ContactModalType.AddContact)} closeDrawer={closeDrawer} />}>
          <Contact />
        </ContactLayout>
      );

    case ContactModalType.AddContact:
      return (
        <ContactLayout renderFooter={() => <ContactFooter btnText="Contact" setActiveContact={() => setActiveContact(ContactModalType.Contact)} closeDrawer={closeDrawer} />}>
          <Contact />
        </ContactLayout>
      );
  }
};
