import NextAuth, { User } from "next-auth"
import InstagramProvider from "next-auth/providers/instagram"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "../../../lib/mongodb"
import { MongoDBAdapter } from "../../../lib/mongoAdapter"
import EmailProvider from 'next-auth/providers/email';
import nodemailer from 'nodemailer';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT as unknown as number || 0,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 10 * 60, // Magic links are valid for 10 min only
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