import "./globals.css";
import Script from "next/script";
import BodyLayout from "./body-layout";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Body */}
      <BodyLayout>
        <div className="m-10 grid gap-6">
          <Breadcrumbs homeElement={"Home"} variant="default" />
          <Breadcrumbs homeElement={"Home"} variant="highlighted" />
        </div>
        {children}
      </BodyLayout>

      {/* Hotjar */}
      <Script
        id="hotjar"
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3323572,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
    </html>
  );
}
