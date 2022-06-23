import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const { GH_ID, GH_SECRET, NEXTAUTH_URL } = process.env;

const config = NextAuth({
  providers: [
    GithubProvider({
      clientId: GH_ID,
      clientSecret: GH_SECRET,
      async request({ client, tokens }) {
        const profile = await client.userinfo(tokens);
        console.log(profile);
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user',
  },
  secret: NEXTAUTH_URL,
});

export default config;
