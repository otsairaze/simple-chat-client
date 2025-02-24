import { Button } from "../../../ui";

interface ContactFooterProps {
  setActiveContact: () => void;
  closeDrawer: () => void;
  btnText: string;
}

export const ContactFooter = ({ setActiveContact, btnText, closeDrawer }: ContactFooterProps) => {
  return (
    <div className="flex justify-between mt-5">
      <Button variant="none" className="text-[#4d84cc]" onClick={setActiveContact}>
        {btnText}
      </Button>
      <Button variant="none" className="text-[#4d84cc]" onClick={closeDrawer}>
        Close
      </Button>
    </div>
  );
};
