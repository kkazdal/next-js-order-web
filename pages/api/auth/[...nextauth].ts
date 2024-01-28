import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GithubProvider from "next-auth/providers/github";
import clientPromise from "@/util/mongo";

//Github,google,yandex gibi ikinci parti yazılımlarından register işlemi yapmak için kullan.
export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
    pages: {
        signIn: "/auth/login"
    }
});