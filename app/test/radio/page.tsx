import { RadioGroupDemo } from "@/components/ui/radio";

export default function test() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-4 bg-white">
      <RadioGroupDemo
        color="default"
        label="Label"
        isDisabled={false}
      ></RadioGroupDemo>
      <RadioGroupDemo
        color="default"
        label="Label"
        isDisabled={false}
      ></RadioGroupDemo>
      <RadioGroupDemo
        color="black"
        label="Label"
        isDisabled={false}
      ></RadioGroupDemo>
      <RadioGroupDemo
        color="black"
        label="Label"
        isDisabled={false}
      ></RadioGroupDemo>
      <RadioGroupDemo
        color="green"
        label="Label"
        isDisabled={false}
      ></RadioGroupDemo>
      <RadioGroupDemo
        color="green"
        label="Label"
        isDisabled={false}
      ></RadioGroupDemo>
      <RadioGroupDemo
        color="yellow"
        label="Label"
        isDisabled={false}
      ></RadioGroupDemo>
      <RadioGroupDemo
        color="yellow"
        label="Label"
        isDisabled={false}
      ></RadioGroupDemo>
      <RadioGroupDemo
        color="yellow"
        label="Label"
        isDisabled={true}
      ></RadioGroupDemo>
    </div>
  );
}
