import "server-only";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { resend } from "@/lib/resend";
import { type AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";
import SignInEmail from "@/emails/sign-in-template";
import WelcomeEMail from "@/emails/welcome-template";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({ identifier, url, provider }) {
        try {
          await resend.emails.send({
            from: provider.from,
            to: identifier,
            subject: "Verify Request to TEDxITB 7.0 Website",
            react: SignInEmail({ url: url }),
          });
        } catch (error) {
          console.log({ error });
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          prompt: "select_account",
          scope:
            "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger }) {
      // Everything except token is null after next refrest after sign in.
      // account -> Email provider: Email specific data; oAuth Provider: oAuth specific data (procider, access token, ect)
      // profile -> oAuth specific data (oAuth user data)
      // user -> User data from database (adapter)

      // Runs when user sign in
      if (user) {
        // Update token
        token.id = user.id;
        token.email = user.email as string;
        token.name = user.name ?? null;
      }

      return token;
    },
    async session({ session, token }) {
      // Update session object
      session.id = token.id;
      session.email = token.email;
      session.name = token.name;

      return session;
    },
  },
  events: {
    async signIn({ isNewUser, user, account }) {
      // If user is new
      if (isNewUser && user.email) {
        // Send welcome email
        try {
          await resend.emails.send({
            from: process.env.EMAIL_FROM as string,
            to: user.email,
            subject: "Welcome to TEDxITB 7.0 Website!",
            react: WelcomeEMail(),
          });
        } catch (error) {
          console.log({ error });
        }
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 86400, // Time since **IDLE**
  },
  pages: {
    signIn: "/auth/sign-in",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
};
