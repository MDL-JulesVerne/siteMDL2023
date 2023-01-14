import NextAuth, { User } from "next-auth"
import InstagramProvider from "next-auth/providers/instagram"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "../../../lib/mongodb"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async session({ session, token, user }: any) {
      session.user.role = user.role; // Add role value to user object so it is passed along with session
      return session;
    }
  },
  adapter: MongoDBAdapter(clientPromise),
}

export default NextAuth(authOptions)