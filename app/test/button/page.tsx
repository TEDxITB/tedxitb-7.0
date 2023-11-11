import { Button } from "@/components/ui/button";

export default function ButtonTest() {
  return (
    <main className="m-20 grid grid-cols-4 gap-20">
      <div className="flex flex-col gap-y-4">
        <Button variant="primary" size="default-rounded">
          Label
        </Button>
        <Button variant="primary" size="sm-rounded">
          Label
        </Button>
        <Button variant="primary" size="sm-rounded">
          Label
        </Button>
        <Button variant="primary" size="icon-rounded">
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="primary" size="default">
          Label
        </Button>
        <Button variant="primary" size="sm">
          Label
        </Button>
        <Button variant="primary" size="sm">
          Label
        </Button>
        <Button variant="primary" size="icon">
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="secondary" size="default">
          Label
        </Button>
        <Button variant="secondary" size="sm">
          Label
        </Button>
        <Button variant="secondary" size="sm">
          Label
        </Button>
        <Button variant="secondary" size="icon">
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="outline" size="default">
          Label
        </Button>
        <Button variant="outline" size="sm">
          Label
        </Button>
        <Button variant="outline" size="sm">
          Label
        </Button>
        <Button variant="outline" size="icon">
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="ghost" size="default">
          Label
        </Button>
        <Button variant="ghost" size="sm">
          Label
        </Button>
        <Button variant="ghost" size="sm">
          Label
        </Button>
        <Button variant="ghost" size="icon">
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="link" size="default">
          Label
        </Button>
        <Button variant="link" size="sm">
          Label
        </Button>
        <Button variant="link" size="sm">
          Label
        </Button>
        <Button variant="link" size="icon">
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="primary" size="default-rounded" disabled>
          Label
        </Button>
        <Button variant="primary" size="sm-rounded" disabled>
          Label
        </Button>
        <Button variant="primary" size="sm-rounded" disabled>
          Label
        </Button>
        <Button variant="primary" size="icon-rounded" disabled>
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="primary" size="default" disabled>
          Label
        </Button>
        <Button variant="primary" size="sm" disabled>
          Label
        </Button>
        <Button variant="primary" size="sm" disabled>
          Label
        </Button>
        <Button variant="primary" size="icon" disabled>
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="secondary" size="default" disabled>
          Label
        </Button>
        <Button variant="secondary" size="sm" disabled>
          Label
        </Button>
        <Button variant="secondary" size="sm" disabled>
          Label
        </Button>
        <Button variant="secondary" size="icon" disabled>
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="outline" size="default" disabled>
          Label
        </Button>
        <Button variant="outline" size="sm" disabled>
          Label
        </Button>
        <Button variant="outline" size="sm" disabled>
          Label
        </Button>
        <Button variant="outline" size="icon" disabled>
          Label
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Button variant="ghost" size="default" disabled>
          Label
        </Button>
        <Button variant="ghost" size="sm" disabled>
          Label
        </Button>
        <Button variant="ghost" size="sm" disabled>
          Label
        </Button>
        <Button variant="ghost" size="icon" disabled>
          Label
        </Button>
      </div>
    </main>
  );
}
