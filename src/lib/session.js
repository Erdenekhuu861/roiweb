import nextAppSession from "next-app-session";

export const session = nextAppSession({
  name: "BBROI_SID",
  secret: process.env.COOKIE_SECRET,
  cookie: {
    maxAge: 3600,
    secure: true,
    httpOnly: true,
  },
});
