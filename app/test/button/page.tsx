import { Button } from "@/components/ui/button"

export default function ButtonTest() {
  return (
    <main className="m-20 grid grid-cols-4 gap-20">
      <div className="flex flex-col gap-y-4">
        <Button variant="var1" size="type1">Label</Button>
        <Button variant="var1" size="type2">Label</Button>
        <Button variant="var1" size="type2">Label</Button>
        <Button variant="var1" size="type3">Label</Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="var1" size="type4">Label</Button>
        <Button variant="var1" size="type5">Label</Button>
        <Button variant="var1" size="type5">Label</Button>
        <Button variant="var1" size="type6">Label</Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="var2" size="type4">Label</Button>
        <Button variant="var2" size="type5">Label</Button>
        <Button variant="var2" size="type5">Label</Button>
        <Button variant="var2" size="type6">Label</Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="var3" size="type4">Label</Button>
        <Button variant="var3" size="type5">Label</Button>
        <Button variant="var3" size="type5">Label</Button>
        <Button variant="var3" size="type6">Label</Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="var4" size="type4">Label</Button>
        <Button variant="var4" size="type5">Label</Button>
        <Button variant="var4" size="type5">Label</Button>
        <Button variant="var4" size="type6">Label</Button>
      </div>

      

    </main>
  )
}