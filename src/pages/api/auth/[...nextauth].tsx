import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Github 발급 id",
      clientSecret: "Github 발급 password",
    }),
  ],
  secret: "jwt생성시쓰는암호",
};

export default NextAuth(authOptions);
