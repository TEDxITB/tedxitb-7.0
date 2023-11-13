import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Img } from "@react-email/img";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Font } from "@react-email/font";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/hr";

export default function Email() {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                "ted-red": "#FF2B06",
              },
            },
          },
        }}
      >
        <Container className="flex aspect-video w-full max-w-[800px] flex-col items-center justify-center bg-white p-12">
          <main className="flex flex-col items-center justify-center">
            <div className="relative h-[100px] w-[300px]" content="">
              <Img
                src="https://drive.google.com/uc?id=1Hi3jlWlndytVIfXwl5Z-jSA-Vo70fZEa
"
                alt=""
                width={300}
                height={100}
                className="absolute left-[25px]"
              />
            </div>
            <h4
              className="text-bold self-start"
              style={{ fontFamily: "Roboto" }}
            >
              Dear User
            </h4>
            <p style={{ fontFamily: "Roboto" }}>
              Click this button below if you want to verify sign in / sign up
              request to{" "}
              <Link href="tedxitb.id" className="text-blue-400">
                tedxitb.id!
              </Link>{" "}
              After you clicked this, you will be signed in and redirected to
              the app.
            </p>
            <button className="flex h-10 items-center justify-center rounded-md border-none bg-ted-red px-4 py-2 text-primary-foreground text-white hover:bg-ted-red/90">
              <div>Click here</div>
            </button>
            <p style={{ fontFamily: "Roboto" }} className="text-ted-red">
              *If you didn&apos;t request this, please ignore this email!*{" "}
            </p>
            <footer className="flex flex-col gap-0.5 self-start">
              <p>Best,</p>
              <h4 className="font-bold">Tedx ITB</h4>
            </footer>
            <Hr className="border-slate-300 font-semibold" />
          </main>
        </Container>
      </Tailwind>
    </Html>
  );
}
