import { CheckboxWithText } from "@/components/ui/checkboxcustom";

export default function test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-8 overflow-hidden bg-white p-2">
      <CheckboxWithText label="lable" isDisabled={true}></CheckboxWithText>
      <CheckboxWithText label="lable" isDisabled={false}></CheckboxWithText>
      <CheckboxWithText label="lable" isDisabled={false}></CheckboxWithText>
    </main>
  );
}
