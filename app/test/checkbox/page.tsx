import { CheckboxWithText } from "@/components/ui/checkboxcustom";

export default function test() {
  return (
    <main className="flex min-h-screen flex-col justify-center gap-y-8 overflow-hidden bg-white px-[40%] ">
      <CheckboxWithText
        label="Text Table"
        isDisabled={false}
      ></CheckboxWithText>
      <CheckboxWithText
        label="Text Table 1"
        isDisabled={false}
      ></CheckboxWithText>
      <CheckboxWithText
        label="Text Table 2"
        isDisabled={true}
      ></CheckboxWithText>
    </main>
  );
}
