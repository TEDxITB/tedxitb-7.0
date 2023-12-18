import EmailTemplate from "./sign-in-template";
import { Preview } from "@react-email/components";

export default function Email() {
  return (
    <>
      <Preview>
        Click this button below if you want to verify sign-in/sign-up request to
        TEDxITB 7.0. If you didn&apos;t request this, please ignore this email!
      </Preview>
      <EmailTemplate />;
    </>
  );
}
