import { RadioGroupDemo } from "@/components/ui/radio";

export default function test() {
    return (
      <div className="bg-white w-full min-h-screen flex justify-center items-center flex-col gap-y-4">
        <RadioGroupDemo color="default" label="Label" isDisabled={false}></RadioGroupDemo>
        <RadioGroupDemo color="default" label="Label" isDisabled={false}></RadioGroupDemo>
        <RadioGroupDemo color="black" label="Label" isDisabled={false}></RadioGroupDemo>
        <RadioGroupDemo color="black" label="Label" isDisabled={false}></RadioGroupDemo>
        <RadioGroupDemo color="green" label="Label" isDisabled={false}></RadioGroupDemo>
        <RadioGroupDemo color="green" label="Label" isDisabled={false}></RadioGroupDemo>
        <RadioGroupDemo color="yellow" label="Label" isDisabled={false}></RadioGroupDemo>
        <RadioGroupDemo color="yellow" label="Label" isDisabled={false}></RadioGroupDemo>
        <RadioGroupDemo color="yellow" label="Label" isDisabled={true}></RadioGroupDemo>
      </div>
    );
}