"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import Link from "next/link";

export default function BecomeSponsorButtonModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size="lg" className="font-anderson lg:h-12 lg:px-10 lg:text-lg" aria-label="Click to become a sponsor">
          Become a Sponsor
        </Button>
      </DialogTrigger>
      <DialogContent
        // backgroundimage="/modalBackgroundType3.png"
        className="h-fit bg-[#1C1C1C] font-anderson text-white"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-wider">
            Contact Us
          </DialogTitle>
          <DialogDescription className="text-center">
            Please contact us for further information
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          {/* Contact Person 1 */}
          <div>
            <p className="font-semibold tracking-wide">
              Esther Pauline Napitupulu
            </p>
            <p>Director of Fundraise TEDxITB 7.0</p>
            <Link
              className="block"
              href="tel:+6282179253838"
              aria-label="Contact TEDxITB through phone"
            >
              <Button variant="link" className="h-fit p-0 text-base text-white">
                082179253838
              </Button>
            </Link>
            <Link
              className="block"
              href="mailto:sponsorshiptedxitb7.0@gmail.com"
              aria-label="Contact TEDxITB through email to engage sponsorships"
            >
              <Button variant="link" className="h-fit p-0 text-base text-white" aria-label="Our email">
                sponsorshiptedxitb7.0@gmail.com
              </Button>
            </Link>
          </div>

          {/* Contact Person 2 */}
          <div>
            <p className="font-semibold tracking-wide">Naurah Cantika Zuhair</p>
            <p>Vice Director of Fundraise TEDxITB 7.0</p>
            <Button variant="link" className="h-fit p-0 text-base text-white">
              <Link
                className="block"
                href="tel:+6282375092511"
                aria-label="Contact TEDxITB through phone"
              >
                082375092511
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
