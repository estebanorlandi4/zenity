import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const {
  GH_ID,
  GH_SECRET,
  GOOGLE_ID,
  GOOGLE_SECRET,
  NEXTAUTH_URL,
  MONGODB_URI,
} = process.env;

const config = NextAuth({
  session: {
    jsw: true,
  },
  providers: [
    GithubProvider({
      clientId: GH_ID,
      clientSecret: GH_SECRET,
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
