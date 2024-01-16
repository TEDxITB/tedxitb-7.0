import {
  Section,
  Text,
  Html,
  Tailwind,
  Img,
  Container,
  Head,
  Font,
  Hr,
  Preview,
  Body,
} from "@react-email/components";

export default function WelcomeEMail() {
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
        Welcome to TEDxITB – where Ideas Worth Spreading come to life! We are
        thrilled to have you on board, and we can&apos;t wait to embark on a
        journey of inspiration, knowledge, and innovation together. Here at
        TEDxITB, we believe in the power of ideas to change the world. By
        joining our community, you&apos;ve taken the first step toward being
        part of a global movement that celebrates creativity, curiosity, and the
        boundless potential of human thought.
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
              <Container className="relative h-[60px] w-[95px]" content="">
                <Img
                  src="https://tedxitb.id/logo/x-logo-red-full-cropped.png"
                  alt="TEDxITB 7.0 Logo"
                  width={95}
                  height={60}
                />
              </Container>
              <Text
                className="block self-start text-lg font-bold"
                style={{ fontFamily: "Roboto" }}
              >
                Welcome!
              </Text>
              <Text
                className="text-base leading-5"
                style={{ fontFamily: "Roboto" }}
              >
                Welcome to TEDxITB – where Ideas Worth Spreading come to life!
                We are thrilled to have you on board, and we can&apos;t wait to
                embark on a journey of inspiration, knowledge, and innovation
                together. Here at TEDxITB, we believe in the power of ideas to
                change the world. By joining our community, you&apos;ve taken
                the first step toward being part of a global movement that
                celebrates creativity, curiosity, and the boundless potential of
                human thought.
              </Text>
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
