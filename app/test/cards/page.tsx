import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardImage,
} from "@/components/ui/cards";

export default function CardTest() {
  return (
    <main className="m-20">
      <Card className="w-[350px]">
        <CardImage
          src="/tedxitb-link-preview.png"
          width={500}
          height={500}
          alt="image"
        />
        <CardContent>
          <CardTitle>TITLE</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardDescription>
        </CardContent>
      </Card>
    </main>
  );
}
