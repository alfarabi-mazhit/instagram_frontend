"use client";
// import { useRouter } from "next/navigation";
import Feed from "@/components/pages/feed";
import SignIn from "./sign-in/page";

export default function Home() {
  const isAuth = true;
  // const router = useRouter();
  if (isAuth === true) return <Feed />;
  else return <SignIn />;
  // else return router.replace("/sign-in");
}
