import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const { GH_ID, GH_SECRET, NEXTAUTH_URL, MONGODB_URI } = process.env;

const SCOPES = ['user', 'repo'].join('+');

const config = NextAuth({
  session: {
    jsw: true,
  },
  providers: [
    GithubProvider({
      clientId: GH_ID,
      clientSecret: GH_SECRET,
      authorization: `https://github.com/login/oauth/authorize?scope=${SCOPES}`,
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
  database: MONGODB_URI,
  callbacks: {
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      session.userId = token.sub;

      return Promise.resolve(session);
    },
    async jwt({ token, account }) {
      if (account) token.accessToken = account.access_token;
      return token;
    },
  },
});

export default config;
