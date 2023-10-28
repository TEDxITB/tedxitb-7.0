import { RadioGroupDemo } from "@/components/ui/radio";

export default function test() {
    return (
      <div className="bg-white w-full min-h-screen flex justify-center items-center flex-col gap-y-4">
        <RadioGroupDemo color="ted-black" label="table"></RadioGroupDemo>
        <RadioGroupDemo color="ted-black" label="table"></RadioGroupDemo>
        <RadioGroupDemo color="ted-red" label="table"></RadioGroupDemo>
        <RadioGroupDemo color="ted-red" label="table"></RadioGroupDemo>
        <RadioGroupDemo color="ted-white" label="table"></RadioGroupDemo>
        <RadioGroupDemo color="ted-white" label="table"></RadioGroupDemo>
      </div>
    );
}