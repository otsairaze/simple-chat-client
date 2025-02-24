export const ContactModalType = {
  Contact: "Contact",
  AddContact: "AddContact",
} as const;

type ContactVariantType = typeof ContactModalType;

export type ContactType = ContactVariantType[keyof ContactVariantType];
