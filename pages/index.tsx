
import Head from "next/head";
import Home from "./home";
import Header from "@/components/layout/header";

export default function Index() {
  return (
    <div
      className={`flex min-h-screen flex-col justify-between`}>
      <Header/>
      <Home />
    </div>
  );
}
