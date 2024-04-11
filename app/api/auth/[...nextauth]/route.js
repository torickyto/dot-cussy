import NextAuth from "next-auth/next";
import SpotifyProvider from "next-auth/providers/spotify"

const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "streaming user-read-email user-read-private",
          // Add other scopes needed for your application
        },
      },
    }),
  ],
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}

