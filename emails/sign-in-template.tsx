import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Img } from "@react-email/img";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Font } from "@react-email/font";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/hr";
import { Button, Section, Text } from "@react-email/components";

export default function EmailTemplate() {
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
          <Section className="flex flex-col items-center justify-center">
            <Container className="relative h-[100px] w-[300px]" content="">
              <Img
                src="https://drive.google.com/uc?id=1Hi3jlWlndytVIfXwl5Z-jSA-Vo70fZEa
"
                alt=""
                width={300}
                height={100}
              />
            </Container>
            <Text
              className="block self-start text-lg font-bold"
              style={{ fontFamily: "Roboto" }}
            >
              Dear User
            </Text>
            <Text
              className="text-base leading-5"
              style={{ fontFamily: "Roboto" }}
            >
              Click this button below if you want to verify sign in / sign up
              request to{" "}
              <Link href="tedxitb.id" className="text-blue-400">
                tedxitb.id!
              </Link>{" "}
              After you click this, you will be signed in and redirected to the
              app.
            </Text>
            <Container
              className="flex w-full flex-row items-center justify-center"
              style={{ maxWidth: "fit-content" }}
            >
              <Button className="flex  flex-col items-center justify-center rounded-md border-none bg-ted-red px-4 py-2 text-primary-foreground text-white hover:bg-ted-red/90">
                <Text className="m-0 text-sm">Click here</Text>
              </Button>
            </Container>
            <Container
              className="flex flex-row items-center justify-center"
              style={{ maxWidth: "fit-content" }}
            >
              <Text
                style={{ fontFamily: "Roboto" }}
                className=" text-base text-ted-red"
              >
                *If you didn&apos;t request this, please ignore this email!*{" "}
              </Text>
            </Container>
            <Section className="flex flex-col gap-0.5 self-start">
              <Text className="text-base">Best,</Text>
              <Text className="text-lg font-bold">Tedx ITB</Text>
            </Section>
            <Hr className="border-slate-300 font-semibold" />
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
}
