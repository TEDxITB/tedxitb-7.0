import { RadioGroupDemo } from "@/components/ui/radio";

export default function test() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-4 bg-white">
      <RadioGroupDemo color="ted-black" label="table"></RadioGroupDemo>
      <RadioGroupDemo color="ted-black" label="table"></RadioGroupDemo>
      <RadioGroupDemo color="ted-red" label="table"></RadioGroupDemo>
      <RadioGroupDemo color="ted-red" label="table"></RadioGroupDemo>
      <RadioGroupDemo color="ted-white" label="table"></RadioGroupDemo>
      <RadioGroupDemo color="ted-white" label="table"></RadioGroupDemo>
    </div>
  );
}
