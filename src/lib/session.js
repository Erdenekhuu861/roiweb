import nextAppSession from "next-app-session";

export const session = nextAppSession({
  name: "BBROI",
  secret: process.env.COOKIE_SECRET,
});
