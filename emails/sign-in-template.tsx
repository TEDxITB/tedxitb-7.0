import {
  Button,
  Section,
  Text,
  Html,
  Tailwind,
  Img,
  Container,
  Head,
  Font,
  Link,
  Hr,
  Preview,
  Body,
} from "@react-email/components";

export default function SignInEmail({ url }: { url: string }) {
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
      <Preview>
        Dear User, click this button below if you want to verify sign in / sign
        up request to tedxitb.id! After you click this, you will be signed in
        and redirected to the app. *If you didn&apos;t request this, please
        ignore this email!* Best, TEDxITB
      </Preview>
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
        <Body className="bg-white">
          <Container className="flex aspect-video w-full max-w-[800px] flex-col items-center justify-center p-12">
            <Section className="flex flex-col items-center justify-center">
              <Container className="relative h-[100px] w-[300px]" content="">
                <Img
                  src="https://tedxitb.id/logo/tedxitb-logo-black-cropped.png"
                  alt="TEDxITB Logo"
                  width={300}
                  height={150}
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
                <Link href="https://tedxitb.id" className="text-blue-400">
                  tedxitb.id!
                </Link>{" "}
                After you click this, you will be signed in and redirected to
                the app.
              </Text>
              <Container
                className="flex w-full flex-row items-center justify-center"
                style={{ maxWidth: "fit-content" }}
              >
                <Button
                  href={url}
                  className="flex flex-col items-center justify-center rounded-md border-none bg-ted-red px-5 py-3 text-primary-foreground text-white hover:bg-ted-red/90"
                >
                  <Text className="m-0 text-sm">Verify Request</Text>
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
                <Text className="text-lg font-bold">TEDxITB</Text>
              </Section>
              <Hr className="border-slate-300 font-semibold" />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
