export const ContactVariant = {
  Contact: "Contact",
  AddContact: "AddContact",
} as const;

type ContactVariantType = typeof ContactVariant;

export type ContactType = ContactVariantType[keyof ContactVariantType];
