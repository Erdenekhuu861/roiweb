import { session } from "@/lib/session";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize() {
        const user = await session().get("user");

        if (user) return user;
        else return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id_token = user.id_token;
      }

      return token;
    },
    async session({ session, token }) {
      return session;
    },
    redirect: ({ url, baseUrl }) => {
      return baseUrl;
    },
  },
  pages: {
    signIn: "/",
  },
};
