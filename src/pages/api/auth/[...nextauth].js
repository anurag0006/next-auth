import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"




export default NextAuth({
    providers:[
        //google provider
        GoogleProvider({
            clientId:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SEC,
        }),
    ]
})